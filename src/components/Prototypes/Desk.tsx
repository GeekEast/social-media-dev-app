import React, { useState } from 'react'
import Counter from './Counter';

const Desk = () => {
  const [r, setR] = useState(true);
  const [a,] = useState('a');
  const [b, setB] = useState('b')
  console.log('desk render');
  return (
    <div>
      {a}: <Counter id={a}></Counter>
      {a}: <Counter id={a}></Counter>
      {b}: <Counter id={b}></Counter>
      <button onClick={() => setR(!r)}>Render</button>

      <button onClick={() => setB('a')}>Change Id</button>

    </div>

  )
}

export default Desk;