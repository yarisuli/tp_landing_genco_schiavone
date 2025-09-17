import React, { useMemo } from "react";
import "./GlucoseChart.css";

function generateHourlyTimestamps(hours = 24, now = new Date()) {
  const list = [];
  const end = new Date(now);
  end.setMinutes(0, 0, 0);
  for (let i = hours - 1; i >= 0; i--) {
    const d = new Date(end);
    d.setHours(end.getHours() - i);
    list.push(d);
  }
  return list;
}

function generateRandomGlucose(points = 24) {
  const values = [];
  let base = 100 + Math.random() * 20 - 10;
  for (let i = 0; i < points; i++) {
    base += (Math.random() - 0.45) * 18;
    if (base < 50) base = 50 + Math.random() * 10;
    if (base > 300) base = 250 + Math.random() * 30;
    values.push(Math.round(base));
  }
  return values;
}

export default function GlucoseChart({ hours = 24, width = 500, height = 260 }) {
  const timestamps = useMemo(() => generateHourlyTimestamps(hours), [hours]);
  const values = useMemo(() => generateRandomGlucose(hours), [hours]);

  const padding = { top: 20, right: 20, bottom: 40, left: 40 };
  const innerWidth = Math.max(200, width - padding.left - padding.right);
  const innerHeight = Math.max(120, height - padding.top - padding.bottom);

  const minVal = Math.min(...values);
  const maxVal = Math.max(...values);
  const yMin = Math.floor(Math.max(40, minVal - 10) / 10) * 10;
  const yMax = Math.ceil((maxVal + 10) / 10) * 10;
  const yRange = yMax - yMin || 1;

  const xStep = innerWidth / Math.max(1, values.length - 1);
  const xForIndex = (i) => padding.left + i * xStep;
  const yForValue = (v) => padding.top + (1 - (v - yMin) / yRange) * innerHeight;

  const d = values
    .map((v, i) => `${i === 0 ? "M" : "L"} ${xForIndex(i)} ${yForValue(v)}`)
    .join(" ");

  return (
    <div className="glucose-chart-card" style={{ width }}>
      <svg viewBox={`0 0 ${width} ${height}`} className="glucose-chart-svg">
        {Array.from({ length: 5 }).map((_, i) => {
          const y = padding.top + (i / 4) * innerHeight;
          return (
            <line
              key={i}
              x1={padding.left}
              x2={padding.left + innerWidth}
              y1={y}
              y2={y}
              className="grid-line"
            />
          );
        })}

        <path
          d={d}
          className="glucose-line"
          fill="none"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {values.map((v, i) => {
          const cx = xForIndex(i);
          const cy = yForValue(v);
          return (
            <circle key={i} cx={cx} cy={cy} r={3.6} className="glucose-point" />
          );
        })}
      </svg>
    </div>
  );
}
