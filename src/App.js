import React, { useEffect, useState } from "react";
import "./styles.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import PrayerList from "./components/PrayerList";

function App() {
  const [items, setItems] = useState([
    ["01/01/2020 15:30:00", "01/01/2020 15:30:00"],
    ["01/01/2020 15:30:00", "01/01/2020 15:30:00"]
  ]);
  useEffect(() => {
    fetch(
      "https://spreadsheets.google.com/feeds/cells/14pTNZVOs_3pzGMogj1SsVBLCoQYr_lZ4Er9KrvnWTi4/2/public/full?alt=json"
    )
      .then((res) => res.json())
      .then((result) => {
        let prayerTimes = convertDataObjToArray(result);
        prayerTimes.shift();
        setItems(prayerTimes);
      });
  }, []);
  return (
    <Container className="container" fluid>
      <Header prayerData={items} />
      <PrayerList prayerData={items} />
    </Container>
  );
}

function convertDataObjToArray(data) {
  var results = [];
  var entries = data.feed.entry;
  var previousRow = 0;
  for (var i = 0; i < entries.length; i++) {
    var latestRow = results[results.length - 1];
    var cell = entries[i];
    var text = cell.content.$t;
    var row = cell.gs$cell.row;
    if (row > previousRow) {
      var newRow = [];
      newRow.push(text);
      results.push(newRow);
      previousRow++;
    } else {
      latestRow.push(text);
    }
  }
  return results;
}

export default App;
