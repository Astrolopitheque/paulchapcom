import React, { useState, useEffect  } from 'react';

const Countdown = ({ start, interval, callback, str }) => {
  if(start < 0) start = 0;

  const [timeleft, setTimeleft] = useState(start);
  const decrement = () => setTimeleft(timeleft - 1);

  useEffect(() => {
    if(!timeleft) {
      callback();
    }
    else {
      const timer = setTimeout(decrement, interval);
      return () => clearTimeout(timer);
    }
  });

  return (
    <span>{ str(timeleft) }</span>
  );
}

Countdown.defaultProps = {
  interval: 1000,
  callback: () => {},
  str: n => n,
}

export default Countdown;