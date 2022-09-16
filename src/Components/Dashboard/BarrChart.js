import React from "react";
import {
  Area, AreaChart, CartesianGrid, Cell, Pie, PieChart, Tooltip, XAxis,
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
    <div className=" lg:px-5 mb-20  ">
      <div className="   text-white grid lg:grid-cols-2 gap-3">
        <div className=" bg-white rounded-2xl drop-shadow-lg p-5">
          <AreaChart
            width={500}
            height={350}
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
        <div className="w-3/4 bg-white rounded-2xl drop-shadow-lg p-5">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}
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