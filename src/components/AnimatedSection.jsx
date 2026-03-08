import { useEffect, useRef, useState } from "react";

function AnimatedSection({
  children,
  delay = 0,
  direction = "up",
  duration = 800
}) {

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };

  }, []);

  const getDirection = () => {

    switch (direction) {

      case "left":
        return visible ? "translate-x-0" : "-translate-x-10";

      case "right":
        return visible ? "translate-x-0" : "translate-x-10";

      case "down":
        return visible ? "translate-y-0" : "-translate-y-10";

      default:
        return visible ? "translate-y-0" : "translate-y-10";

    }

  };

  return (

    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
      className={`transition-all ease-out
      ${visible ? "opacity-100" : "opacity-0"}
      ${getDirection()}`}
    >

      {children}

    </div>

  );

}

export default AnimatedSection;