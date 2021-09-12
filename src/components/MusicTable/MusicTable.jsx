import React from 'react';
import './MusicTable.css';

const MusicTable = (props) => {

return <div className="app-container">

<h2>Music Table</h2>
<hr/><table>
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
        {props.musicList.map((musicList)=> (             
         <tr>
            <td>{musicList.title}</td>
            <td>{musicList.artist}</td>
            <td>{musicList.album}</td>
            <td>{musicList.release_date}</td>
            <td>{musicList.genre}</td>
         </tr>
    ))}
    </tbody>
  </table>
</div>
       
    }             
 
export default MusicTable;