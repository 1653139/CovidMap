import React, {useEffect, useState} from 'react';
import Card  from "react-bootstrap/Card";
const PatientInfo = ({name, address, note, verifyDate}) => {
    return <>
        <div className="patient-info">
            <Card>
                <Card.Body>
                    <Card.Text>
                        <div className="patient-info__body">
                        <ul style={{padding: '0'}}>
                            <li><b>Name:</b> {name}</li>
                            <li><b>Address:</b> {address}</li>
                            <li><b>Note:</b> {note}</li>
                            <li><b>Verify Date:</b> {verifyDate}</li>
                        </ul>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            
        </div>
    </>
};

export default PatientInfo;