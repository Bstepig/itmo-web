import time
import requests
from requests import Response
from get_text import parse_image
from headers import get_headers, set_cookie, set_sessionid

from make_image_request import download_image
from variant import ORM, BeanConfig, BeanScope, Database, LabVariant3


def make_cookie_request() -> None:
    url = "https://se.ifmo.ru/courses/web"
    headers = get_headers()

    response = requests.get(url, headers=headers)
    if "Set-Cookie" in response.headers:
        new_cookie = response.headers["Set-Cookie"]
        start_index = new_cookie.index("JSESSIONID=") + len("JSESSIONID=")
        end_index = new_cookie.index(".lportal;") + len(".lportal")
        jsession = new_cookie[start_index:end_index]
        print(f"New JESSIONID: {jsession}")
        set_sessionid(jsession)
    else:
        print(f"JESSIONID not changed.")


if __name__ == "__main__":
    make_cookie_request()
