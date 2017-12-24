import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import 'font-awesome/css/font-awesome.min.css'
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

class NavBar extends React.Component{
	constructor(props){
        super(props);
        
    }



render(){
        return(
           <div className="navbarleftdiv" >
            
  <div>
    <span><i class="fa fa-home"></i><FlatButton label="Home" primary={true} /></span>
    <FlatButton label="Messages" primary={true} />
    <FlatButton label="Moments" primary={true}  />
    <span style={{padding:10}}>
    <input placeholder="Search Twitter"    onKeyPress={this.handleKeyPress}/></span>
  <span>  <i class="fa fa-twitter fa 5x"></i> </span>
    </div>
               
           </div>
        );
    }
}

export default NavBar;