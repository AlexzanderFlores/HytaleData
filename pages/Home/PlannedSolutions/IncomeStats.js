import { Pie } from "react-chartjs-2";
import SolutionWanted from "../SolutionWanted/SolutionWanted";

export default () => (
  <div id="income-stats" className="center planned-solution">
    <div className="center planned-solution-information">
      <div className="planned-solution-information-text">
        <h2>Income Statistics</h2>
        <div>
          Knowing your numbers is the first step to increasing your revenue.
          Income Statistics help track <strong>conversion rate</strong>,{" "}
          <strong>average income per player</strong>,{" "}
          <strong>cost to acquire a paying player</strong>, and more.
        </div>
      </div>
      <SolutionWanted />
    </div>

    <div className="center planned-solution-graphs">
      <Pie
        data={{
          labels: ["VIP", "VIP+", "Pets"],
          datasets: [
            {
              data: [432, 293, 789],
              backgroundColor: ["#fa9d1c", "#018acf", "#ee4130"]
            }
          ]
        }}
        options={{
          maintainAspectRatio: false
        }}
        height={275}
      />
    </div>

    <div className="center planned-solution-graphs">
      <Pie
        data={{
          labels: ["VIP", "VIP+", "Pets"],
          datasets: [
            {
              data: [432, 293, 789],
              backgroundColor: ["#fa9d1c", "#018acf", "#ee4130"]
            }
          ]
        }}
        options={{
          maintainAspectRatio: false
        }}
        height={275}
      />
    </div>
  </div>
);
