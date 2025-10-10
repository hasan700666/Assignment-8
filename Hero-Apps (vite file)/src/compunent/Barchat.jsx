import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const Barchat = ({ data }) => {
  console.log(data);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Bar dataKey="count" fill="#00000" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchat;
