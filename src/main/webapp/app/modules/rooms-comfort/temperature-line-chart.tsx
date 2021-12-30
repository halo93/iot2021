import React, { useEffect, useState } from 'react';
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend, Text } from 'recharts';
import './charts.css';
import { Label } from 'reactstrap';
import { convertDateTimeSecondFromServer } from 'app/shared/util/date-utils';

const TempLineChartComponent = data => {
  return (
    <div className="recharts-wrapper">
      {data.data && (
        <LineChart
          width={600}
          height={250}
          data={data.data.map(e => {
            return { ...e, ['createdDate']: convertDateTimeSecondFromServer(e.createdDate) };
          })}
          margin={{ top: 5, right: 1, left: 1, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey={'createdDate'} interval={0} style={{ fontSize: 13 }} reversed={true} />
          <YAxis dataKey="value" label={{ value: '˚C', angle: -90, position: 'insideLeft' }}></YAxis>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" name="Temperature" stroke="#008000" strokeWidth={3} />
        </LineChart>
      )}
    </div>
  );
};

export default TempLineChartComponent;
