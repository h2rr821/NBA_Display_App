import React from 'react'
import  { PROFILE_PIC_URL_PREFIX, TEAM_PIC_URL_PREFIX } from '../constants';
export class Profile extends React.Component{


    render(){

        const {

            teamCity,
            teamAbbreviation,
            teamName,
            playerName,
            pts,         //point
            ast,         //assists
            birthdate,   
            reb,         //Rebounds
            height,
            weight,
            playerId,


        } = this.props.playerInfo

        console.log("Profile==",this.props.playerInfo);

        //get ages
        let birth = new Date(birthdate);
        let now = new Date().getFullYear();
        let age = parseInt(now) - parseInt(birth.getFullYear());
      

        return(

            <div className="profile">
                <div className="profile-entry player-name">
                    {`${playerName}`}
                </div>
                <img
                   className="profile-pic"
                   src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
                   alt="Profile"
                />
                <div className="profile-entry">
                    <div className="profile-entry-left">Team: </div>
                    <div className="profile-entry-right">{`${teamName} (${teamCity})`}</div>
                </div>
                <img
                   className="team-logo"
                   src={`${TEAM_PIC_URL_PREFIX}/${teamAbbreviation}_logo.svg`}
                   alt="Team"
                />
                <div className="profile-entry">
                    <div className="profile-entry-left">Age:</div>
                    <div className="profile-entry-right">{`${age}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">Point:</div>
                    <div className="profile-entry-right">{`${pts}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">Assists:</div>
                    <div className="profile-entry-right">{`${ast}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">Rebounds:</div>
                    <div className="profile-entry-right">{`${reb}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">Height:</div>
                    <div className="profile-entry-right">{`${height}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">Weight:</div>
                    <div className="profile-entry-right">{`${weight} lbs`}</div>
                </div>



            </div>


        )



    }


}