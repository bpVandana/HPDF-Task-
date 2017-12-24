import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

class TrendsCard extends Component{
    render(){
        return(
            <div  >
                <Paper className="trendspapercard" rounded={false} zDepth={0} >
                <div className="trendspapercardinnerdiv">
                    <h5>Trends for you <span className="trendspapercardchangespan">Change</span></h5>
                    <ul className="trendspapercardlist" style={{styleListType: 'none !important'}} >
                        <a href="/"><li>#Hpdf fellowship</li></a>
                        <li>3K Tweets</li>
                        <a href="/"><li>#indvssl</li></a>
                        <li>999k Tweets</li>
                        <a href="/"><li>#IPL</li></a>
                        <li>111k Tweets</li>
                        <a href="/"><li>#IIT</li></a>
                        <li>106 Tweets</li>
                       
                    </ul>

                </div>
                </Paper>
            </div>
        );
    }
}
export default TrendsCard ;