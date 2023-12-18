import time
import requests
from requests import Response
from get_text import parse_image
from headers import get_headers
from make_cookie_request import make_cookie_request

from make_image_request import download_image
from variant import ORM, BeanConfig, BeanScope, Database, LabVariant3


def parse_lab_variant3_database(text: str) -> Database:
    if "СУБД Oracle" in text:
        return Database.ORACLE
    if "СУБД PostgreSQL" in text:
        return Database.POSTGRESQL
    raise ValueError("Invalid text. It has no available database.")


def parse_lab_variant3_orm(text: str) -> ORM:
    if "ORM Hibernate" in text:
        return ORM.HIBERNATE
    if "ORM EclipseLink" in text:
        return ORM.ECLIPSE_LINK
    if "JPA с ORM-провайдером на усмотрение студента" in text:
        return ORM.JPA
    if "протокол JDBC без каких-либо дополнительных библиотек" in text:
        return ORM.JDBC
    raise ValueError("Invalid text. It has no available orm.")


def parse_lab_variant3_bean_config(text: str) -> BeanConfig:
    if "с помощью аннотаций" in text:
        return BeanConfig.ANNOTATION
    if "параметров в конфигурационном файле" in text:
        return BeanConfig.CONFIG_FILE
    raise ValueError("Invalid text. It has no available bean config.")


def parse_lab_variant3_bean_scope(text: str) -> BeanScope:
    if "Application-scoped Managed Bean" in text:
        return BeanScope.APPLICATION
    if "Session-scoped Managed Bean" in text:
        return BeanScope.SESSION
    raise ValueError("Invalid text. It has no available bean scope.")


def parse_lab_variant3_update_time(text: str) -> int:
    start_index = text.index("раз в ") + len("раз в ")
    end_index = text.index(" секунд")
    return int(text[start_index:end_index])


def parse_lab_variant3(variant: int, text: str):
    return LabVariant3(
        variant,
        parse_lab_variant3_database(text),
        parse_lab_variant3_orm(text),
        parse_lab_variant3_bean_config(text),
        parse_lab_variant3_bean_scope(text),
        parse_lab_variant3_update_time(text),
    )


def make_request(variant: int) -> Response:
    url = "https://se.ifmo.ru/courses/web?p_p_id=iapsportletlab8_WAR_iapsportlet&p_p_lifecycle=1&p_p_state=normal&p_p_mode=view&_iapsportletlab8_WAR_iapsportlet_javax.portlet.action=getTask&p_auth=dNfHmraf"
    headers = get_headers()

    payload = f"var={variant}"

    return requests.post(url, data=payload, headers=headers)


def get_lab3(variant: int):
    # make_cookie_request()
    response = make_request(variant)
    if response.status_code == 200:
        id = time.time_ns() // 1_000_000
        filepath = download_image(id, str(variant))
        parse_image(filepath)
        return parse_lab_variant3(variant, response.text)
    elif response.status_code == 403:
        print("Forbidden.")
        print(response.headers)
        raise Exception("Forbidden")


if __name__ == "__main__":
    import sys

    if len(sys.argv) < 2:
        raise ValueError(
            "Wrong number of arguments. At least one argument must be provided."
        )
    for i in sys.argv[1:]:
        variant = get_lab3(int(i))
        print(variant)
