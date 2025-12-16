import { useState } from "react";
export default function Counter() {
  // let arr = useState(0);
  // console.log(arr);

  // let [stateVariable,setStateVarible]=useState(0);

  let [count, setCount] = useState(0);

  let incCount = () => {
    // count = count + 1;
    setCount(count + 1);
    // console.log(count);
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
