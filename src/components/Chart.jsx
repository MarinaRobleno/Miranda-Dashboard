import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

export default function ReservationChart() {
  const [checkIn, setCheckIn] = useState([20, 3, 20, 17, 10, 39]);
  const [inProgress, setinProgress] = useState([2, 5, 4, 8, 17, 2]);
  const [checkOut, setCheckOut] = useState([32, 12, 16, 13, 25, 18]);
  const [days, setDays] = useState([
    "27-2",
    "3-9",
    "10-16",
    "17-23",
    "24-30",
    "31-6",
  ]);
  const ref = useRef();

  /*Get day
  let date = new Date();
  let weekday = date.toLocaleString("en-EN", { weekday: "long" });

  function orderWeeks() {
    while (days[0] != weekday) {
      let movedDay = days.shift();
      setDays(days.push(movedDay));
    }
  }*/

  useEffect(() => {
    //orderWeeks();
    let width = window.innerWidth > 1890 ? 700 : 500;
    let height = window.innerWidth > 1890 ? 400 : 380;
    let axisHeight = window.innerWidth > 1890 ? height - 30 : height - 100;
    let svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    //X and Y axis
    const xScale = window.innerWidth > 1890 ? d3.scaleBand().domain(days).range([39, 700]) : d3.scaleBand().domain(days).range([40, 480]);
    svg
      .append("g")
      .call(d3.axisBottom(xScale))
      .attr("transform", `translate (${0},${axisHeight})`);

    const maxYAxis = d3.max([...checkIn,...inProgress, ...checkOut]) + 5;
    const yScale = d3
      .scaleLinear()
      .domain([0, maxYAxis])
      .range([axisHeight, 10]);
    svg
      .append("g")
      .call(d3.axisLeft(yScale))
      .attr("transform", "translate (26,0)");

    const yRange = (axisHeight - 10) / maxYAxis;

    svg
      .append("g")
      .attr("class", "grid")
      .call(d3.axisLeft().scale(yScale).tickSize(-width, 0, 0).tickFormat(""))
      .attr("transform", "translate (26,0)")
      .attr("color", "#EEE");

    var chartInfo = d3
      .select(ref.current)
      .append("div")
      .style("position", "relative")
      .style("visibility", "hidden")
      .style("background-color", "white")
      .style("width", "110px")
      .style("height", "30px")
      .style("box-shadow", "0px 8px 30px #00000012")
      .style("border-radius", "5px")
      .style("border", "solid 1px")
      .style("font-size", "14px")
      .style("padding", "5px");

    var mouseover = function (d) {
      chartInfo.style("visibility", "visible");
      d3.select(this).style("stroke", "black");
    };

    var mouseleave = function (d) {
      chartInfo.style("visibility", "hidden");
      d3.select(this).style("stroke", "none");
    };

    svg
      .selectAll()
      .data(checkIn)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * xScale.bandwidth() + xScale.bandwidth() / 2 + 8)
      .attr("y", (d) => axisHeight - d * yRange)
      .attr("width", 20)
      .attr("height", (d) => d * yRange)
      .attr("fill", "#135846")
      .on("mouseover", mouseover)
      .on("mousemove", (event, i) => {
        chartInfo
          .html("Check In: " + i)
          .style("visibility", "visible")
          .style("left", d3.pointer(event)[0] + "px")
          .style("top", d3.pointer(event)[1] - 400 + "px");
      })
      .on("mouseleave", mouseleave);

    svg
      .selectAll()
      .data(inProgress)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * xScale.bandwidth() + xScale.bandwidth() / 2 + 29)
      .attr("y", (d) => axisHeight - d * yRange)
      .attr("width", 20)
      .attr("height", (d) => d * yRange)
      .attr("fill", "#FF9C3A")
      .on("mouseover", mouseover)
      .on("mousemove", (event, i) => {
        chartInfo
          .html("In Progress: " + i)
          .style("visibility", "visible")
          .style("left", d3.pointer(event)[0] + "px")
          .style("top", d3.pointer(event)[1] - 400 + "px");
      })
      .on("mouseleave", mouseleave);

    svg
      .selectAll()
      .data(checkOut)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * xScale.bandwidth() + xScale.bandwidth() / 2 + 50)
      .attr("y", (d) => axisHeight - d * yRange)
      .attr("width", 20)
      .attr("height", (d) => d * yRange)
      .attr("fill", "#E23428")
      .on("mouseover", mouseover)
      .on("mousemove", (event, i) => {
        chartInfo
          .html("Check Out: " + i)
          .style("visibility", "visible")
          .style("left", d3.pointer(event)[0] + "px")
          .style("top", d3.pointer(event)[1] - 400 + "px");
      })
      .on("mouseleave", mouseleave);
  }, [checkIn]);

  return <div ref={ref} />;
}
