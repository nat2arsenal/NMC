import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function Delay({ children, time, display }) {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setIsShown(true);
    // }, time);
    // return () => clearTimeout(timer);
    setTimeout(() => {
      setIsShown(true);
    }, time);
  }, [time]);

  return isShown ? (
    children
  ) : (
    <div style={{ width: '100%', marginLeft: '15px' }}>{display}</div>
  );
}

Delay.propTypes = {
  children: PropTypes.node,
  time: PropTypes.number.isRequired,
  display: PropTypes.string,
};
