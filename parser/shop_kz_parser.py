# -*- coding: utf8 -*-

import csv
import regex
import requests
import config as _config
from bs4 import BeautifulSoup


def get_page(uri, params=None):
    page = requests.get(uri, headers=_config.HEADERS, params=params)

    return page


def get_content(page, path):
    devices = []

    soup = BeautifulSoup(page, "html.parser")

    items = soup.find_all("div", class_="bx_catalog_item_container gtm-impression-product")

    for item in items:
        check_price = item.find("span", class_="bx-more-price-text")

        if check_price is None:
            price = item.find("span", class_="bx_notavailable")
        else:
            price = check_price

        check_description = item.find("div", class_="bx_catalog_item_articul")

        if check_description is None:
            description = "Нет описания"
        else:
            description = check_description.get_text()

        check_picture = item.find("img")

        if check_picture is None:
            picture = "https://images.unsplash.com/photo-1584824486509-112e4181ff6b"
        else:
            picture = check_picture["data-src"]

        devices.append({
            "model": item.find("div", class_="bx_catalog_item_title").findChild().get_text(strip=True),
            "description": description,
            "price": price.get_text(strip=True),
            "picture": picture,
            "link": _config.SHOP_KZ_URL + item.find("div", class_="bx_catalog_item_title").findChild().get("href"),
            "category": regex.findall(r'_[A-Za-z]*', path)[0][1:]
        })

    return devices


def get_page_number(page):
    soup = BeautifulSoup(page, "html.parser")

    check_page_number = soup.find("div", "bx-pagination-container row")

    if check_page_number is None:
        page_number = 1
    else:
        page_number = int(check_page_number.find_all("li")[-2].findChild().get_text())

    return page_number


def save_devices_db(items, path):
    with open(path, "w", newline="", encoding="utf-8") as d_db:
        writer = csv.writer(d_db, delimiter=',')

        writer.writerow(["Модель", "Описание", "Цена", "Картинка", "Ссылка", "Категория"])

        for item in items:
            writer.writerow([item["model"], item["description"], item["price"], item["picture"], item["link"],
                             item["category"]])


def get_devices(uri):
    page = get_page(uri[0])

    devices = []

    if page.status_code == 200:
        pages_number = get_page_number(page.text)

        for page_index in range(1, pages_number + 1):
            page = get_page(uri[0], params={"PAGEN_1": page_index})

            devices.extend(get_content(page.text, uri[1]))

        save_devices_db(devices, uri[1])
    else:
        print("ERROR: 500")


def return_devices(uri):
    page = get_page(uri[0])

    devices = []

    if page.status_code == 200:
        pages_number = get_page_number(page.text)

        for page_index in range(1, pages_number + 1):
            page = get_page(uri[0], params={"PAGEN_1": page_index})

            devices.extend(get_content(page.text, uri[1]))

        return devices

    else:
        print("ERROR: 500")


# get_devices(_config.SHOP_KZ_SMARTPHONES_URI)
