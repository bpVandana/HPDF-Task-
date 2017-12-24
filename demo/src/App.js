import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import Divider from 'material-ui/Divider';
import CardE from './CardE';
import Card2 from './CardE';
import ProfileCard from './ProfileCard';
import TrendsCard from './TrendsCard';
import SmallLinks from './SmallLinks'
import NavBar from './NavBar'
import ProfileCardDetails from './ProfileCardDetails'
import TweetBar from './TweetBar'
import SuggestionsCard from './SuggestionsCard'
const Home = () => (
  <MuiThemeProvider>
  <NavBar />
  <div>
   <ProfileCard />
<ProfileCardDetails/>
   </div>
   <div>
    <TweetBar/>
   
  
   </div >
  <div><SmallLinks/></div>
   <div>
    <TrendsCard />
    </div>
    <div><SuggestionsCard/></div>

  </MuiThemeProvider>
);
export default Home