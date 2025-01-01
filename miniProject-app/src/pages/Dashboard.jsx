// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import "./styles/dashboard.css"
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
// import { MdBalance } from "react-icons/md";
import { FaMinusCircle } from "react-icons/fa";
import DonutChart from "../components/DonutChart";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";

const Dashboard = () => {
 
  return (
    <div className="dashboard"> 
      <div className="top-section">
        <div className="left">
            <div className="cards">
            <div className="card income">
                <h3><FaArrowAltCircleDown/> Income</h3>
                <p>50000.00 DZD</p>
                <span>October</span>
            </div>
              <div className="card expense">
                <h3> <FaArrowAltCircleUp/> Expense</h3>
                <p>20000.00 DZD</p>
                <span>October</span>
              </div>
              <div className="card balance">
                <h3><FaMinusCircle/> Balance</h3>
                <p>30000.00 DZD</p>
                <span>October</span>
              </div>
            </div>
            <div className="bar-chart"> 
              <BarChart/>
            </div>  
        </div>
        <div className="recent-transactions">
          <h3>Recent Transactions</h3>
            <ul className="transactions-list">
              <li className="transaction">
                <span className="transaction-name">Groceries</span>
                <span className="transaction-amount">$50.00</span>
                <span className="transaction-date">2023-10-01</span>
              </li>
              <li className="transaction">
                <span className="transaction-name">Utilities</span>
                <span className="transaction-amount">$100.00</span>
                <span className="transaction-date">2023-10-02</span>
              </li>
              <li className="transaction">
                <span className="transaction-name">Rent</span>
                <span className="transaction-amount">$1200.00</span>
                <span className="transaction-date">2023-10-03</span>
              </li>
              <li className="transaction">
                <span className="transaction-name">Dining Out</span>
                <span className="transaction-amount">$75.00</span>
                <span className="transaction-date">2023-10-04</span>
              </li>
              <li className="transaction">
                <span className="transaction-name">Entertainment</span>
                <span className="transaction-amount">$60.00</span>
                <span className="transaction-date">2023-10-05</span>
              </li>
            </ul>
        </div>
      </div>
      <div className="bottom-section">
          <div className="pie-chart">
              <DonutChart/>
          </div>
          <div className="line-chart">
              <LineChart/>
          </div>
      </div>
    </div>
  );
};

export default Dashboard;
