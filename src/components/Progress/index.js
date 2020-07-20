import React from 'react';

const Progress = (props) => {
  const subsCount = props.count;
  const subsPercent = (subsCount/10);
  const goal = props.goal;

  return (
    <div className="progress-bar">
      <span style={{width: `${subsPercent}%`}}>
      {`${subsPercent}%`}
      </span>
      <p>{props.goal}</p>
    </div>
  )
}

export default Progress;