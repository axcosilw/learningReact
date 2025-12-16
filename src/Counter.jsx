import { useState } from "react";

export default function Counter() {
  // let arr = useState(0);
  // console.log(arr);

  // let [stateVariable,setStateVarible]=useState(0);

  function init() {
    console.log("init was executed!");
    return Math.random();
  }
  let [count, setCount] = useState(init); //only used for initialization
  console.log("component is rendered!");
  console.log(`count=${count}`);

  let incCount = () => {
    // count = count + 1;
    //setCount(count + 1);

    //case-1
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });

    //case-2
    // setCount(20);
    // console.log(count);

    console.log(`inside incCount function:-count=${count}`);
  };

  return (
    <div>
      <h3>Count={count}</h3>
      <button onClick={incCount}>Increase count</button>
    </div>
  );
}

//initial code
// export default function Counter() {
//   let count = 0;

//   function incCount() {
//     count += 1;
//     console.log(count);
//   }
//   return (
//     <div>
//       <h3>Count={count}</h3>
//       <button onClick={incCount}>Increase Count</button>
//     </div>
//   );
// }
