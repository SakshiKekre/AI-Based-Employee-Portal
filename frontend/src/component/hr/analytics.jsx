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

  componentDidMount() {
    this.animate();
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
        <BarChart
          width={520}
          height={300}
          data={this.state.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="x" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="y"
            fill="rgb(88 99 161)"
            background={{ fill: "#eee" }}
          />
        </BarChart>

<PieChart width={300} height={200}>
  <Pie
    dataKey="y"
    isAnimationActive={true}
    data={this.state.data}
    cx="50%"
    cy="50%"
    outerRadius={80}
    fill="rgb(88 99 161)"
    label
  />
  <Tooltip />
</PieChart>


      </React.Fragment>
    );
  }
}

export default analytics;
