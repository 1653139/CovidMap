import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sort from "../../helper/sort";
import filter from "../../helper/filterday";
import PatientInfo from "./Patient/PatientInfo";
import PatientList from "./Patient/PatientList";
import Container from "react-bootstrap/Container";
import CovidMap from "./CovidMap";
import DateRangeSlide from './DateRangeSlide';

const CovidDashboard = (props) => {
    const [currentPatient, setCurrentPatient] = useState();
    const [patients, setPatients] = useState([]);
    const [dates, setDate] = useState([moment('08/12/2019', 'DD/MM/YYYY').unix(), moment('08/12/2019', 'DD/MM/YYYY').unix()]);
    const [isPlaying, setPlay] = useState(false);
    useEffect(() => {
        console.log('isPlaying', isPlaying)
        if (isPlaying) {
            let endDate = dates[1]
            window.autoPlayFn = setInterval(function () {
                // 1 ngày = 86400s
                endDate = endDate + 86400
                if (endDate >= moment().unix()) {
                    clearInterval(window.autoPlayFn);
                }
                setDate([dates[0], endDate]);
            }, 1000);
        } else {
            clearInterval(window.autoPlayFn);
            getData();
        }
    }, [isPlaying])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        const startDate = moment.unix(dates[0]).format("YYYY-MM-DDTHH:mm:ss");
        const endDate = moment.unix(dates[1]).format("YYYY-MM-DDTHH:mm:ss");
        console.log(startDate, endDate)

        fetch("https://maps.vnpost.vn/apps/covid19/api/patientapi/list")
            .then(res => res.json())
            .then(
                (result) => {
                    const data = sort(result.data);
                    const data2 = filter(data, startDate, endDate);
                    setPatients(data2);
                },
                (error) => {
                    // setIsLoaded(true);
                    // setError(error);
                }
            )
    }
    const patientMarkerClickedHandler = (patient) => {
        setCurrentPatient(patient);
    }

    const slideDateHandler = (dates) => {
        setDate(dates);
    }

    const autoPlayHandler = () => {
        setPlay(!isPlaying)
    }

    const applyFilterByDateHandler = () => {
        getData()
    }

    return <>
        <Container style={{ maxWidth: "100%" }}>
            <Row>
                <Col xs={10}>
                    <div style={{ position: 'relative', height: '88vh' }}>
                        <DateRangeSlide dates={dates} onSlide={slideDateHandler} onApply={applyFilterByDateHandler} onAutoPlay={autoPlayHandler} isPlaying={isPlaying} />
                        <div style={{ height: '100vh' }}>
                            <CovidMap data={patients} onPatientMarkerClicked={patientMarkerClickedHandler} currentPatient={currentPatient} />
                        </div>
                    </div>

                </Col>
                <Col xs={2}>
                    <div>

                        <PatientList data={patients} currentPatient={currentPatient} onClickPatient={patientMarkerClickedHandler} />
                        {currentPatient &&
                            <PatientInfo name={currentPatient.name} address={currentPatient.address} note={currentPatient.note}
                                verifyDate={currentPatient.verifyDate} />}
                    </div>
                </Col>
            </Row>
        </Container>
    </>
};

export default CovidDashboard;