import React, { Component } from 'react';
// import './App.css';
import DisplayMusic from './DisplayMusic/DisplayMusic';
import MusicForm from './MusicForm/MusicForm';

class App extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      music: [
        'ABC',
        'DEF',
        'GHI'
      ]
     }
  }



  render() { 
    return ( 
     <React.Fragment>
       <DisplayMusic myMus={this.state.music} /> 
       <MusicForm />
     </React.Fragment>
     );
  }
} 
export default App;








// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
