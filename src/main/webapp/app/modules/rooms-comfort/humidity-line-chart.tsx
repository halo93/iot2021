import React from 'react';
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './charts.css';
import { Label } from 'reactstrap';

class HumidLineChartComponent extends React.Component {
  data = [
    {
      name: 'Jan 2019',
      Humidity: 90,
      Temperature: 23,
      Light: 170,
      Noise: 55,
    },
    {
      name: 'Feb 2019',
      Humidity: 20,
      Temperature: 29,
      Light: 200,
      Noise: 40,
    },
    {
      name: 'Mar 2019',
      Humidity: 50,
      Temperature: 19,
      Light: 500,
      Noise: 20,
    },
    {
      name: 'Apr 2019',
      Humidity: 40,
      Temperature: 25,
      Light: 220,
      Noise: 70,
    },
    {
      name: 'May 2019',
      Humidity: 60,
      Temperature: 15,
      Light: 300,
      Noise: 35,
    },
  ];

  render() {
    return (
      <div className="recharts-wrapper">
        <LineChart width={600} height={250} data={this.data} margin={{ top: 5, right: 1, left: 1, bottom: 5 }}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" interval={0} />
          <YAxis dataKey="Humidity" label={{ value: '%', angle: -90, position: 'insideLeft' }}></YAxis>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Humidity" stroke="#0095FF" strokeWidth={3} />
        </LineChart>
      </div>
    );
  }
}

export default HumidLineChartComponent;
