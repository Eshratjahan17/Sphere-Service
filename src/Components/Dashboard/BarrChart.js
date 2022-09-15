import React from "react";
import {
  Area,
  AreaChart,
  Bar, BarChart, CartesianGrid, Cell, ComposedChart, Legend, Line, Pie, PieChart, Scatter, Tooltip, XAxis,
  YAxis
} from "recharts";

const BarrChart = () => {
   const bardata = [
     {
       name: "Page A",
       uv: 4000,
       pv: 2400,
       amt: 2400,
     },
     {
       name: "Page B",
       uv: 3000,
       pv: 1398,
       amt: 2210,
     },
     {
       name: "Page C",
       uv: 2000,
       pv: 9800,
       amt: 2290,
     },
     {
       name: "Page D",
       uv: 2780,
       pv: 3908,
       amt: 2000,
     },
     {
       name: "Page E",
       uv: 1890,
       pv: 4800,
       amt: 2181,
     },
     {
       name: "Page F",
       uv: 2580,
       pv: 3708,
       amt: 2000,
     },
     {
       name: "Page G",
       uv: 2780,
       pv: 3908,
       amt: 2000,
     }
     
   ];
   const data = [
     { name: "Group A", value: 400 },
     { name: "Group B", value: 300 },
     { name: "Group C", value: 300 },
     { name: "Group D", value: 200 },
   ];
   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
   const RADIAN = Math.PI / 180;
   const renderCustomizedLabel = ({
     cx,
     cy,
     midAngle,
     innerRadius,
     outerRadius,
     percent,
     index,
   }) => {
     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
     const x = cx + radius * Math.cos(-midAngle * RADIAN);
     const y = cy + radius * Math.sin(-midAngle * RADIAN);

     return (
       <text
         x={x}
         y={y}
         fill="white"
         textAnchor={x > cx ? "start" : "end"}
         dominantBaseline="central"
       >
         {`${(percent * 100).toFixed(0)}%`}
       </text>
     );
   };


  return (
    <div className=" px-5 mb-9  ">
      <div className="bg-accent p-8 rounded-2xl text-white grid lg:grid-cols-1">
        <ComposedChart
          width={700}
          height={400}
          data={bardata}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
      </div>
      <div>
        <div className="bar-chart bg-accent p-8 rounded-2xl text-white grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
          <BarChart
            width={450}
            height={400}
            data={bardata}
            margin={{
              top: 5,
              right: 30,

              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3  " />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>
        <div className="bg-accent p-8 rounded-2xl">
          <AreaChart
            width={500}
            height={400}
            data={bardata}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </div>
        <div className="bg-accent rounded-2xl pl-7 ">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={180}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default BarrChart;