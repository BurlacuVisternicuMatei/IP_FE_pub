import React from 'react';
import '../../styles/pages.css'

export default function Profile() {
  return (
    <div className="container"> 
    <header></header> 
        <div className="sidebar">
        <button className="btn" >
           <span>Home</span>
        </button>
        <button className="btn" >
            <span>Settings</span>
        </button>
        <button className="btn" >
            <span>User</span>
        </button>
        </div> 
      <main>
      <div className="row">
        <div className="left col-lg-4">
          <div className="photo-left">
            <img className="photo" src="https://th.bing.com/th/id/OIP.arDu__RxSSyrrV95y7ymEgHaHv?rs=1&pid=ImgDetMain"/>
            <div className="active"></div> 
          </div>
        </div>
        <div className="right col-lg-8">
          <ul className="nav">
            <li>Posts</li>
          </ul>
            <div className="row gallery">
              <div className="col-md-4">
                 <img src="https://images.pexels.com/photos/1036371/pexels-photo-1036371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                 <button className="btn edit">Edit</button>
              </div>
              <div className="col-md-4">
                <img src="https://images.pexels.com/photos/861034/pexels-photo-861034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                <button className="btn edit">Edit</button>
              </div>
              <div className="col-md-4">
                 <img src="https://images.pexels.com/photos/113338/pexels-photo-113338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                 <button className="btn edit">Edit</button>
              </div>
              <div className="col-md-4">
                 <img src="https://images.pexels.com/photos/5049/forest-trees-fog-foggy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                 <button className="btn edit">Edit</button>
              </div>
              <div className="col-md-4">
                <img src="https://images.pexels.com/photos/428431/pexels-photo-428431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                <button className="btn edit">Edit</button>
              </div>
              <div className="col-md-4">
                <img src="https://images.pexels.com/photos/50859/pexels-photo-50859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                <button className="btn edit">Edit</button>
              </div>
            </div>
          </div>
          </div>
          </main>
    </div>
  );
}
