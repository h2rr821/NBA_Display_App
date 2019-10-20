import React, { Component } from 'react'
import {ShotChart} from "./ShotChart";
import { CountSlider } from './CountSlider';
import { Radio,Switch, Icon,Row,Col } from 'antd';
import _ from 'lodash';

export class DataViewContainer extends Component {
    
    state = {

        minCount:2,
        chartType:'hexbin',    //'hexbin' or 'scatter'
        displayToolTips: true
      };
    
      onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            chartType: e.target.value,
        });
      };

      onCountSliderChange = (minCount) => {
        this.setState({
            minCount          //minCount: minCount
        });
    }
  

      onTooltipChange = (displayToolTips) => {
        console.log(displayToolTips);
        this.setState({
            displayToolTips    //displayToolTips : displayToolTips 
        })
      }
      
    //use of _.debounce  ==>   _.debounce(function, wait, [immediate])
    //Creates and returns a new debounced version of the passed function that will postpone its execution 
    //until after wait milliseconds have elapsed since the last time it was invoked.
    //Basically it throttles calls so if it is called more than once in a short period of time, only one instance will be called.
    render() {

        let visibleStyle=this.state.chartType === 'hexbin' ? {
            visibility: 'visible',
            marginTop: '-30px',

        }:{
            visibility: 'hidden',
            marginTop: '80px',
        }

        //console.log(visibleState);
        return (
            <div className="data-view">
                <ShotChart playerId={this.props.playerId}
                            minCount={this.state.minCount}
                            chartType={this.state.chartType}
                            displayToolTips={this.state.displayToolTips}
                    />

                <div className="data-tools">
                    <CountSlider visible={visibleStyle} 
                                 value={this.state.minCount} 
                                 onChange={_.debounce(this.onCountSliderChange,500)}/>
                    <Row>
                    <Col span={8} offset={7}>
                            <Radio.Group onChange={this.onChange} value={this.state.chartType}>
                                <Radio value="hexbin">Hexbin</Radio>
                                <Radio value="scatter">Scatter</Radio>
                            </Radio.Group>
                        </Col>
                        <Col span={2}>
                            <Switch
                            
                                checkedChildren={<Icon type="check" />}
                                unCheckedChildren={<Icon type="close" />}
                                defaultChecked
                                onChange={this.onTooltipChange}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
