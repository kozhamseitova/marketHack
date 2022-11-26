import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const defaultCenter = { lat: 51.112631, lng: 71.420456 };

const options = {
    disableDefaultUI: true,
    scaleControl: true,
    mapTypeId: "roadmap",
    labels: true
};

export default function Map(props) {
    const { setMap, children } = props;
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyARHzdKyHYq2HTJl2J-rDy-jLCX53njZRo" // ,
        // ...otherOptions
    });

    const renderMap = () => {


        const loadHandler = map => {
            setMap(map);
        };

        return (
            <GoogleMap
                id="circle-example"
                mapContainerStyle={{
                    height: "350px",
                    width: "550px"
                }}
                zoom={10}
                center={defaultCenter}
                options={options}
                onLoad={loadHandler}
            >
                {children}
            </GoogleMap>
        );
    };

    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>;
    }

    return isLoaded ? renderMap() : <div>Loading...</div>;
}
