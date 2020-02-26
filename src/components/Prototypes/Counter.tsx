import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseA, increaseB } from '../../reducers/counter';

const Counter = memo(({ id }: any) => {
  const dispatch = useDispatch();
  const count = useSelector((store: any) => store.numbers[id]);

  return (
    <div>
      Number : {count} <br />
      <button onClick={() => dispatch(id === 'a' ? increaseA() : increaseB())}>Increase Store</button>
    </div>
  )
})

export default Counter;