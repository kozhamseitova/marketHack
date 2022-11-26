import {Link} from "react-router-dom";
import {Pagination} from "@mui/material";
import {useState} from "react";
import Objects from "./Objects";

function ToolBar(){

    const [isObject, setIsObject] = useState(false)

    const [itemGlobal, setItemGlobal] = useState({})
    const [amountOfItems, setAmountOfItems] = useState(10)
    const [firstIndexOfPage, setFirstIndexOfPage] = useState(0)
    const [lastIndexOfPage, setLastIndexOfPage] = useState(10)

    const object = {
        name: "Phone",
        description: "scd",
        price: "130000",
        img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-128gb-seryj-103971386-1.jpg",
        address: "ceferfer",
        category: "Телефоны и гаджеты"
    }
    const object3 = {
        name: "Phone",
        description: "scd",
        price: "90000",
        img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-128gb-seryj-103971386-1.jpg",
        address: "ceferfer",
        category: "Телефоны и гаджеты"
    }
    const object1 = {
        name: "Computer",
        description: "scd",
        price: "110000",
        img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-128gb-seryj-103971386-1.jpg",
        address: "ceferfer",
        category: "Компьютеры"
    }
    const object2 = {
        name: "Audio",
        description: "scd",
        price: "100000",
        img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-128gb-seryj-103971386-1.jpg",
        address: "ceferfer",
        category: "Аудио"
    }

    const items = [object3, object, object1, object, object3, object, object, object, object1, object, object3, object, object2, object3, object, object2, object, object, object, object1, object, object, object]

    const [itemsLength, setItemsLength] = useState(items.length)


    const [itemsGlobal, setItemsGlobal] = useState(items)

    const handleChange = event => {
        setAmountOfItems(event.target.value);
        setLastIndexOfPage(event.target.value)
        setFirstIndexOfPage(0)
    }


    const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
        setLastIndexOfPage(value * amountOfItems)
        setFirstIndexOfPage(value * amountOfItems - amountOfItems)
    }

    function ReturnAllObjects() {
        return (
            <div></div>
        )

    }

    function ReturnObject(item) {
        setIsObject(true)
        setItemGlobal(item)
    }

    function ReturnAllObjectsByCategory(option) {
        const itemsFiltered = []
        itemsGlobal.map((item: any) => {
            if (item.category === option) {
                itemsFiltered.push(item)
            }
        })

        setItemsLength(itemsFiltered.length)
        setItemsGlobal(itemsFiltered)

        setLastIndexOfPage(amountOfItems)
        setFirstIndexOfPage(0)

    }

    function ReturnAllObjectsByTitle(title) {

        if (title !== '') {
            const itemsFiltered = []
            itemsGlobal.map((item: any) => {
                if (item.name?.toString().includes(title)) {
                    itemsFiltered.push(item)
                }
            })
            setItemsLength(itemsFiltered.length)
            setItemsGlobal(itemsFiltered)
            setLastIndexOfPage(amountOfItems)
            setFirstIndexOfPage(0)
        } else {
            setItemsGlobal(items)
            setLastIndexOfPage(amountOfItems)
            setFirstIndexOfPage(0)
            setItemsLength(items.length)
        }

    }

    function sort() {
        itemsGlobal.sort((a, b) => a.price - b.price);
        setLastIndexOfPage(amountOfItems)
        setFirstIndexOfPage(0)
        setItemsLength(itemsGlobal.length)

    }

    function sortDate() {
        // itemsGlobal.sort((a, b) => {
        //     let da = new Date(a.joinedDate),
        //         db = new Date(b.joinedDate);
        //     return da - db;
        // });
        // setLastIndexOfPage(amountOfItems)
        // setFirstIndexOfPage(0)
        // setItemsLength(itemsGlobal.length)

    }

    const handleChangeSearch = event => {
        ReturnAllObjectsByTitle(event.target.value)
    }

    function searchByCategory(option) {
        ReturnAllObjectsByCategory(option)
    }

    function reset() {
        setItemsGlobal(items)
        setItemsLength(items.length)
        setLastIndexOfPage(amountOfItems)
        setFirstIndexOfPage(0)
    }


    const [category, setCategory] = useState(false)
    const [filter, setFilter] = useState(false)

    const categories = ['Телефоны и гаджеты', 'Компьютеры', 'Аудио', 'Телевизоры', 'Камеры']

    const [isVisible, setIsVisible] = useState(false)
    const [item, setItem] = useState({})

    const handleClick = item => {
        setItem(item)
        setIsVisible(true)
    };

    return(
        <div className={"t"}>
            <div className={"tool-bar"}>
                <div className={"buttons"}>
                    <div className={"search"}>
                        <input className={"search-input"} placeholder={"Поиск..."} onChange={handleChangeSearch}/>
                        <img src={require("../img/search.png")} className={"icon"} alt={"Search"}/>
                    </div>
                    <div className={"drop"} onClick={category ? () => setCategory(false) : () => setCategory(true)}>
                        <div className={"button"}>
                            Категории
                            <img className={"up-down"} src={require("../img/down.png")}/>
                        </div>
                    </div>
                    <div className={"button"} onClick={filter ? () => setFilter(false) : () => setFilter(true)}>
                        Фильтр
                        <img className={"up-down"} src={require("../img/down.png")}/>
                    </div>
                </div>
                <div className={"sub-tool"}>
                    <Link className={"sign-in-button"} to="/login">Войти</Link>
                    <div className={"circle-icon"}><img className={"icon"} src={require("../img/user.png")}/></div>
                    <div className={"circle-icon"}><img className={"icon"} src={require("../img/bag.png")}/></div>
                    <div className={"circle-icon"}><img className={"icon"} src={require("../img/fav.png")}/></div>
                </div>
            </div>
            <div className={"second-tool"}>
                <div className={"empty"}/>
                <Pagination count={Math.ceil(itemsLength / amountOfItems)} variant="outlined" shape="rounded"
                            color="secondary" onChange={handleChangePagination}/>

                <div>Показывать по <input className={"pag-input"} type={"number"} onChange={handleChange}
                                          value={amountOfItems}/>
                </div>
            </div>

            { !isVisible ? <Objects items={itemsGlobal} firstIndexOfPage={firstIndexOfPage} lastIndexOfPage={lastIndexOfPage} handleClick={handleClick}/> : item.name}


            <div id={"category"}>
                {category ?
                    <div className="drop-down">
                        {categories.map((option) => (
                            <div className={"category"} onClick={() => searchByCategory(option)}>{option}</div>
                        ))}
                        <div className={"category"} onClick={reset}>Reset</div>
                    </div>
                    : ''}
            </div>

            {filter ?
                <div id={"filter"}>
                    <div className="drop-down">

                        <div className={"category"} onClick={sort}>По стоимости</div>
                        <div className={"category"} onClick={sortDate}>По дате</div>

                        <div className={"category"} onClick={reset}>Reset</div>
                    </div>
                </div> : ''}
        </div>
    )
}

export default ToolBar