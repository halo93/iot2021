import React from 'react';
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class LineChartComponent extends React.Component {
  data = [
    {
      name: 'Jan 2019',
      'Product A': 3432,
      'Product B': 2342,
    },
    {
      name: 'Feb 2019',
      'Product A': 2342,
      'Product B': 3246,
    },
    {
      name: 'Mar 2019',
      'Product A': 4565,
      'Product B': 4556,
    },
    {
      name: 'Apr 2019',
      'Product A': 6654,
      'Product B': 4465,
    },
    {
      name: 'May 2019',
      'Product A': 8765,
      'Product B': 4553,
    },
  ];

  render() {
    return (
      <LineChart width={400} height={250} data={this.data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Product A" stroke="#0095FF" />
        <Line type="monotone" dataKey="Product B" stroke="#FF0000" />
      </LineChart>
    );
  }
}

export default LineChartComponent;
