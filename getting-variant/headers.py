current_headers = {
    "authority": "se.ifmo.ru",
    "accept": "*/*",
    "accept-language": "en,ja;q=0.9,ru;q=0.8,en-US;q=0.7",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "cookie": "_ga=GA1.2.957873031.1699568721; _gid=GA1.2.1231270839.1701770339; COMPANY_ID=10154; GUEST_LANGUAGE_ID=ru_RU; ID=547a2f4a6530624e6675476f36726f752f466a6858413d3d; LOGIN=73333638303836; PASSWORD=70556738536454343576373534526130574663717a413d3d; REMEMBER_ME=true; SCREEN_NAME=71315a6c7650483367666442316a2f4d69482b4e70773d3d; COOKIE_SUPPORT=true; LFR_SESSION_STATE_10158=1699568722503; JSESSIONID=pWfm9ncUNb-tzMfgCRMqY_Ecdg_j4znu01-du9jC.lportal; _gat=1; _ga_5R1ZXK9D1L=GS1.2.1701779554.1.1.1701780497.60.0.0",
    "origin": "https://se.ifmo.ru",
    "referer": "https://se.ifmo.ru/courses/web",
    "sec-ch-ua": '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    "x-requested-with": "XMLHttpRequest",
}

current_headers = {
    "authority": "se.ifmo.ru",
    "accept": "*/*",
    "accept-language": "en,ja;q=0.9,ru;q=0.8,en-US;q=0.7",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "cookie": "COOKIE_SUPPORT=true; GUEST_LANGUAGE_ID=ru_RU; _ga=GA1.2.957873031.1699568721; LFR_SESSION_STATE_10158=1699568722503; COMPANY_ID=10154; ID=547a2f4a6530624e6675476f36726f752f466a6858413d3d; LOGIN=73333638303836; PASSWORD=70556738536454343576373534526130574663717a413d3d; REMEMBER_ME=true; SCREEN_NAME=71315a6c7650483367666442316a2f4d69482b4e70773d3d; JSESSIONID=oQru2MIooOV5LzzVxy_7WdbbBA930qvYrOYqNCkZ.lportal; _gid=GA1.2.1231270839.1701770339; _ga_5R1ZXK9D1L=GS1.2.1701770339.3.1.1701770345.54.0.0",
    "origin": "https://se.ifmo.ru",
    "referer": "https://se.ifmo.ru/courses/web",
    "sec-ch-ua": '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    "x-requested-with": "XMLHttpRequest",
}


COOKIES = "_ga=GA1.2.957873031.1699568721; _gid=GA1.2.1231270839.1701770339; COMPANY_ID=10154; GUEST_LANGUAGE_ID=ru_RU; ID=547a2f4a6530624e6675476f36726f752f466a6858413d3d; LOGIN=73333638303836; PASSWORD=70556738536454343576373534526130574663717a413d3d; REMEMBER_ME=true; SCREEN_NAME=71315a6c7650483367666442316a2f4d69482b4e70773d3d; COOKIE_SUPPORT=true; LFR_SESSION_STATE_10158=1699568722503; JSESSIONID=pWfm9ncUNb-tzMfgCRMqY_Ecdg_j4znu01-du9jC.lportal; _gat=1; _ga_5R1ZXK9D1L=GS1.2.1701779554.1.1.1701780497.60.0.0"
COOKIES = "COOKIE_SUPPORT=true; GUEST_LANGUAGE_ID=ru_RU; _ga=GA1.2.957873031.1699568721; LFR_SESSION_STATE_10158=1699568722503; COMPANY_ID=10154; ID=547a2f4a6530624e6675476f36726f752f466a6858413d3d; LOGIN=73333638303836; PASSWORD=70556738536454343576373534526130574663717a413d3d; REMEMBER_ME=true; SCREEN_NAME=71315a6c7650483367666442316a2f4d69482b4e70773d3d; JSESSIONID=oQru2MIooOV5LzzVxy_7WdbbBA930qvYrOYqNCkZ.lportal; _gid=GA1.2.1231270839.1701770339; _ga_5R1ZXK9D1L=GS1.2.1701770339.3.1.1701770345.54.0.0"

def get_headers() -> dict:
    current_headers["cookie"] = COOKIES
    # print(current_headers)
    return current_headers


def set_cookie(cookie: str):
    global COOKIES
    COOKIES += cookie


def set_sessionid(session: str):
    global COOKIES
    COOKIES += f"; JSESSIONID={session}"


# curl 'https://se.ifmo.ru/courses/web?p_p_id=iapsportletlab8_WAR_iapsportlet&p_p_lifecycle=1&p_p_state=normal&p_p_mode=view&_iapsportletlab8_WAR_iapsportlet_javax.portlet.action=getTask&p_auth=JpGjMXK9' \
#   -H 'authority: se.ifmo.ru' \
#   -H 'accept: */*' \
#   -H 'accept-language: en,ja;q=0.9,ru;q=0.8,en-US;q=0.7' \
#   -H 'content-type: application/x-www-form-urlencoded; charset=UTF-8' \
#   -H 'cookie: COOKIE_SUPPORT=true; GUEST_LANGUAGE_ID=ru_RU; _ga=GA1.2.957873031.1699568721; LFR_SESSION_STATE_10158=1699568722503; COMPANY_ID=10154; ID=547a2f4a6530624e6675476f36726f752f466a6858413d3d; LOGIN=73333638303836; PASSWORD=70556738536454343576373534526130574663717a413d3d; REMEMBER_ME=true; SCREEN_NAME=71315a6c7650483367666442316a2f4d69482b4e70773d3d; _gid=GA1.2.1231270839.1701770339; JSESSIONID=9eZe0zr-P2asWAFrnp3ruGQ56bHQcZxCInp-Bt8S.lportal; _gat=1; _ga_5R1ZXK9D1L=GS1.2.1701778122.4.0.1701778122.60.0.0' \
#   -H 'origin: https://se.ifmo.ru' \
#   -H 'referer: https://se.ifmo.ru/courses/web' \
#   -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
#   -H 'sec-ch-ua-mobile: ?0' \
#   -H 'sec-ch-ua-platform: "Windows"' \
#   -H 'sec-fetch-dest: empty' \
#   -H 'sec-fetch-mode: cors' \
#   -H 'sec-fetch-site: same-origin' \
#   -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
#   -H 'x-requested-with: XMLHttpRequest' \
#   --data-raw 'var=1234' \
#   --compressed
