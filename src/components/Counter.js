import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
  //dispatch is a function
  const dispatch = useDispatch();

  const counter = useSelector((state) => {
    return state.counter.counter;
  });
  const show = useSelector((state) => {
    return state.counter.showCounter;
  });

  const incrementHandler = () => {
    //dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    //dispatch({ type: "increase", amount: 10 });
    dispatch(counterActions.increase(10)); // {type: UNIQUE_ID. payload: 10}
  };

  const decrementHandler = () => {
    //dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    //dispatch({ type: "toggle" });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
