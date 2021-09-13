import React, {Component} from 'react';
import "./MusicTable.css";
import axios from 'axios';

class MusicTable extends Component {
  constructor(props) {
    super(props);
      }
  

  render() { 
    return (
      <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {console.log("Props: ", this.props.musicList)}
          {this.props.musicList.map((musicItem, index) => {
            return(
              <tr key={index} >
                <td>{musicItem.title}</td>
                <td>{musicItem.artist}</td>
                <td>{musicItem.album}</td>
                <td>{musicItem.release_date}</td>
                <td>{musicItem.genre}</td>
              </tr> 
            )
          })}
        </tbody>
      </table>
    </div>
    );
  }
}
 
export default MusicTable;




