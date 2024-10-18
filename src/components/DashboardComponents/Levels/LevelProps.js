import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "24°", value: 24 },
  { name: "33°", value: 33 },
  { name: "29°", value: 29 },
  { name: "35°", value: 35 },
  { name: "24°", value: 24 },
  { name: "40°", value: 40 },
];

function LevelProps() {
  return (
    <div className="item">
      <div className="item-container">
        <div className="item-title-container">
          <div className="item-icon">
            <FontAwesomeIcon icon={faDroplet} />
          </div>
          <div className="item-title">Humidity</div>
        </div>
        <div className="level-chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid
                horizontal={false}
                stroke="white"
                strokeDasharray="1 0"
              />
              <XAxis dataKey="name" tick={{ fill: "white" }} />
              <YAxis
                domain={[20, "dataMax + 5"]}
                tick={{ fill: "#ffffff" }}
                hide={true}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="white"
                dot={{ stroke: "#ffffff", strokeWidth: 2, fill: "#888" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default LevelProps;
