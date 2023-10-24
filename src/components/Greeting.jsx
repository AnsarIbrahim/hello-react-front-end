import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greetingReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetingmsg = useSelector((state) => state.greeting.greetingmsg);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (!greetingmsg) {
    return <h1 className="flex items-center justify-center">Loading...</h1>;
  }

  return (
    <div className="flex items-center justify-center">
      <h1 className="text-black">
        Greeting Messages:
        <span className="text-red-400">{greetingmsg}</span>
      </h1>
    </div>
  );
};

export default Greeting;
