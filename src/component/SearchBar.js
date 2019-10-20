import React, { Component } from 'react';
import { Icon, Button, Input, AutoComplete } from 'antd';
import { PROFILE_PIC_URL_PREFIX } from '../constants';
import nba from 'nba';



export class SearchBar extends Component {
    
    state = {
        dataSource: [],
      };
    

      onSelect=(playerName)=>{

        console.log('onSelect',playerName);
        this.props.loadPlayerInfo(playerName);

      }

      handleSearch = value => {

        //const players = nba.searchPlayers(value);
        //console.log(players);
        this.setState({
          dataSource: value ? nba.searchPlayers(value).map(({fullName,playerId})=>
            <AutoComplete.Option key={playerId} value={fullName}>
                <img
                    className="player-option-pic"
                    src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
                    alt="Profile"
                />
                <span className="player-option-label">{fullName}</span>
            </AutoComplete.Option>
         ) : [],
        });
      };
    
      render() {

        const { dataSource } = this.state;
        return (
          
            <AutoComplete
              className="search-bar"
              size="large"
              dataSource={this.state.dataSource}
              onSelect={this.onSelect}
              onSearch={this.handleSearch}
              placeholder="Search NBA player"
              optionLabelProp="value"
              
            >
              <Input
                suffix={
                
                    <Button
                        
                        style={{ marginRight: -12 }}
                        size="large"
                        type="primary"
                    >
                        <Icon type="search" />
                    </Button>
                 
                }
              />
            </AutoComplete>
          
        );
      }
}
