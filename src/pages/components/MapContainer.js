import React, { useState } from "react";
import Map from "./Map";
import {InfoWindow, Marker, MarkerClusterer} from "@react-google-maps/api";
// import uuidv4 from "uuid/v4";
import { v4 as uuidv4 } from "uuid";
import CustomMarker from "./CustomMarker";

var locations1 = [
    { lat: 51.092975, lng: 71.41594 },
    { lat: 51.092909, lng: 71.412085 },
    { lat: 51.093388, lng: 71.410361 },
    { lat: 51.097, lng: 71.410842 },
    { lat: 51.096657, lng: 71.410693 },
    { lat: 51.098877, lng: 71.441304 },
    { lat: 51.102039, lng: 71.442287 },
    { lat: 51.104023, lng: 71.417078 },
    { lat: 51.103347, lng: 71.419092 },
    { lat: 51.125198, lng: 71.428938 },
    { lat: 51.135351, lng: 71.430023 }
];

export default function MapContainer() {
    const [map, setMap] = useState(null);
    const [locs, setLocs] = useState(locations1);
    const [popup, setPopup] = useState(null)

    React.useEffect(() => {
        if (map) {
            // map.panTo(...)
            mapFitBounds();
        }
    }, [map]);

    function mapFitBounds() {
        // console.log("mapFitBounds:map> ", map);
        if (!map) return;

        const bounds = new google.maps.LatLngBounds();
        locs.map(loc => {
            bounds.extend(new google.maps.LatLng(loc.lat, loc.lng));
        });

        map.fitBounds(bounds);
    }

    return (
        <div>
            <Map setMap={setMap}>
                <MarkerClusterer>
                    {clusterer =>
                        locs.map(loc => (
                            <div>
                                <CustomMarker
                                    key={uuidv4()}
                                    position={loc}
                                    clusterer={clusterer}
                                    onClick = {setPopup(true)}
                                />
                                {/*{popup &&(<InfoWindow*/}
                                {/*    onCloseClick={() => {*/}
                                {/*        setPopup(null);*/}
                                {/*    }}*/}
                                {/*    position={{*/}
                                {/*        lat: loc.latitude,*/}
                                {/*        lng: loc.longitude*/}
                                {/*    }}>*/}
                                {/*</InfoWindow>)}*/}
                            </div>
                        ))
                    }
                </MarkerClusterer>
            </Map>
        </div>
    );
}
