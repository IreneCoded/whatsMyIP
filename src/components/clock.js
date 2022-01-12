import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import '../css/Clock.css';
export default function MyClock() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className="center clocksize">
      
      <Clock value={value} size="600" secondHandWidth="5" hourHandWidth="12" hourMarksWidth="7" hourHandLength="75" minuteHandLength="90" minuteHandWidth="7"/>
    </div>
  )
}