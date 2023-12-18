from enum import Enum
import pytesseract
from PIL import Image
from variant import Input, InputType, input_type_dict


def parse_input(line: str) -> Input:
    fragments = line.split(" ")
    input_type = input_type_dict[fragments[0]]
    if input_type == InputType.inputText:
        min = int(fragments[1][1:])
        max = int(fragments[3][:-1])
        return Input(input_type, None, min, max, None)
    return Input(input_type, None, None, None, None)


def get_text(image: Image):
    # Open the image file
    # image.show()

    width, height = image.size  # Get dimensions
    left = 100
    top = 220
    right = width
    bottom = height - 10
    properties = image.crop((left, top, right, bottom))

    # properties.show()

    # Perform OCR using PyTesseract
    text: str = pytesseract.image_to_string(
        properties,
        lang="eng",
        config="--psm 6",
    )

    print(text)

    return text


def get_inputs(image: Image) -> [Input, Input, Input]:
    text = get_text(image)

    lines = text.splitlines()

    x_input = parse_input(lines[0])
    y_input = parse_input(lines[1])
    radius_input = parse_input(lines[2])

    return x_input, y_input, radius_input


class Shape(Enum):
    CIRCLE = 1
    SQUARE = 2
    TRIANGLE = 3


COLOR = (51, 153, 255)


# test shape of left top square
def get_shape(image: Image) -> [Shape, int, int]:
    rgb_im = image.convert("RGB")
    # (35, 35) [square 2x2]
    # (60, 60) [circle 2x2]
    # (45, 85) [square 2x1]
    # (85, 45) [square 1x2]
    # (105, 50) + (50, 105) [triangle 2x2]
    # (50, 105) [triangle 2x1]
    # (105, 50) [triangle 1x2]
    # (72, 72) [square 1x1]
    # (86, 86) [circle 1x1]
    # (105, 105) [triangle 1x1]

    # image.show()

    if rgb_im.getpixel((35, 35)) == COLOR:
        return [Shape.SQUARE, 2, 2]
    if rgb_im.getpixel((60, 60)) == COLOR:
        return [Shape.CIRCLE, 2, 2]
    if rgb_im.getpixel((45, 85)) == COLOR:
        return [Shape.SQUARE, 2, 1]
    if rgb_im.getpixel((85, 45)) == COLOR:
        return [Shape.SQUARE, 1, 2]
    if rgb_im.getpixel((105, 50)) == rgb_im.getpixel((50, 105)) == COLOR:
        return [Shape.TRIANGLE, 2, 2]
    if rgb_im.getpixel((50, 105)) == COLOR:
        return [Shape.TRIANGLE, 2, 1]
    if rgb_im.getpixel((105, 50)) == COLOR:
        return [Shape.TRIANGLE, 1, 2]
    if rgb_im.getpixel((72, 72)) == COLOR:
        return [Shape.SQUARE, 1, 1]
    if rgb_im.getpixel((86, 86)) == COLOR:
        return [Shape.CIRCLE, 1, 1]
    if rgb_im.getpixel((105, 105)) == COLOR:
        return [Shape.TRIANGLE, 1, 1]
    return None


def get_graph(image: Image) -> list:
    width, height = image.size  # Get dimensions
    left = 0
    top = 0
    bottom = 109*2+1
    right = 109*2+1
    graph_image = image.crop((left, top, right, bottom))
    lt = get_shape(graph_image)
    graph_image = graph_image.rotate(90)
    rt = get_shape(graph_image)
    if rt is not None:
        rt[1], rt[2] = rt[2], rt[1]
    graph_image = graph_image.rotate(90)
    rb = get_shape(graph_image)
    graph_image = graph_image.rotate(90)
    lb = get_shape(graph_image)
    if lb is not None:
        lb[1], lb[2] = lb[2], lb[1]
    return [lt, rt, rb, lb]


def parse_image(filepath: str):
    image = Image.open(filepath)
    inputs = get_inputs(image)
    graph = get_graph(image)
    return inputs, graph


if __name__ == "__main__":
    import sys

    if len(sys.argv) < 2:
        raise ValueError(
            "Wrong number of arguments. At least one argument must be provided."
        )
    for i in sys.argv[1:]:
        print(parse_image(i))
