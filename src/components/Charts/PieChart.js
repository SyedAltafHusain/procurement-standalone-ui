
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import React from "react";
import PieChart from "@cloudscape-design/components/pie-chart";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";

const PieCharts = () => {
  // const data = [
  //   { name: "Group A", value: 500 },
  //   { name: "Group B", value: 180 },
  //   { name: "Group C", value: 180 },

  // ];

  // const COLORS = ["#FFBB28", "#FF8042", "#00C49F"];



  // const RADIAN = Math.PI / 180;
  // const renderCustomizedLabel = ({
  //   cx,
  //   cy,
  //   midAngle,
  //   innerRadius,
  //   outerRadius,
  //   percent,
  //   index,
  // }) => {
  //   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
  //   const y = cy + radius * Math.sin(-midAngle * RADIAN);

  //   return (
  //     <text
  //       x={x}
  //       y={y}
  //       fill="white"
  //       textAnchor={x > cx ? "start" : "end"}
  //       dominantBaseline="central"
  //     >
  //       {`${(percent * 100).toFixed(0)}%`}
  //     </text>
  //   );
  // };

  return (
    <PieChart
      data={[
        {
          title: "Pending",
          value: 58,
          lastUpdate: "Dec 7, 2020"
        },
        {
          title: "Failed",
          value: 24,
          lastUpdate: "Dec 6, 2020"
        },
        {
          title: "In-progress",
          value: 24,
          lastUpdate: "Dec 6, 2020"
        },
        
      ]}
      ariaDescription="Pie chart showing how many resources are currently in which state."
      ariaLabel="Pie chart"
      hideFilter
      empty={
        <Box textAlign="center" color="inherit">
          <b>No data available</b>
          <Box variant="p" color="inherit">
            There is no data available
          </Box>
        </Box>
      }
      noMatch={
        <Box textAlign="center" color="inherit">
          <b>No matching data</b>
          <Box variant="p" color="inherit">
            There is no matching data to display
          </Box>
          <Button>Clear filter</Button>
        </Box>
      }
    />
  );
}

export default PieCharts;
