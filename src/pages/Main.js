import {Pagination, PaginationItem} from "@mui/material";
import Object from "./components/Object";
import {useState} from "react";
import DG from "2gis-maps";

function Main() {
    const [isMap, setIsMap] = useState(false)

    const [amountOfItems, setAmountOfItems] = useState(10)
    const [firstIndexOfPage, setFirstIndexOfPage] = useState(0)
    const [lastIndexOfPage, setLastIndexOfPage] = useState(10)

    const [category, setCategory] = useState('')

    const object = {
        name: "sdc",
        description: "scd",
        price: "100000",
        img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-128gb-seryj-103971386-1.jpg",
        address: "ceferfer",
        category: 0
    }
    const object1 = {
        name: "sdc",
        description: "scd",
        price: "100000",
        img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-128gb-seryj-103971386-1.jpg",
        address: "ceferfer",
        category: 1
    }
    const object2 = {
        name: "sdc",
        description: "scd",
        price: "100000",
        img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-128gb-seryj-103971386-1.jpg",
        address: "ceferfer",
        category: 2
    }

    const items = [object, object, object1, object, object, object, object, object1, object, object, object, object2, object, object, object2, object, object, object, object1, object, object, object]


    const handleChange = event => {
        setAmountOfItems(event.target.value);
        setLastIndexOfPage(event.target.value)
        setFirstIndexOfPage(0)
    }
    const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
        setLastIndexOfPage(value * amountOfItems)
        setFirstIndexOfPage(value * amountOfItems - amountOfItems)
    }

    return (
        <div>
            <div>
                <div className={"second-tool"}>
                    <div className={"buttons-change"}>
                        <div className={"button-change"} id={"map"} onClick={change}>На карте</div>
                        <div className={"button-change"} id="list" onClick={change}>Списком</div>
                    </div>
                    {!isMap ? <Pagination count={Math.ceil(items.length/amountOfItems)} variant="outlined" shape="rounded" color="secondary" onChange={handleChangePagination}/> : ''}
                    {!isMap ?
                        <div>Показывать по <input className={"pag-input"} type={"number"}  onChange={handleChange} value={amountOfItems}/>
                        </div> : <div className={"empty"}/>}
                </div>

                <div className={"map-wrapper"}>
                    <div id="map2gis" className={"map-box"}></div>
                </div>


                <div className={"items"} id={"items"}>
                    {items.slice(firstIndexOfPage, lastIndexOfPage)
                        .map((item: any) => (
                            <Object item={item}/>
                        ))}
                </div>


            </div>
        </div>
    )

    function change() {
        if (!isMap) {
            setIsMap(true)
            setMapChange()
            mapShow()

        } else {
            setIsMap(false)
            setListChange()

        }
    }

    function setMapChange() {
        document.getElementById("map2gis").style.display = "block"
        document.getElementById("items").style.display = "none"
        document.getElementById("map").style.backgroundColor = "#582499"
        document.getElementById("map").style.color = "#FFFFFF"
        document.getElementById("list").style.backgroundColor = "rgba(88,36,153,0)"
        document.getElementById("list").style.color = "#582499"
    }

    function setListChange() {
        document.getElementById("map2gis").style.display = "none"
        document.getElementById("items").style.display = "grid"
        document.getElementById("list").style.backgroundColor = "#582499"
        document.getElementById("list").style.color = "#FFFFFF"
        document.getElementById("map").style.backgroundColor = "rgba(88,36,153,0)"
        document.getElementById("map").style.color = "#582499"
    }

    function mapShow() {
        let DG = require('2gis-maps');
        let map = DG.map('map2gis', {
            'center': [54.98, 82.89],
            'zoom': 13
        })

        DG.marker([54.98, 82.89])
            .addTo(map)
            .bindLabel('Я статическая подсказка!', {
                static: true
            });

        DG.marker([54.98, 82.88])
            .addTo(map)
            .bindLabel('Я обычная подсказка!');

        // map.locate({setView: true, watch: true})
        //     .on('locationfound', function(e) {
        //         DG.marker([e.latitude, e.longitude]).addTo(map);
        //     })
        //     .on('locationerror', function(e) {
        //         DG.popup()
        //             .setLatLng(map.getCenter())
        //             .setContent('Доступ к определению местоположения отключён')
        //             .openOn(map);
        //     });



        // DG.marker([51.129187, 71.431665]).addTo(map).bindPopup('Вы кликнули по мне!');
    }

    function addIcons() {
        var myIcon = DG.icon({
            iconUrl: 'my-icon.png',
            iconRetinaUrl: 'my-icon@2x.png',
            iconSize: [38, 95],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
            shadowUrl: 'my-icon-shadow.png',
            shadowRetinaUrl: 'my-icon-shadow@2x.png',
            shadowSize: [68, 95],
            shadowAnchor: [22, 94]
        });

        // DG.marker([51.129187, 71.431665], {icon: myIcon}).addTo(map);
    }


}

export default Main