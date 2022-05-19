import React, { useState, useEffect } from 'react';

const Countdown = ({ start, interval, callback, component }) => {
  if(start < 0) start = 0;

  const Component = component;

  const [timeleft, setTimeleft] = useState(start);
  const decrement = () => setTimeleft(timeleft - 1);

  useEffect(() => {
    if(!timeleft) {
      setTimeout(callback, interval);
    }
    else {
      const timer = setTimeout(decrement, interval);
      return () => clearTimeout(timer);
    }
  });

  return (
    <Component timeleft={ timeleft } />
  );
}

Countdown.defaultProps = {
  interval: 1000,
  callback: () => {},
  component: ({ timeleft }) => <span>{ timeleft }</span>,
}

export default Countdown;