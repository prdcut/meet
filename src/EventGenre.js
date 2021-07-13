import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({ events }) => {
  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
  const COLORS = ['#FFA06B', '#FC93A8', '#F74568', '#F48EDE', '#EB63CD'];


  const getData = () => {
    let data = genres.map((genre) => {
      const value = events.filter((event) => event.summary.split(' ').includes(genre)).length
      return { name: genre, value }
    });
    data = data.filter(data => data.value)
    return data;
  };

  useEffect(() => { setData(() => getData()) }, [events]);
  const [data, setData] = useState([]);

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          innerRadius={10}
          fill="#8884d8"
          dataKey="value"
          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
        >
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))
          }
        </Pie>
        <Legend align="center" height={45} />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default EventGenre;
