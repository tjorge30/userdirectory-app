import React, { Component } from 'react';
import Nav from './Nav';
import IndexCard from './IndexCard';
import data from '../data';

export default class Directory extends Component {
    constructor() {
        super();
        this.state = { 
            data: data,
            index: 0,
         }

        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
    }

    increase(){
        if(this.state.index < this.state.data.length - 1){
            this.setState({ index: this.state.index + 1 })
        }
    }
    
    decrease(){
        if(this.state.index > 0){
            this.setState({ index: this.state.index - 1 })
        }
    }
    render() { 
        return ( 
            <div className="container">
                <IndexCard data={this.state.data} index={this.state.index}/>
                <Nav increase={this.increase} decrease={this.decrease}/>
            </div>
         );
    }
}