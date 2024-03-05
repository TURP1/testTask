import React, { useEffect } from "react";
import clsx from "clsx";
import { priorityType } from "../../redux/services/tasks";
import gsap from "gsap";

import s from "./Card.module.css";

export const PriorityList = ({ priority }: { priority: priorityType }) => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.fromTo(
      ".tech-row",
      {
        x: -230,
        duration: 3,
      },
      {
        x: -25,
        duration: 3,
        ease: "none",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div
      className={clsx("tech-row", s.cardPriorityList, {
        [s.highPriority]: priority === "high",
        [s.midPriority]: priority === "mid",
        [s.lowPriority]: priority === "low",
      })}
      aria-label={"priority"}
    >
      {Array.from({ length: 15 }, (_, index) => (
        <React.Fragment key={index}>
          <p className={clsx("tech-item", s.cardPriorityItem)}>
            {priority} priority
          </p>
        </React.Fragment>
      ))}
    </div>
  );
};
