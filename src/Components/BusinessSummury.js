import { CogIcon, CurrencyPoundIcon, HandThumbUpIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";

const BusinessSummury = () => {
  const [counterOn,setCounterOn]=useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="bg-primary text-white">
        <div className="grid items-center px-5  pt-5 pb-20">
          <h3 className="text-center text-3xl font-bold my-9 mb-3">
            We Served
          </h3>
          <div class="divider w-1/4 mx-auto "></div>
          <div class="stats stats-vertical lg:stats-horizontal  bg-primary text-white shadow-2xl ">
            <div class="stat  text-center">
              <div>
                <UserGroupIcon className="h-12 w-12 ml-28" />
              </div>
              <div class="stat-value ">
                {counterOn && (
                  <CountUp start={0} end={100} duration={2} delay={0}></CountUp>
                )}
              </div>
              <div class="">Happy Customers</div>
            </div>

            <div class="stat text-center">
              <div>
                <CurrencyPoundIcon className="h-12 w-12 ml-28 " />
              </div>
              <div class="stat-value ">
                {counterOn && (
                  <CountUp start={0} end={120} duration={2} delay={0}></CountUp>
                )}
                M+
              </div>
              <div class="">Annual Revenue</div>
            </div>

            <div class="stat text-center">
              <div>
                <HandThumbUpIcon className="h-12 w-12  ml-28" />
              </div>
              <div class="stat-value ">
                {counterOn && (
                  <CountUp start={0} end={33} duration={2} delay={0}></CountUp>
                )}
                K
              </div>
              <div class="">Reviews</div>
            </div>
            <div class="stat text-center">
              <div>
                <CogIcon className="h-12 w-12  ml-28"></CogIcon>
              </div>
              <div class="stat-value ">
                {counterOn && (
                  <CountUp start={0} end={50} duration={2} delay={0}></CountUp>
                )}
                +
              </div>
              <div class="">Tools</div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default BusinessSummury;