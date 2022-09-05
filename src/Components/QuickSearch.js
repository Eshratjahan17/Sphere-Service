import React from 'react';

const QuickSearch = () => {
  return (
    <div className="flex justify-center  absolute  -bottom-0.5   ">
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
};

export default QuickSearch;