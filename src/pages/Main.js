// import {Pagination} from "@mui/material";
// import Object from "./components/Object";
// import {useState} from "react";
// import DG from "2gis-maps";
// import {Link} from "react-router-dom";
//
// function Main() {
//     const [isObject, setIsObject] = useState(false)
//     const [itemGlobal, setItemGlobal] = useState({})
//     const [isMap, setIsMap] = useState(false)
//
//     const [amountOfItems, setAmountOfItems] = useState(10)
//     const [firstIndexOfPage, setFirstIndexOfPage] = useState(0)
//     const [lastIndexOfPage, setLastIndexOfPage] = useState(10)
//
//
//     const [category, setCategory] = useState(false)
//     const [filter, setFilter] = useState(false)
//
//     const categories = ['Телефоны и гаджеты', 'Компьютеры', 'Аудио', 'Телевизоры', 'Камеры']
//     const filters = ['price']
//
//     const [findByCategory, setFindByCategory] = useState('')
//     const [findByTitle, setFindByTitle] = useState('')
//     const [filterBy, setFilterBy] = useState('')
//
//
//     let count = 0
//
//
//     const object = {
//         name: "Phone",
//         description: "scd",
//         price: "130000",
//         img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-128gb-seryj-103971386-1.jpg",
//         address: "ceferfer",
//         category: "Телефоны и гаджеты"
//     }
//     const object3 = {
//         name: "Phone",
//         description: "scd",
//         price: "90000",
//         img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-128gb-seryj-103971386-1.jpg",
//         address: "ceferfer",
//         category: "Телефоны и гаджеты"
//     }
//     const object1 = {
//         name: "Computer",
//         description: "scd",
//         price: "110000",
//         img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-128gb-seryj-103971386-1.jpg",
//         address: "ceferfer",
//         category: "Компьютеры"
//     }
//     const object2 = {
//         name: "Audio",
//         description: "scd",
//         price: "100000",
//         img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-128gb-seryj-103971386-1.jpg",
//         address: "ceferfer",
//         category: "Аудио"
//     }
//
//     const items = [object3, object, object1, object, object3, object, object, object, object1, object, object3, object, object2, object3, object, object2, object, object, object, object1, object, object, object]
//
//     const [itemsLength, setItemsLength] = useState(items.length)
//
//
//     const [itemsGlobal, setItemsGlobal] = useState(items)
//
//     const handleChange = event => {
//         setAmountOfItems(event.target.value);
//         setLastIndexOfPage(event.target.value)
//         setFirstIndexOfPage(0)
//     }
//
//
//     const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
//         setLastIndexOfPage(value * amountOfItems)
//         setFirstIndexOfPage(value * amountOfItems - amountOfItems)
//     }
//
//     function ReturnAllObjects() {
//         return (
//             <div></div>
//         )
//
//     }
//
//     function ReturnObject(item) {
//         setIsObject(true)
//         setItemGlobal(item)
//     }
//
//     function ReturnAllObjectsByCategory(option) {
//         const itemsFiltered = []
//         itemsGlobal.map((item: any) => {
//             if (item.category === option) {
//                 itemsFiltered.push(item)
//             }
//         })
//
//         setItemsLength(itemsFiltered.length)
//         setItemsGlobal(itemsFiltered)
//
//         setLastIndexOfPage(amountOfItems)
//         setFirstIndexOfPage(0)
//
//     }
//
//     function ReturnAllObjectsByTitle(title) {
//
//         if (title !== '') {
//             const itemsFiltered = []
//             itemsGlobal.map((item: any) => {
//                 if (item.name?.toString().includes(title)) {
//                     itemsFiltered.push(item)
//                 }
//             })
//             setItemsLength(itemsFiltered.length)
//             setItemsGlobal(itemsFiltered)
//             setLastIndexOfPage(amountOfItems)
//             setFirstIndexOfPage(0)
//         } else {
//             setItemsGlobal(items)
//             setLastIndexOfPage(amountOfItems)
//             setFirstIndexOfPage(0)
//             setItemsLength(items.length)
//         }
//
//     }
//
//     function sort() {
//         itemsGlobal.sort((a, b) => a.price - b.price);
//         setLastIndexOfPage(amountOfItems)
//         setFirstIndexOfPage(0)
//         setItemsLength(itemsGlobal.length)
//
//     }
//
//     function sortDate() {
//         // itemsGlobal.sort((a, b) => {
//         //     let da = new Date(a.joinedDate),
//         //         db = new Date(b.joinedDate);
//         //     return da - db;
//         // });
//         // setLastIndexOfPage(amountOfItems)
//         // setFirstIndexOfPage(0)
//         // setItemsLength(itemsGlobal.length)
//
//     }
//
//     const handleChangeSearch = event => {
//         ReturnAllObjectsByTitle(event.target.value)
//     }
//
//     function searchByCategory(option) {
//         ReturnAllObjectsByCategory(option)
//     }
//
//     function reset() {
//         setItemsGlobal(items)
//         setItemsLength(items.length)
//         setLastIndexOfPage(amountOfItems)
//         setFirstIndexOfPage(0)
//     }
//
//     return (
//         <div>
//             <div className={"t"}>
//                 <div className={"tool-bar"}>
//                     <div className={"buttons"}>
//                         <div className={"search"}>
//                             <input className={"search-input"} placeholder={"Поиск..."} onChange={handleChangeSearch}/>
//                             <img src={require("./img/search.png")} className={"icon"} alt={"Search"}/>
//                         </div>
//                         <div className={"drop"} onClick={category ? () => setCategory(false) : () => setCategory(true)}>
//                             <div className={"button"}>
//                                 Категории
//                                 <img className={"up-down"} src={require("./img/down.png")}/>
//                             </div>
//                         </div>
//                         <div className={"button"} onClick={filter ? () => setFilter(false) : () => setFilter(true)}>
//                             Фильтр
//                             <img className={"up-down"} src={require("./img/down.png")}/>
//                         </div>
//                     </div>
//                     <div className={"sub-tool"}>
//                         <Link className={"sign-in-button"} to="/login">Войти</Link>
//                         <div className={"circle-icon"}><img className={"icon"} src={require("./img/user.png")}/></div>
//                         <div className={"circle-icon"}><img className={"icon"} src={require("./img/bag.png")}/></div>
//                         <div className={"circle-icon"}><img className={"icon"} src={require("./img/fav.png")}/></div>
//                     </div>
//                 </div>
//
//             </div>
//
//
//
//
//
//             {/*{findByCategory ? <ReturnAllObjectsByCategory/> : <ReturnAllObjects/>}*/}
//
//             {isObject ?
//
//                 <div>
//                     <div>
//                         <img src={itemGlobal.img}/>
//                         <div>
//                             <div className={"title"}>{itemGlobal.name}</div>
//                             <div className={"desc"}>{itemGlobal.description}</div>
//                             <div className={"price"}>{itemGlobal.price} тг</div>
//                             <img src={require("./img/shoppingcart.png")}/>
//                             <img src={require("./img/favorite.png")}/>
//                         </div>
//                         <div className={"buttons-change"}>
//                             <div className={"button-change"} id={"map"} onClick={change}>На карте</div>
//                             <div className={"button-change"} id="list" onClick={change}>Списком</div>
//                         </div>
//                         {!isMap ? '' :
//                             <div className={"map-wrapper"}>
//                                 <div id="map2gis" className={"map-box"}></div>
//                             </div>
//                         }
//                     </div>
//
//                 </div>
//                 : <div>
//                     <div className={"second-tool"}>
//                         <div className={"empty"}/>
//                         <Pagination count={Math.ceil(itemsLength / amountOfItems)} variant="outlined" shape="rounded"
//                                     color="secondary" onChange={handleChangePagination}/>
//
//                         <div>Показывать по <input className={"pag-input"} type={"number"} onChange={handleChange}
//                                                   value={amountOfItems}/>
//                         </div>
//                     </div>
//                     <div className={"items"} id={"items"}>
//                         {
//                             itemsGlobal.slice(firstIndexOfPage, lastIndexOfPage)
//                                 .map((item: any) => {
//                                     return (
//                                         <Object item={item} onClick={setIsObject(true)}/>)
//                                 })
//                         }
//                     </div>
//                 </div>}
//
//
//             <div id={"category"}>
//                 {category ?
//                     <div className="drop-down">
//                         {categories.map((option) => (
//                             <div className={"category"} onClick={() => searchByCategory(option)}>{option}</div>
//                         ))}
//                         <div className={"category"} onClick={reset}>Reset</div>
//                     </div>
//                     : ''}
//             </div>
//
//             {filter ?
//                 <div id={"filter"}>
//                     <div className="drop-down">
//
//                         <div className={"category"} onClick={sort}>По стоимости</div>
//                         <div className={"category"} onClick={sortDate}>По дате</div>
//
//                         <div className={"category"} onClick={reset}>Reset</div>
//                     </div>
//                 </div> : ''}
//
//         </div>)
//
//     function change() {
//         if (!isMap) {
//             setIsMap(true)
//             setMapChange()
//             mapShow()
//
//         } else {
//             setIsMap(false)
//             setListChange()
//
//         }
//     }
//
//     function setMapChange() {
//         document.getElementById("map2gis").style.display = "block"
//         document.getElementById("items").style.display = "none"
//         document.getElementById("map").style.backgroundColor = "#582499"
//         document.getElementById("map").style.color = "#FFFFFF"
//         document.getElementById("list").style.backgroundColor = "rgba(88,36,153,0)"
//         document.getElementById("list").style.color = "#582499"
//     }
//
//     function setListChange() {
//         document.getElementById("map2gis").style.display = "none"
//         document.getElementById("items").style.display = "grid"
//         document.getElementById("list").style.backgroundColor = "#582499"
//         document.getElementById("list").style.color = "#FFFFFF"
//         document.getElementById("map").style.backgroundColor = "rgba(88,36,153,0)"
//         document.getElementById("map").style.color = "#582499"
//     }
//
//     function mapShow() {
//         let DG = require('2gis-maps');
//         let map = DG.map('map2gis', {
//             'center': [54.98, 82.89],
//             'zoom': 13
//         })
//
//         DG.marker([54.98, 82.89])
//             .addTo(map)
//             .bindLabel('Я статическая подсказка!', {
//                 static: true
//             });
//
//         DG.marker([54.98, 82.88])
//             .addTo(map)
//             .bindLabel('Я обычная подсказка!');
//
//         // map.locate({setView: true, watch: true})
//         //     .on('locationfound', function(e) {
//         //         DG.marker([e.latitude, e.longitude]).addTo(map);
//         //     })
//         //     .on('locationerror', function(e) {
//         //         DG.popup()
//         //             .setLatLng(map.getCenter())
//         //             .setContent('Доступ к определению местоположения отключён')
//         //             .openOn(map);
//         //     });
//
//
//         // DG.marker([51.129187, 71.431665]).addTo(map).bindPopup('Вы кликнули по мне!');
//     }
//
//     function addIcons() {
//         var myIcon = DG.icon({
//             iconUrl: 'my-icon.png',
//             iconRetinaUrl: 'my-icon@2x.png',
//             iconSize: [38, 95],
//             iconAnchor: [22, 94],
//             popupAnchor: [-3, -76],
//             shadowUrl: 'my-icon-shadow.png',
//             shadowRetinaUrl: 'my-icon-shadow@2x.png',
//             shadowSize: [68, 95],
//             shadowAnchor: [22, 94]
//         });
//
//         // DG.marker([51.129187, 71.431665], {icon: myIcon}).addTo(map);
//     }
//
//
// }
//
// export default Main