
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from 'rc-slider';
import moment from 'moment';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import { Button } from 'react-bootstrap';
import './style.css'
const Range = Slider.Range;

const DateRangeSlide = ({ dates, onSlide, onApply, onAutoPlay, isPlaying }) => {
    const min = moment('08/12/2019', 'DD/MM/YYYY').unix()
    const max = moment().unix()
    return (
        <div className="date-slide">
            <Row>
                <Col xs={10}>
                    <div>
                        <Range value={dates} step={86400} min={min} max={max} onChange={onSlide}
                        />
                    </div>
                    <div>
                        <div><b>Từ ngày:</b> {moment.unix(dates[0]).format("DD/MM/YYYY")} - <b>Đến ngày:</b> {moment.unix(dates[1]).format("DD/MM/YYYY")}</div>

                    </div>
                </Col>
                <Col xs={2}>
                    <Button type="button" size="sm" block onClick={onApply}>Tìm</Button>
                    {isPlaying ?
                        <Button type="button" variant="danger" size="sm" block onClick={onAutoPlay}>Stop</Button> :
                        <Button type="button" size="sm" block onClick={onAutoPlay}>Play</Button>
                    }

                </Col>
            </Row>
        </div>
    )
}

export default DateRangeSlide