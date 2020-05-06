import React, { useEffect, useState } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Chartvn from "../ChartVN/chartvn";
import Charttg from "../ChartTG/charttg"

const ChartDashboard = (props) => {
    return <>
        <Container style={{ maxWidth: "100%" }}>
            <Row>
                <Col xs={6}>
                    <Chartvn></Chartvn>
                </Col>
                <Col xs={6}>
                    <Charttg></Charttg>
                </Col>
            </Row>
        </Container>
    </>
};

export default ChartDashboard;