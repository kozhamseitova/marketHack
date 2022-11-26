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

    items = soup.find_all("div", class_="product__item product__item-js tile-container")

    for item in items:
        check_price = item.find("div", class_="product__item-price")

        if check_price is None:
            red_price = item.find("div", class_="product__item-price-red")
            if red_price is None:
                empty_price = item.find("div", class_="product__item-stock-empty")
                price = empty_price
            else:
                price = red_price
        else:
            price = check_price

        check_picture = item.find("img")

        if check_picture is None:
            picture = "https://images.unsplash.com/photo-1584824486509-112e4181ff6b"
        else:
            picture = check_picture["src"]

        devices.append({
            "model": item.find("div", class_="product__item-name").get_text(strip=True),
            "description": item.find("div", class_="product__item-description").get_text(),
            "price": price.get_text(strip=True),
            "picture": picture,
            "link": _config.SULPAK_KZ_URL + item.find("div", class_="product__item-name").findChild().get("href"),
            "category": regex.findall(r'_[A-Za-z]*', path)[0][1:]
        })

    return devices


def get_page_number(page):
    soup = BeautifulSoup(page, "html.parser")

    page_number = soup.find("div", "pagination")

    return int(page_number["data-pagescount"]) + 1


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
            page = get_page(uri[0], params={"page": page_index})

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
            page = get_page(uri[0], params={"page": page_index})

            devices.extend(get_content(page.text, uri[1]))

        return devices

    else:
        print("ERROR: 500")


# get_devices(_config.SULPAK_KZ_SMARTPHONES_URI)
