import Dropdown from "./Dropdown";
import {useState} from "react";
import {Link} from "react-router-dom";

function ToolBar() {

    const filterItems = []
    const [category, setCategory] = useState(false)
    const [filter, setFilter] = useState(false)

    const categories = ['Телефоны и гаджеты', 'Компьютеры', 'Аудио', 'Телевизоры', 'Камеры']
    const filters = ['price']


    return (
        <div className={"t"}>
            <div className={"tool-bar"}>
                <div className={"buttons"}>
                    <div className={"search"}>
                        <input className={"search-input"} placeholder={"Поиск..."}/>
                        <img src={require("../img/search.png")} className={"icon"} alt={"Search"}/>
                    </div>
                    <div className={"drop"} onClick={category ? () => setCategory(false) : () =>setCategory(true)}>
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

            <div id={"category"}>
                {category ? <Dropdown opt={categories}/> : ''}
            </div>

            <div id={"filter"}>
                {filter ? <Dropdown opt={filters}/> : ''}
            </div>

        </div>
    )


}

export default ToolBar