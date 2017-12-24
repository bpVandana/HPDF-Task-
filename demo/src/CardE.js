import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardMedia,CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';

class CardE extends React.Component{
	constructor(props) 
{
        super(props);
         this.state={
            
            minHeight:"0px",
            tweetOptions:"none",
            title:"tweet1",
                   };
        
}
	render(){
		

		return(<div>
			<Card >
			<CardHeader
      title={this.state.title} 
      subtitle="Subtitle"
      actAsExpander={true}
      showExpandableButton={true}
       avatar="images/128.jpg"

    />
    <List expandable={true} className="tweetdropmenu"  >
            <ListItem primaryText="Share via Direct Message" />
            <ListItem primaryText="Copy Link to Tweet" />
            <ListItem primaryText="Embed Tweet" />
            <ListItem  primaryText="Pin to your profile page" />
            <ListItem  primaryText="Delete Tweet" />
            <hr/>
            <ListItem  primaryText="Add to new Moment" />
            </List>
    <CardMedia
     
    >
      <img src="abc.jpg" alt="missing image" />
    </CardMedia>
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    
    <CardActions>
      <FlatButton label="Share" />
      <FlatButton label="Comment" />
       <FlatButton label="Like" />
    </CardActions>
		
			</Card>
			</div>
			);
	}
}
export default CardE;