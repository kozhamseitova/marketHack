import psycopg2
import shop_kz_parser
import alser_kz_parser
import sulpak_kz_parser
import config as _config

try:
    connection = psycopg2.connect(
        host=_config.HOST,
        user=_config.USER,
        password=_config.PASSWORD,
        database=_config.DB_NAME
    )

    connection.autocommit = True

    # with connection.cursor() as cursor:
    #     cursor.execute(
    #         """CREATE TABLE market_products(
    #             id serial,
    #             model varchar NOT NULL,
    #             description varchar NOT NULL,
    #             price varchar NOT NULL,
    #             picture varchar NOT NULL,
    #             link varchar NOT NULL,
    #             category varchar NOT NULL);"""
    #     )

    # def insert_data():
    #     items = {parser}.return_devices(_config.{URI})
    #
    #     for item in items:
    #
    #         with connection.cursor() as cursor:
    #             cursor.execute(
    #                 'INSERT INTO market_products (model, description, price, picture, link, category) '
    #                 'VALUES (%s, %s, %s, %s, %s, %s)', (item["model"], item["description"], item["price"],
    #                                                     item["picture"], item["link"], item["category"])
    #             )
    #
    # insert_data()

except Exception as _ex:
    print("[INFO] Error while working with PostgreSQL", _ex)

finally:
    if connection:
        connection.close()
