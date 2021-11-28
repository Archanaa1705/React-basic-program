import React, { Component } from 'react';


class Examples extends Component {

    state={
        count:0,
        rate:0

    };


    IncrementClick(){
        let {count}=this.state
        return count===0 ? 0: count;

    };

  

    incrementHandle =()=>{
        this.setState({count:this.state.count+1});

    };

    decrementHandle =()=>{
        
        this.setState({count:this.state.count});
        console.log("print decrement count state",this.state.count);
        let {count}=this.state;
        console.log("print decrement count state",count);
       return count > 0 ?  count-1 : 'Cannot decrement values';
       
        

    }

    render() { 
        return (
            <div>
            <span>{this.IncrementClick()}</span>
            <button onClick={this.incrementHandle}>Click me to add</button>

            <button onClick={this.decrementHandle}>Click me to reduce</button>
            </div>
        );
    }

    
}
 
export default Examples;