import os
import requests
from requests import Response

from headers import get_headers


def make_image_request(id: int):
    url = f"https://se.ifmo.ru/courses/web?p_p_id=iapsportletlab8_WAR_iapsportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_cacheability=cacheLevelPage?{id}"
    headers = get_headers()

    return requests.get(url, headers=headers, stream=True)


def save_image(name: str, response: Response) -> str:
    filepath = os.path.join(os.path.dirname(__file__), "areas", f"{name}.png")
    try:
        os.remove(filepath)
    except OSError:
        pass

    with open(filepath, "wb") as f:
        for chunk in response.iter_content(1024):
            f.write(chunk)
    del response
    return filepath


def download_image(id: int, name: str):
    response = make_image_request(id)
    if response.status_code == 200:
        return save_image(name, response)
