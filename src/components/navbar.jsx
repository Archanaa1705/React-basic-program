import React, { Component } from 'react';


 const NavBar =props=> {
    console.log("NAvbar- Rendered");
        return (
         <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <span className="badge badge-pill badge-secondary"> {props.totalCounters}</span>
  </div>
</nav>
     )


     
 }
  
 export default NavBar;