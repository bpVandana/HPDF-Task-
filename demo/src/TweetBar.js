import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Card2 from './Card2';
import CardE from './CardE';


class TweetBar extends Component{
    render(){
        return(
            <div className="timelinetwtbar">
                 <Paper className="timelinesearchbarpaper" rounded={false} zDepth={0} >
                    <Avatar >V</Avatar>
                     
                    <div className="timelinesearchbardiv" >
                        <input className="timelinesearchbar" placeholder="What's happening?" />
                    </div>
                </Paper>
                <Card2/>
                <CardE/>
            </div>
        );
    }
}
export default TweetBar