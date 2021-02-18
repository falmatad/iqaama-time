import React from "react";
// import "./Header.css";
import moment from "moment";
import { ListGroup } from "react-bootstrap";
import PrayerListItem from "./PrayerListItem";

function PrayerList({ prayerData }) {
  const data = filterListByDate(prayerData, new Date());
  // const currentPrayer = getLatestPrayerTime(prayerData);
  return (
    <ListGroup variant="flush">
      {data.map((prayer, ind) => {
        return (
          <PrayerListItem
            time2={prayer[3]}
            key={prayer[1]}
            name={prayer[0]}
            time={prayer[1]}
          />
        );
      })}
    </ListGroup>
  );
}

function filterListByDate(prayerTimesArray, filterDate) {
  return prayerTimesArray.filter((row) => {
    let moDate = moment(row[1], "DD/MM/YYYY").toDate();
    let moFilterDate = moment(filterDate, "DD/MM/YYYY").toDate();
    return moDate.toLocaleDateString() === moFilterDate.toLocaleDateString();
  });
}

export default PrayerList;
