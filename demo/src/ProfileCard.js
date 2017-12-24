import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';

class ProfileCard extends React.Component{
render(){
        return(
            <div className="profilepapercarddiv">
                <Paper  rounded={false} zDepth={0} >
                    <Paper className="profilepapercardupper" rounded={false} zDepth={0} >
                       <Avatar> V</Avatar>
                       <p> MyName</p>
                       
                          
        
                    </Paper>

                    </Paper>
                    <Divider />
                 
    

                    </div>
                    );

}
}

export default ProfileCard;