import React, { useState, useEffect } from 'react';

function Digitalclock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white text-center py-2 px-4 rounded-lg shadow-md my-3 mx-auto w-3/4 border border-teal-500">
      <h2 className="text-lg font-semibold text-teal-800">Current Time</h2>
      <p className="text-sm text-gray-700">{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Digitalclock;
