
import React from 'react';
import Main from './componants/Main/index';
import Wrapper from './componants/Wrapper/index';
import Header from './componants/Header/index';
import "./App.css";

function App() {
  return (
    <div className="App">
   <Wrapper>
     <Header/>
     <Main/>
   </Wrapper>
    </div>
  );
}

export default App;