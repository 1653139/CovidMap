import React, { useEffect, useState } from 'react';
import Chart from "react-google-charts";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import convertDataGGChartVN from "../../helper/convertDataGGChartVN";

const options = {
    title: "Thống kê tại Việt Nam",
    curveType: "function",
    legend: { position: "bottom" }
};

const Chartvn = (props) => {
    const [data, setData] = useState();

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {

        fetch("https://td.fpt.ai/corona/corona-chart-vn.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setData(convertDataGGChartVN(result.data));
                },
                (error) => {
                    // setIsLoaded(true);
                    // setError(error);
                }
            )
    }

    return <>
        <Container style={{ maxWidth: "100%" }}>
            <Row>
                <Col xs={12}>
                    {data && <Chart
                        chartType="LineChart"
                        width="100%"
                        height="88vh"
                        data={data}
                        options={options}
                    />}
                </Col>
            </Row>
        </Container>
    </>
};

export default Chartvn;