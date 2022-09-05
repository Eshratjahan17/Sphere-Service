import React from 'react';

const Thumbnail = ({ image, index, handlethumb }) => {
  return (
    <div>
      <img
        onClick={() => handlethumb(index)}
        className="max-w-sm rounded-lg shadow-2xl w-24 h-24 border-2 border-cyan-900 "
        src={image}
        alt=""
      />
    </div>
  );
};

export default Thumbnail;