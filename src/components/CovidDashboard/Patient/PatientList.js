import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import PatientItem from './PatientItem'
import ListGroup from "react-bootstrap/ListGroup";
import './style.css'


const PatientList = ({ data, currentPatient, onClickPatient }) => {
    let refs = useRef([React.createRef(), React.createRef()]);
    const scrollToRef = (ref) => window.scrollTo(0, ref.offsetTop)
    useEffect(() => {
        console.log(refs)
        scrollToRef(refs.current[0])
    }, []);

    return (
        <>
            <div className="patient-panel">
                <ListGroup>
                    {
                        data.length > 0 && data.map((p, i) =>
                            <ListGroup.Item ref={refs.current[i]} key={i} variant={p == currentPatient ? "primary" : "Light"}>
                                <PatientItem item={p} onClickPatient={onClickPatient} />
                            </ListGroup.Item>
                        )
                    }
                </ListGroup>
            </div>

        </>
    )
}
PropTypes.PatientList = {
    data: PropTypes.array.required,
    onClickPatient: PropTypes.func.required
}
export default PatientList