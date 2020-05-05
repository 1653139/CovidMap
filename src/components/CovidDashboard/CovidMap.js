import React, {useEffect, useState} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const CovidMap = ({data, onPatientMarkerClicked, currentPatient}) => {
    

    const openPopup = (ref, pos) =>{
        if(currentPatient && JSON.stringify(pos) == JSON.stringify([currentPatient.lat, currentPatient.lng])){
            window.setTimeout(() => {
                ref.leafletElement.openPopup()
            })
        }
    }

    return <Map center={[10.762887, 106.6800684]} zoom={13} style={{height: '100vh'}}>
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png   "
        />
        {data.map((patient, i) => 
            <Marker key={i} 
                    ref={ref => openPopup(ref, [patient.lat, patient.lng])}
                    position={[patient.lat, patient.lng]} 
                    onClick={() => {onPatientMarkerClicked(patient)}}>
            <Popup>
                <div>
                    <div><b>Name:</b> {patient.name}</div>
                    <div><b>Address:</b> {patient.address}</div>
                    <div><b>Note:</b> {patient.note}</div>
                    <div><b>Verify date:</b> {patient.verifyDate}</div>
                </div>
            </Popup>
        </Marker>)}
    </Map>;
};

export default CovidMap;
