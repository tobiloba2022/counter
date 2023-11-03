import { useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
function countReducer(initialState = 0, action) {
  switch (action) {
    case 'increment':
      return initialState + 1;
    case 'decrement':
      return initialState - 1;
    case 'reset':
      return 0;
    default:
      return initialState;
  }
}
function Reducer() {
  const [value, setValue] = useReducer(countReducer, 0);
  return (
    <>
    <Helmet>
      <title>useReducer</title>
      <meta name="description" content="increment and decrement useReducer" />
      <link rel="canonical" href="/useReducer" />
    </Helmet>
    <h2>Counter App made with useReducer</h2>
    <div className="box">
      <h1 className='reducer-head'>Reducer</h1>
      <span className="output">{value}</span>
      <div className="card">
        <button className="add" onClick={() => setValue('increment')}>add</button>
        <button className="reset" onClick={() => setValue('reset')}>Reset</button>
        <button className="subtract" onClick={() => setValue('decrement')}>subtract</button>
      </div>
    </div>
    </>
  );
}



export default Reducer;