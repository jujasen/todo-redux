import moment from "moment";
import { useEffect } from "react";
import { setNow, selectNow } from "./nowSlice";
import { useSelector, useDispatch } from "react-redux";

export const Now = () => {
  const now = useSelector(selectNow);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = {
        hours: moment().format('HH'),
        minutes: moment().format('mm'),
        seconds: moment().format('ss'),
        day: moment().format('dddd'),
        dayNum: moment().format('Do'),
        month: moment().format('MMMM')
      };
      dispatch(setNow(newTime));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
      <div className='now'>
          {now && <h2>{now.hours}:{now.minutes}:{now.seconds}</h2>}
          {now && <p>{now.day}, {now.dayNum} of {now.month}</p>}
      </div>
  )
};
