import React from 'react';
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './charts.css';
import { Label } from 'reactstrap';
import { convertDateTimeSecondFromServer } from 'app/shared/util/date-utils';

const LightLineChartComponent = data => {
  return (
    <div className="recharts-wrapper">
      {data.data && (
        <LineChart
          width={600}
          height={250}
          data={data.data.map(e => {
            return { ...e, ['createdDate']: convertDateTimeSecondFromServer(e.createdDate) };
          })}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey={'createdDate'} interval={0} style={{ fontSize: 13 }} reversed={true} />
          <YAxis dataKey="value" label={{ value: 'Lux', angle: -90, position: 'insideLeft' }}></YAxis>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" name="Light" stroke="#daa520" strokeWidth={3} />
        </LineChart>
      )}
    </div>
  );
};

export default LightLineChartComponent;
