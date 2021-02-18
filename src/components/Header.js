import React from "react";
import "./Header.css";
import moment from "moment";
import Moment from "react-moment";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
const timeFormat = "DD/MM/YYYY hh:mm:ss";

class Header extends React.Component {
  state = {
    times: undefined,
    npt: [],
    lpt: [],
    hours: undefined,
    minutes: undefined,
    seconds: undefined
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const now = moment(Date.now(), timeFormat);
      const timeTillDate = this.getNextPrayerTime(
        this.props.prayerData,
        now
      )[1];
      const then = moment(timeTillDate, timeFormat);
      const countdown = moment(then - now);
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");
      this.setState({
        hours,
        minutes,
        seconds,
        times: this.props.prayerData
      });
    }, 3000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  componentDidUpdate(prevProps) {
    // if (this.props.prayerData.length !== prevProps.prayerData.length) {
    //   console.log("compDidUpdate");
    //   this.setState({
    //     times: [...this.state.times, this.props.prayerData]
    //   });
    //   this.calcTimes();
    // }
  }

  calcTimes() {
    console.log("callTimes");
    // const npt = ;
    // const lpt = this.getLatestPrayerTime(this.state.times, new Date());
    //const duration = moment(npt[1], "DD/MM/YYYY hh:mm:ss").toDate();
    // const duration = npt[1];
    this.setState((state) => {
      return {
        npt: this.getNextPrayerTime(state.times, new Date()),
        lpt: this.getLatestPrayerTime(state.times, new Date())
        //duration,
        // times: [...this.state.times, this.props.prayerData]
      };
    });
  }

  getLatestPrayerTime(data, xdate) {
    let prayerBeforeNow = [];
    for (let x = 0; x < data.length; x++) {
      let prayerDate = moment(data[x][1], "DD/MM/YYYY hh:mm:ss").valueOf();
      let now = moment(xdate, "DD/MM/YYYY hh:mm:ss").valueOf();
      if (prayerDate < now) {
        prayerBeforeNow.push(data[x]);
      }
    }
    let sortedArray = prayerBeforeNow.sort((a, b) => moment(b[1]).diff(a[1]));
    console.log(sortedArray);
    return sortedArray[0];
  }

  getNextPrayerTime(data, xdate) {
    let prayerAfterNow = [];
    for (let x = 0; x < data.length; x++) {
      let prayerDate = moment(data[x][1], "DD/MM/YYYY hh:mm:ss");
      let now = moment(xdate, "DD/MM/YYYY hh:mm:ss");
      if (prayerDate > now) {
        prayerAfterNow.push(data[x]);
      }
    }
    let sortedArray = prayerAfterNow.sort((a, b) => moment(a[0]).diff(b[0]));
    return sortedArray[0];
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <Jumbotron className="jumbo mb-0 rounded-0">
        <Container className="content">
          <Row noGutters>
            {hours} - {minutes} - {seconds}
            <Col>
              <h1>
                <small className="text-muted">It's</small> {this.state.lpt[0]}
                <small className="text-muted"> time</small>
              </h1>
              <p className="font-italic">
                {this.state.npt[0]} will start
                {/* <Moment fromNow>{this.state.npt[1]}</Moment> */}
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default Header;
