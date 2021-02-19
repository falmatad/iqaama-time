import React, { useEffect, useState } from "react";
import "./styles.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import PrayerList from "./components/PrayerList";

function App() {
  const [items, setItems] = useState([
    ["Fajr", "19/02/2021 15:30:00", "19/02/2021 15:45:00"],
    ["Zuhr", "19/02/2021 17:30:00", "19/02/2021 15:45:00"],
    ["Asr", "19/02/2021 15:30:00", "19/02/2021 15:45:00"],
    ["Maghrib", "19/02/2021 17:30:00", "19/02/2021 15:45:00"],
    ["Isha", "19/02/2021 17:30:00", "19/02/2021 15:45:00"],
    ["Jumua 1", "19/02/2021 17:30:00", "19/02/2021 15:45:00"],
    ["Jumua 2", "19/02/2021 17:30:00", "19/02/2021 15:45:00"],
    
  ]);

  // useEffect(() => {
  //   fetch(
  //     "https://spreadsheets.google.com/feeds/cells/14pTNZVOs_3pzGMogj1SsVBLCoQYr_lZ4Er9KrvnWTi4/2/public/full?alt=json"
  //   )
  //     .then((res) => res.json())
  //     .then((result) => {
  //       let prayerTimes = convertDataObjToArray(result);
  //       prayerTimes.shift();
  //       setItems(prayerTimes);
  //       console.log(prayerTimes)
  //     });
  // }, []);

  // function convertDataObjToArray(data) {
  //   var results = [];
  //   var entries = data.feed.entry;
  //   var previousRow = 0;
  //   for (var i = 0; i < entries.length; i++) {
  //     var latestRow = results[results.length - 1];
  //     var cell = entries[i];
  //     var text = cell.content.$t;
  //     var row = cell.gs$cell.row;
  //     if (row > previousRow) {
  //       var newRow = [];
  //       newRow.push(text);
  //       results.push(newRow);
  //       previousRow++;
  //     } else {
  //       latestRow.push(text);
  //     }
  //   }
  //   return results;
  // }

  return (
    <Container className="container" fluid>
      <Header prayerData={items} />
      <PrayerList prayerData={items} />
    </Container>
  );
}



export default App;
