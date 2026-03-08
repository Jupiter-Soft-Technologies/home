import { useEffect, useState } from "react";

function Counter({ end, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <div>
      <h3 className="text-4xl font-bold text-blue-600">
        {count}+
      </h3>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <Counter end={300} label="Projects Delivered" />
        <Counter end={200} label="Happy Clients" />
        <Counter end={11} label="Countries Served" />
        <Counter end={3} label="Years Experience" />
      </div>
    </section>
  );
}