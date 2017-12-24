import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
//import {suggest} from './constdata.js';

export const sug={
    u1:"ab",
    u2:"ab",
    u3:"ab",
    u4:"ab",
    u5:"ab"
}

 class SuggestionsItems extends Component{
    render(){
        return(
            <div className="suggestion">
    
                <div id="suggestavatar">
                    <Avatar  src={this.props.src} />
                    <h4 id="suggestionname">u1</h4>
                    <div id="suggesttwthandle">@u2</div>
                </div>
                <button className="suggestfolbtn" >Follow</button>   
                
            </div>
        );
    }
}

 class SuggestionsCard extends Component{
    render(){
        return(
<div style={{marginTop: -350}}>
            <div style={{paddingLeft:1000}} >
                <Paper zDepth={1} >
                    <List>
                        <h3 id="whotofollow">Who to Follow
                            <span id="refreshviewall">
                                <a href="/"><span>Refresh</span></a>
                              
                            </span>
                        </h3>
                        
                        <SuggestionsItems src={sug.u1.avatar} name={sug.u1.name} twthandle={sug.u1.twthandle} />
                    
                        <SuggestionsItems src={sug.u2.avatar} name={sug.u2.name} twthandle={sug.u2.twthandle} />
                        
                        <SuggestionsItems src={sug.u3.avatar} name={sug.u3.name} twthandle={sug.u3.twthandle} />
                       
                        <SuggestionsItems src={sug.u4.avatar} name={sug.u4.name} twthandle={sug.u4.twthandle} />
                        
                        <SuggestionsItems src={sug.u5.avatar} name={sug.u5.name} twthandle={sug.u5.twthandle} />
                    
                        <p id="findpeople"><span><i className="fas fa-users"></i></span><a href="/"> People you may know</a></p>
                        </List>
                </Paper>     
            </div>
            </div>
        );
    }
}
 export default SuggestionsCard