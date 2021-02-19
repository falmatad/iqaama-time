import React from "react";
// import "./Header.css";
import moment from "moment";
import { ListGroup } from "react-bootstrap";
import PrayerListItem from "./PrayerListItem";

class PrayerList extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.setState({data: this.filterListByDate(this.props.prayerData, new Date())})
    console.log(this.props.prayerData)
    
  }

  filterListByDate(prayerTimesArray, filterDate) {
    return prayerTimesArray.filter((row) => {
      let moDate = moment(row[1], "DD/MM/YYYY").toDate();
      let moFilterDate = moment(filterDate, "DD/MM/YYYY").toDate();
      console.log(moDate)
      console.log(moFilterDate)
      return moDate.toLocaleDateString() === moFilterDate.toLocaleDateString();
    });
  }
  
  // const currentPrayer = getLatestPrayerTime(prayerData);
  render () {
    // const data = this.filterListByDate(prayerData, new Date());

    return (<ListGroup variant="flush">
      {this.state.data.map((prayer, ind) => {
        return (
          <PrayerListItem
            time2={prayer[2]}
            key={prayer[1]}
            name={prayer[0]}
            time={prayer[1]}
          />
        );
      })}
    </ListGroup>)
  }
}



export default PrayerList;
