import React, { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

const JobLayout = () => {
  const [number, setNumber] = useState(0);

  const cube = (num) => {
    console.log("Done");
    return Math.pow(num, 3);
  };

  const res = useMemo(() => cube(number), [number]);

  return (
    <div>
      <h1>My Result: {res}</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h1>Welcome to Jobs Page</h1>
      <p>List of current openings are as follows</p>
      <Outlet />
    </div>
  );
};

export default JobLayout;
