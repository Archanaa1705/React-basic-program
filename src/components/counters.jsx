import React, { Component } from 'react';
import Counter from './counter';
class Counters extends React.Component {


    state={

        counters:[ 
            {id:1, value:0},
            {id:2, value:4},
            {id:3, value:7}]

    };


    constructor(){
        super();
        console.log("Parent- Constructor");
    }


        componentDidMount(){
            console.log("Parent- Mounted");
    // ajax call happens here
        }

    handleIncrement=counter=>{
        const counters=[...this.state.counters];
        const index=counters.indexOf(counter);
        counters[index]={...counter};
        counters[index].value++
        this.setState({counters});




    };

    handleReset=()=>{
        const counters=this.state.counters.map(
            c=>{c.value=0;
            return c;
            });
            this.setState({counters});

    };

    handleDelete=(counterID)=>{
                console.log("Event handler called", counterID);
                const counters=this.state.counters.filter(c=> c.id!==counterID);
                this.setState({counters});
                
    };

    render() { 

         console.log("Parent- Constructor");
        return (
        <div>
            <button onclick={this.handleReset}className="btn btn-primary btn-sm m-4">Reset</button>
        {this.state.counters.map(counter =>(
        <Counter key={counter.id} 
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrement}
        
        //  value={counter.value} id={counter.id} > 
        counter={counter}
                >

            {/* <h1>Counter #{counter.id}</h1> */}
        </Counter>
        ) )}

        </div>
        ); 
    }
}
 
export default Counters ;