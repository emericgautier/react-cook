import React from "react";

const App = () => {
  return (
    <div className="app-container">
      <h1>React Cooking App</h1>
      <input type="text" placeholder="Tapez le nom d'un aliment" />
      <div className="meals-container"></div>
    </div>
  );
};

export default App;
