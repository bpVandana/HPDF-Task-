import React, { Component } from 'react';

import CardE from './CardE';
import Card2 from './CardE';
import ProfileCard from './ProfileCard';
import TrendsCard from './TrendsCard';
import SmallLinks from './SmallLinks'
import NavBar from './NavBar'
import ProfileCardDetails from './ProfileCardDetails'
import TweetBar from './TweetBar'
import SuggestionsCard from './SuggestionsCard'

export class AadharPage extends Component{
    render(){
        return(
            <div>
                <NavBar plc="aadhar"/>
                
        <TrendsCard divclass="searchtrendsdiv"/>
                <SuggestionsCard classname="searchpgwhotoflw" />
                <SmallLinks class="searchpgtwtlinks"/>
                
            </div>
        );
    }
}