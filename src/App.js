// import logo from './logo.svg';
// import './App.css';
// import React, { useState } from 'react';
// import ReactDOM from "react-dom";


// const App=()=>{

//   const [users, setUser] = useState([]);

//   const loadUsers= async()=>{
//     // console.log('before');
//     const response = await fetch("https://reqres.in/api/users?page=1");
//     const jsonresponse = await response.json();
//     setUser(jsonresponse);
//   }
//   return (
//     <div className="App">
//       <div class="nav">
//       <h1 class="main">Hello All</h1>
//       <button class="get"onClick={loadUsers}>Get Data</button>
//       </div>
//       <h2>USERS</h2>
//       <div class="cards">
//             {users.map(({id,login,avatar_url,followers_url})=>(
//               <div class="card" key={id}>
//                 <img src={avatar_url}></img>
//                 <h1 class="name"> {login} </h1>
//                 <p class="title">Id: {id}</p>
//                 <a href={followers_url}><button>Contact</button></a>
//                 <br></br>
//               </div>
//             ))}    
//       </div>
//     </div>
//   )
// }

// export default App;

import Users from "./Components/Card";
import './App.css';

import React, { Component } from 'react'
	
class App extends Component {
  constructor(props){
	super(props)
		
	// Set initial state
	this.state = {users_data :[],
                loading : true                
  }
  

	this.updateState = this.updateState.bind(this)
  }
    
  updateState(){
      const link="https://reqres.in/api/users?page=1";
      fetch(link)
      .then(response => response.json())
      .then((users) => {
        
        this.setState({users_data :users.data,
                        loading: false
        })
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }
    
  render(){
    return (<>
      <nav>
          <div className="App">
            <div className="nav">
            <h1>Fetch Users</h1>
            <button onClick={this.updateState}>Get Users</button>
            </div>
          </div>
        </nav>
        <div className="box2">
         <Users loading={this.state.loading} users={this.state.users_data}/>
         </div>
    </>
    )
  }
}
	
export default App;