import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
//import Paper from 'material-ui/Paper';

class ProfileCardDetails extends Component{
    render(){
        return(
            <div>
            <Paper>
                <div >
                    <ul className="profilepapercardtaglist" >
                        <li>Tweets</li>
                        <li>Following</li>
                        <li>Followers</li>
                    </ul>
               
                  
                    <ul className="profilepapercardcountlist" >
                        <li>10</li>
                        <li>101</li>
                        <li>102</li>
                    </ul>

                </div>
                </Paper>
                
            </div>
        );
    }
}
export default ProfileCardDetails