// import React, { Component } from 'react';

// class SuperheroCreator extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             superheroId: "",
//             name: "",
//             primaryAbility: "",
//             secondaryAbility: ""
//           }
//     }

//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     } 

//     handleSubmit = (event) => {
//         event.preventDefault();
//         this.props.createNewSuperhero(this.state)
//     }


//     render() { 
//         return (
//             <div className="app-container">
//             <h2>Exercise 5</h2>
//             <hr/>
//             <form onSubmit={this.handleSubmit}>
//                 <label>Superhero ID</label>
//                 <input uniqueId="number" onChange={this.handleChange} value={this.state.superheroId} />
//                 <label>Name</label>
//                 <input name="name" onChange={this.handleChange} value={this.state.name} />
//                 <label>Primary Ability</label>
//                 <input name="name" onChange={this.handleChange} value={this.state.primaryAbility} />
//                 <label>Secondary Ability</label>
//                 <input name="name" onChange={this.handleChange} value={this.state.secondaryAbility} />
//                 <button type="add">Create Superhero</button>
//             </form>
//             </div>
//           );
//     }
// }
 
// export default SuperheroCreator;