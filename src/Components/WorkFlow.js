import React from 'react';
import { Link } from 'react-router-dom';
import worker from '../images/banner/worker.jpg';

const WorkFlow = () => {
  return (
    <div className="mt-20 ">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse ">
          <img src={worker} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold mb-6 w-3/4">
              See Our Work Flow Here
            </h1>
            <p class="py-6">
              <ul class="steps steps-vertical ">
                <div className="step step-primary">
                  <li class=" text-2xl font-bold">Get Raw Metarials</li>
                </div>

                <div class="step step-primary">
                  <li class="text-2xl font-bold">Manufacture Products</li>
                </div>
                <div class="step ">
                  <li class="  text-2xl font-bold">Quality Check</li>
                </div>
              </ul>
            </p>
            <Link to="/allProducts">
              <button class="btn btn-primary ">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;