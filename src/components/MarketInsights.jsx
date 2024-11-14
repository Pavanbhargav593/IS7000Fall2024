import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function MarketInsights() {
  const movers = [
    { symbol: 'AAPL', price: 174.55, change: '+2.34%' },
    { symbol: 'TSLA', price: 242.80, change: '-0.89%' },
    { symbol: 'MSFT', price: 327.50, change: '+1.45%' },
    { symbol: 'AMZN', price: 135.76, change: '-1.12%' },
  ];


  const chartData = {
    labels: movers.map((mover) => mover.symbol),
    datasets: [
      {
        label: 'Price',
        data: movers.map((mover) => mover.price),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-4xl mx-auto mt-4">
      <section className="market-overview mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Market Overview</h2>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Market Movers</h3>
        <ul className="divide-y divide-gray-300">
          {movers.map((item, index) => (
            <li key={index} className="flex justify-between py-2">
              <span className="text-gray-800 font-medium">
                {item.symbol} (${item.price.toFixed(2)})
              </span>
              <span
                className={`font-semibold ${
                  item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {item.change}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="market-chart mt-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Price Trend</h3>
        <Line data={chartData} options={chartOptions} />
      </section>
    </div>
  );
}

export default MarketInsights;
