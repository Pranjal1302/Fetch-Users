import React from 'react'

const Users = ({loading,users}) => {
    return loading ? (   
          
        // <section>
        // <div class loader>
        //     <span style="--i:1;"></span>
        //     <span style="--i:2;"></span>
        //     <span style="--i:3;"></span>
        //     <span style="--i:4;"></span>
        //     <span style="--i:5;"></span>
        //     <span style="--i:6;"></span>
        //     <span style="--i:7;"></span>
        //     <span style="--i:8;"></span>
        //     <span style="--i:9;"></span>
        //     <span style="--i:10;"></span>
        //     <span style="--i:11;"></span>
        //     <span style="--i:12;"></span>
        //     <span style="--i:13;"></span>
        //     <span style="--i:14;"></span>
        //     <span style="--i:15;"></span>
        //     <span style="--i:16;"></span>
        //     <span style="--i:17;"></span>
        //     <span style="--i:18;"></span>
        //     <span style="--i:19;"></span>
        //     <span style="--i:20;"></span>
        // </div>
        // </section>
        <div id="loader">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Loading Content..." className="loader"/>
          </div>
        ) : 
        (
          <div id="cards">
          {users.map(user =>
                      <div className="cards">
                        {
                          console.log(user)
                        }
                        <div className="card">
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">Email ID:<br></br>{user.email}</p>
                          <p>ID={user.id}</p> 
                          <button>Contact</button>
                        </div>
                      </div>
            )
          }
          </div>
        )
}

export default Users;