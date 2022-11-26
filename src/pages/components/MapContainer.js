import React, {useState} from "react";
import Map from "./Map";
import {InfoWindow, Marker, MarkerClusterer} from "@react-google-maps/api";
// import uuidv4 from "uuid/v4";
import {v4 as uuidv4} from "uuid";
import CustomMarker from "./CustomMarker";



export default function MapContainer({location1}) {
    const [map, setMap] = useState(null);
    const [locs, setLocs] = useState(location1);

    React.useEffect(() => {
        if (map) {
            // map.panTo(...)
            mapFitBounds();
        }
    }, [map]);

    function mapFitBounds() {
        // console.log("mapFitBounds:map> ", map);
        if (!map) return;

        const bounds = new window.google.maps.LatLngBounds();
        locs.map(loc => {
            bounds.extend(new window.google.maps.LatLng(loc.lat, loc.lng));
        });

        map.fitBounds(bounds);
    }

    return (
        <div className={"Map"}>
            <Map setMap={setMap}>
                <MarkerClusterer>
                    {clusterer =>
                        locs.map(loc => (
                            <CustomMarker
                                key={uuidv4()}
                                position={loc}
                                clusterer={clusterer}
                            />
                        ))
                    }
                </MarkerClusterer>
            </Map>
        </div>
    );
}
