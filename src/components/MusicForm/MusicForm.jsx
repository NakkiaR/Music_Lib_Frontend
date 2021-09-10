import React, { Component } from 'react';



class MusicForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            musicName: '',

          }
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
          musicName: event.target.value
      });
    }
    
    handleSubmit = (event) => {
      event.preventDefault();
      let tempMusic = this.state.music;
      tempMusic.push(this.state.musicName);
      this.setState({
        music: tempMusic
      });
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit} >
                <label>Music Name</label>
                <input onChange={this.handleChange} value={this.state.musicName}/>
                <button type='submit'>Add Music</button>
             </form>
          );
    }
}
 
export default MusicForm;