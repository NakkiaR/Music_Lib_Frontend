import React, { Component } from 'react';
// import './App.css';
// import DisplayMusic from './DisplayMusic/DisplayMusic';
import MusicForm from './MusicForm/MusicForm';
import axios from 'axios';
import MusicTable from './MusicTable/MusicTable';
// import ReactTable from 'react-table';

class App extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      music: [
        // 'abc',
        // 'def',
        // 'ghi',
      ],
         
      musicFromApi: [
        {
          // title: '',
          // artist: '',
          // album: '',
          // release_date: '',
          // genre: '',
        }
      ]
     }
  }
  
componentDidMount() {
  this.getMyMusic();
}

async getMyMusic() {
  let response = await axios.get('http://127.0.0.1:8000/music/');
  //console.log(response.data[2].artist);
  this.setState({
    musicFromApi: response.data
  })
}

async postMyMusic() {
  let response = await axios.post('http://127.0.0.1:8000/music/');
  //console.log(response.data[2].artist);
  this.setState({
    addMusicToApi: response.data
  })
}


// async updateMyMusic() {
//   let response = await axios.put('http://127.0.0.1:8000/music/');
//   //console.log(response.data[2].artist);
//   this.setState({
//     musicFromApi: response.data
//   })
// }

// addMusicToMusic = (musicToAdd) => {
//   let tempMusic = this.state.music;
//   tempMusic.push(musicToAdd);
//   this.setState({
//     music: tempMusic // place into state 
//   });
// }


  render() { 
    return ( 
     <React.Fragment>
       {/* <DisplayMusic myMus={this.state.music} />  */}
       <MusicForm addNewMusic={this.addMusicToMusic} />
       <h2>Music From  API</h2>
       <hr/>
       {this.state.musicFromApi.map((music) => {
         return <h4>{music.artist}</h4>
       })}
        <MusicTable musicList={this.state.musicFromApi}/>
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
