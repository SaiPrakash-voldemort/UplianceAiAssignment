import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Counter = () => {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("counter")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("counter", count.toString());
  }, [count]);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => count > 0 && setCount(count - 1);
  const handleReset = () => setCount(0);

  const bgColor = `rgba(30, 64, 175, ${Math.min(count / 20, 1)})`;

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="flex items-center justify-center mt-9 w-full">
      <motion.div
        className="Container p-2 rounded-xl flex justify-center items-center h-[400px] w-[500px]"
        style={{
          backgroundColor: bgColor,
          transition: "background-color 2s cubic-bezier(0.25, 1, 0.5, 1)",
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="CounterContainer flex flex-col gap-2">
          <div className="counter flex gap-2">
            <button onClick={handleDecrement} disabled={count <= 0}>-</button>
            <button>count is {count}</button>
            <button onClick={handleIncrement}>+</button>
          </div>
          <div className="flex flex-col gap-1">
            {count < 0 && "can't decrement more"}
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Counter;