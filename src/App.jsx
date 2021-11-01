import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import useFetchActivity from './utils/useFetchActivity.js';

const App = () => {
  const [ data, loading ] = useFetchActivity();
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
      Some activities should be here
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
