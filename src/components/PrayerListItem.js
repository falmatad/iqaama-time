import React from "react";
import { ListGroupItem, Col, Row } from "react-bootstrap";
import Moment from "react-moment";

function PrayerListItem({ name, time, time2 }) {
  return (
    <>
      <ListGroupItem>
        <Row>
          <Col>{name}</Col>
          {time2 && (
            <Col>
            Azaan at - 6:20
               {/* <Moment date={time2} format="hh:mm A" /> */}
            </Col>
          )}
          <Col className="text-right">
          Iqaamah at - 6:30
            {/* <Moment date={time} format="hh:mm A" /> */}
            
          </Col>
        </Row>
      </ListGroupItem>
    </>
  );
}

export default PrayerListItem;
