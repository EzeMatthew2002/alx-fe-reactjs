import React from "react";
import { useState, useEffect } from "react";

const Working = () => {
  const [details, setDetails] = useState({ counter: 0, name: "" });
  const [othercount, setOtheercount] = useState(0);
  const [arr, setarry] = useState([]);

  console.log(arr);
  useEffect(() => {
    const timerId = setTimeout(() => {
      async function dataFetch() {
        const url = "https://jsonplaceholder.typicode.com/posts";

        const resp = await fetch(url);

        try {
          const data = await resp.json();
          setarry((pr) => [...pr, ...data]);
        } catch (error) {
          console.error(error);
        }
      }
      dataFetch();
    }, 200);
  }, [othercount]);
  function increaseCounter() {
    setDetails((prev) => ({
      ...prev,
      counter: details.counter + 1,
    }));
  }
  console.log(details);

  return (
    <div>
   
      <input
        type="text"
        value={details.name}
        onChange={(e) => setDetails((prs) =>({
          ...prs,
          name: e.target.value
        }))}
      />

      <h1>
        {" "}
        {details.name} has clicked {""}
        {details.counter} times
      </h1>
      <button onClick={increaseCounter}>Click here</button>
      <h1>{othercount}</h1>
      <button onClick={() => setOtheercount(othercount + 5)}>othercount</button>
    </div>
  );
};

export default Working;
