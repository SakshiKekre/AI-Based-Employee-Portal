import React, { Component } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
} from "recharts";

class analytics extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [
        { x: "A", y: 10 },
        { x: "B", y: 20 },
        { x: "C", y: 30 },
        { x: "D", y: 40 }
      ]
    };
  }

///analytics/employee-gender-count

getData = () => {
       axios
          .get(process.env.REACT_APP_API_URL + "/analytics/employee-gender-count", {
            headers: {
              authorization: localStorage.getItem("token") || ""
            }
          })
          .then(response => {
            console.log("response : ",response.data);
            this.setState({data : response.data});
            console.log(this.state.data);
          })
          .catch(error => {
            console.log(error);
          });
}

  componentDidMount() {
    this.animate();
    this.getData();
  }

  animate() {
    const newData = [
      { x: "A", y: 20 },
      { x: "B", y: 30 },
      { x: "C", y: 40 },
      { x: "D", y: 50 }
    ];
    this.setState({ data: newData });
  }

  render() {
    return (
      <React.Fragment>
        <h2 id="role-title">Analytics</h2>
{/*         <BarChart */}
{/*           width={520} */}
{/*           height={300} */}
{/*           data={this.state.data} */}
{/*           margin={{ */}
{/*             top: 5, */}
{/*             right: 30, */}
{/*             left: 20, */}
{/*             bottom: 5, */}
{/*           }} */}
{/*           barSize={20} */}
{/*         > */}
{/*           <XAxis dataKey="count" scale="point" padding={{ left: 10, right: 10 }} /> */}
{/*           <YAxis /> */}
{/*           <Tooltip /> */}
{/*           <Legend /> */}
{/*           <CartesianGrid strokeDasharray="3 3" /> */}
{/*           <Bar */}
{/*             dataKey="gender" */}
{/*             fill="rgb(88 99 161)" */}
{/*             background={{ fill: "#eee" }} */}
{/*           /> */}
{/*         </BarChart> */}

<div>
<h5 id="role-title"> Male to Female Ratio</h5>

<PieChart width={300} height={300}>
  <Pie
    dataKey="count"
    isAnimationActive={true}
    data={this.state.data}
    cx="50%"
    cy="50%"
    outerRadius={90}
    fill="rgb(88 99 161)"
    label={(entry) => entry.gender}
  />
  <Tooltip />
</PieChart>
</div>

      </React.Fragment>
    );
  }
}

export default analytics;
