import React from 'react';

const App = ({ children }) => (
  <div className="App">
    {children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.any.isRequired,
}

export default App;
