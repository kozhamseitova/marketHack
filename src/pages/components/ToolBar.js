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
        name: "Samsung Galaxy S22",
        description: "128GB Black",
        price: "439000",
        img:"https://object.pscloud.io/cms/cms/Photo/img_0_77_3417_11_1.jpg",
        address: "ceferfer",
        category: "Телефоны и гаджеты"
    }
    const object3 = {
        name: "Смартфон Apple iPhone 11",
        description: "64GB Black Slim Box",
        price: "279990.0",
        img: "https://object.pscloud.io/cms/cms/Photo/img_0_77_2386_4.png",
        address: "ceferfer",
        category: "Телефоны и гаджеты"
    }
    const object1 = {
        name: "Смартфон Samsung Galaxy A53",
        description: "256GB Black",
        price: "219890",
        img: "https://object.pscloud.io/cms/cms/Photo/img_0_77_3520_0_6.png",
        address: "ceferfer",
        category: "Телефоны и гаджеты"
    }
    const object2 = {
        name: "Смартфон Samsung Galaxy A53",
        description: "128GB Black",
        price: "189990",
        img: "https://object.pscloud.io/cms/cms/Photo/img_0_77_3520_0_6.png",
        address: "ceferfer",
        category: "Телефоны и гаджеты"
    }
    const object4 = {
        name: "Смартфон Apple iPhone 11",
        description: "128GB Black Slim Box",
        price: "319990",
        img: "https://object.pscloud.io/cms/cms/Photo/img_0_77_2386_4.png",
        address: "ceferfer",
        category: "Телефоны и гаджеты"
    }

    const object5 = {
        name: "Смартфон Apple iPhone 11",
        description: "128GB White Slim Box",
        price: "319990",
        img: "https://object.pscloud.io/cms/cms/Photo/img_0_77_2732_3_1.jpg",
        address: "ceferfer",
        category: "Телефоны и гаджеты"
    }

    const object6 = {
        name: "Ноутбук Apple MacBook Pro 14″ M1 Pro/16GB/512GB SSD (MKGR3RU/A)",
        description: "Silver",
        price: "990000",
        img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP858/mbp16-gray.png",
        address: "ceferfer",
        category: "Компьютеры"
    }

    const object7 = {
        name: "Ноутбук Apple MacBook Pro 14″ M1 Pro/16GB/!TB SSD (MKGR3RU/A)",
        description: "Silver",
        price: "1390000",
        img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP858/mbp16-gray.png",
        address: "ceferfer",
        category: "Компьютеры"
    }




    const items = [object3, object2, object1, object, object4, object5, object, object, object1, object, object3, object, object2, object3, object, object2, object, object, object, object1, object, object, object, object6, object7, object6, object7, object6, object7, object6, object7]

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