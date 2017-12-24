import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
class SmallLinks extends Component{
    render(){
        return(
            <div >
            <Paper>
                <div id="twthelplinks">
                    &copy; 2017 Twitter <a href="/">About</a> <br/><a href="/">Help Center</a> <a href="/">Terms</a> <br/><a href="/">Privacy policy</a>
                    &nbsp;<a href="/">Cookies</a> <a href="/">Ads info</a> <a href="/">Brand</a> <a href="/">Blog</a> <a href="/">Status</a> 
                    &nbsp;<a href="/">Apps</a> <a href="/">Jobs</a> <a href="/">Marketing</a> <a href="/">Business</a> <a href="/">Developers</a>
                </div>
            </Paper>
            </div>
        );
    }
}

export default SmallLinks