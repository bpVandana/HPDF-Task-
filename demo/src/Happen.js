import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import {styles,tweetdata} from './constdata.js';

class Tweetbar extends Component{
    render(){
        return(
            <div className="timelinetwtbar">
                 <Paper className="timelinesearchbarpaper" rounded={false} zDepth={0} >
                    <Avatar className="timelinesearchbaravatar"
                     src="https://pbs.twimg.com/profile_images/932240672442130432/Bg1tx9-7_bigger.jpg" />

                    <div className="timelinesearchbardiv" >
                        <input className="timelinesearchbar" placeholder="What's happening?" />
                    </div>
                </Paper>
            </div>
        );
    }
}
export default Tweetbar