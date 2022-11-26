import {Link, useLocation} from "react-router-dom";
import {useState} from "react";
import MapContainer from "./MapContainer";

function ObjectPage() {

    var locations1 = [
        {lat: 51.092975, lng: 71.41594, address: 'Экспо Парк'},
        {lat: 51.092909, lng: 71.412085, address: 'EXPO 2017'},
        {lat: 51.093388, lng: 71.410361, address: 'EXPO 2017'},
        {lat: 51.097, lng: 71.410842, address: 'Астана, Улы Дала 6/1'},
        {lat: 51.096, lng: 71.410, address: 'Астана, Улы Дала 8'},
        {lat: 51.098877, lng: 71.441304, address: 'Астана, Улы Дала 6/3'},
        {lat: 51.102039, lng: 71.442287, address: 'Астана, Улы Дала 8'},
        {lat: 51.104023, lng: 71.417078, address: 'Астана, Улы Дала 8'},
        {lat: 51.103347, lng: 71.419092, address: 'Астана, Улы Дала 8'},
        {lat: 51.125198, lng: 71.428938, address: 'Астана, Улы Дала 8'},
        {lat: 51.135351, lng: 71.430023, address: 'Астана, Улы Дала 8'}
    ];

    const location = useLocation()
    const { item } = location.state
    const [isMap, setIsMap] = useState(false)
    return(
        <div className={"object-page"}>

            <div><Link to={'/'} ><img className={"back-2"} src={require("../img/back.png")}/></Link></div>
            <div className={"item"}>
                <div>
                    <img src={item.img} className={"item-img"}/>
                </div>
                <div className={"item-info"}>
                    <div className={"item-title"}>
                        <div className={"title"}>{item.name}</div>
                        <img className={'icon'} src={require("../img/shoppingcart.png")}/>
                        <img className={'icon'} src={require("../img/favorite.png")}/>
                    </div>
                    <div className={"desc"}>{item.description}</div>
                    <div className={'price'}>{item.price} тг</div>
                </div>
            </div>
            <div className={"shops"}>
                <div>
                    <div className={"buttons-change"}>
                        <div className={"button-change"} id="map" onClick={change}>На карте</div>
                        <div className={"button-change"} id="list" onClick={change}>Списком</div>
                    </div>
                </div>
                {isMap
                    ?<div className={"map-wrapper"}>
                    <MapContainer location1={locations1}/>
                    </div>:<div className={"addresses"}>Астана, Улы Дала 8</div>}

            </div>
        </div>

    )
    function change() {
        if (!isMap) {
            setIsMap(true)
            setMapChange()


        } else {
            setIsMap(false)
            setListChange()

        }
    }

    function setMapChange() {
        // document.getElementById("map-wrapper").style.display = "block"
        document.getElementById("map").style.backgroundColor = "#582499"
        document.getElementById("map").style.color = "#FFFFFF"
        document.getElementById("list").style.backgroundColor = "rgba(88,36,153,0)"
        document.getElementById("list").style.color = "#582499"
    }

    function setListChange() {
        // document.getElementById("map-wrapper").style.display = "none"
        document.getElementById("list").style.backgroundColor = "#582499"
        document.getElementById("list").style.color = "#FFFFFF"
        document.getElementById("map").style.backgroundColor = "rgba(88,36,153,0)"
        document.getElementById("map").style.color = "#582499"
    }



}

export default ObjectPage