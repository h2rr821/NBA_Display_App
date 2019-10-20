import React from 'react';
import nba from 'nba';
import {Profile} from "./Profile";
import {SearchBar} from "./SearchBar";
import { DataViewContainer } from './DataViewContainer';

window.nba=nba;

export class Main extends React.Component{

     state={

         playerInfo:{
             playerId: 201939,
             playerName:'stephen curry'
         }
     }

    componentDidMount() {

        this.loadPlayerInfo(this.state.playerInfo.playerName);
    }


    loadPlayerInfo=(playerName)=>{

        const player=nba.findPlayer(playerName);
        console.log("player", player);

         //get all player info from nba api
         nba.stats.playerInfo({PlayerID: player.playerId}).then(

           
             (info)=>{

                 const playerInfo={

                     ...info.commonPlayerInfo[0],...info.playerHeadlineStats[0]
                 };
                 console.log("Main:==",playerInfo);
                 this.setState({

                     playerInfo
                 });

             }
             

         );





    }

         
    

    render(){


         return(

             <div className="main">
                <SearchBar loadPlayerInfo={this.loadPlayerInfo}/>
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo}/>
                    <DataViewContainer playerId={this.state.playerInfo.playerId}/>
                </div>
             </div>
         )

     }


}
