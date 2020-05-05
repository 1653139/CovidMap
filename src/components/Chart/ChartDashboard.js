import React, { useEffect, useState } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Map from "../Map/Map";
import Stats from "../Stats/Stats"

const ChartDashboard = (props) => {
    return <>
        <Container style={{ maxWidth: "100%" }}>
            <Row>
                <Col xs={6}>
                    <Map></Map>
                </Col>
                <Col xs={6}>
                    <Stats></Stats>
                </Col>
            </Row>
        </Container>
    </>
};

export default ChartDashboard;