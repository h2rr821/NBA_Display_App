import React from 'react';
import PropTypes from 'prop-types';
import nba from 'nba';
import * as d3 from 'd3';
import { hexbin } from 'd3-hexbin';
import { court, shots } from 'd3-shotchart';

window.d3_hexbin = {hexbin : hexbin}; // workaround library problem

export class ShotChart extends React.Component{

    static propTypes = {

        playerId: PropTypes.number.isRequired,
        minCount: PropTypes.number.isRequired,
        chartType: PropTypes.string.isRequired,
        displayToolTips: PropTypes.bool.isRequired
 
    }
 
    
    //componentDidMount(){
    componentDidUpdate(){
        
        nba.stats.shots({

            PlayerID:this.props.playerId,
            Season: "2017-18"

        }).then((response)=>{

            console.log("res: ",response);
            //get finals shots
            const final_shots = response.shot_Chart_Detail.map(shot => ({
                x: (shot.locX + 250) / 10,
                y: (shot.locY + 50) / 10,
                action_type: shot.actionType,
                shot_distance: shot.shotDistance,
                shot_made_flag: shot.shotMadeFlag,
            }));
 

            //call d3
            const courtSelection = d3.select("#shot-chart");
            courtSelection.html('');
            const chart_court = court().width(620);
            const chart_shots = shots().shotRenderThreshold(this.props.minCount)
                                        .displayToolTips(this.props.displayToolTips)
                                        .displayType(this.props.chartType);
            courtSelection.call(chart_court);
            courtSelection.datum(final_shots).call(chart_shots); 
     

        });


    }

    render(){

        return(

            <div id="shot-chart"></div>


        )


    }



}