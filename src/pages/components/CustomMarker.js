import React, { useState } from "react";
import {InfoWindow, Marker} from "@react-google-maps/api";
import { v4 as uuidv4 } from "uuid";

export default function CustomMarker(props) {
    const { position, clusterer } = props;

    return <div>
        <Marker position={position} clusterer={clusterer}  />

    </div>;
}