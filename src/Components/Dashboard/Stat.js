import {
  ChartBarIcon
} from "@heroicons/react/24/solid";
import React, { useState } from 'react';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Stat = () => {
   const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className=" text-white">
          <div className="grid items-center px-5  pt-5 pb-20">
            <div class="stats stats-vertical lg:stats-horizontal  bg-primary text-white shadow-2xl ">
              <div class="stat text-center flex justify-between items-center ">
                <div>
                  <ChartBarIcon className="h-7 w-7  " />
                </div>
                <div>
                  <div class="stat-value ">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={100}
                        duration={2}
                        delay={0}
                      ></CountUp>
                    )}
                  </div>
                  <div class="">Happy Customers</div>
                </div>
              </div>

              <div class="stat text-center flex justify-between items-center ">
                <div>
                  <ChartBarIcon className="h-7 w-7  " />
                </div>
                <div>
                  <div class="stat-value ">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={120}
                        duration={2}
                        delay={0}
                      ></CountUp>
                    )}
                    M+
                  </div>
                  <div class="">Annual Revenue</div>
                </div>
              </div>

              <div class="stat text-center flex justify-between items-center ">
                <div>
                  <ChartBarIcon className="h-7 w-7  " />
                </div>
                <div>
                  <div class="stat-value ">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={33}
                        duration={2}
                        delay={0}
                      ></CountUp>
                    )}
                    K
                  </div>
                  <div class="">Reviews</div>
                </div>
              </div>
              <div class="stat text-center flex justify-between items-center ">
                <div>
                  <ChartBarIcon className="h-7 w-7  "></ChartBarIcon>
                </div>
                <div>
                  <div class="stat-value ">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={50}
                        duration={2}
                        delay={0}
                      ></CountUp>
                    )}
                    +
                  </div>
                  <div class="">Tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Stat;