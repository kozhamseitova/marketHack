import React, { useState } from "react";
import {InfoWindow, Marker} from "@react-google-maps/api";
import { v4 as uuidv4 } from "uuid";

export default function CustomMarker(props) {
    const { position, clusterer } = props;


    const [popup, setPopup] = useState(null)
    return (
            <React.Fragment>
                <Marker position={position} clusterer={clusterer} onClick={()=>setPopup(position)}>
                    {
                        // console.log(popup, "popup") &&
                        popup &&(<InfoWindow
                            onCloseClick={() => {
                                setPopup(null);
                            }}
                            position={{
                                lat: popup.lat,
                                lng: popup.lng
                            }}>
                            <div>Address: {popup.address}</div>
                        </InfoWindow>)

                    }
                </Marker>
            </React.Fragment>
        )
}