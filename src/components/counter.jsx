import { Button } from 'bootstrap'; // real DOM is here, browser DOM
import React, { Component } from 'react';

class Counter extends  Component {

     state={
      
        value:this.props.counter.value,
       
       
        imageURL:'https://picsum.photos/200',
        tags:[]
    }; 


    style={

        fontSize:20,
        fontWeight:"bold" 
    };

   
    tagsRender(){
        if (this.state.tags.length===0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag=><li key={tag}> {tag}</li>)}</ul>

    };


     // super keyword to call the parent class Component

     // constructor method is called when object Counter is created.

     /* constructor(){
        super();
        // for every event handler, call bind method like below
        this.handleIncrement=this.handleIncrement.bind(this);
        console.log("Constructor",this);
        
    }; */


    // Use ES6 arrow function instead of calling a constructor and super method and then binding.

    /* handleIncrement=product=>{
        // it doesnt not read state's value as state's instance is not passed over
        this.setState({count: this.state.count+1});
        console.log("Increment clicked", product);

    } */



        handleIncrement=()=>{
        this.setState({value: this.props.counter.value+1});
            // this.setState({value: this.state.value=0});
            console.log("Increment clicked", this.props.counter.value);
        };
 


   /*  handleIncrementWithParameters= product=>{
            this.setState({count:this.state.count+1});
            console.log("handle Increment With Parameters",product);

    }; */
    render() { 

            console.log('property:',this.props);
        
        return(
        <div> 
                {this.props.children}

            {/* <img src={this.state.imageURL} alt=""/> */}
         

            {/* <span style={this.style} className="badge bg-primary m-2">{this.formatCount()} </span> */}
            <span style={{fontSize:20}} className={this.getBadgeClasses()}>{this.formatCount()} </span>
            <ul>


             
             {/* if statement is true then display a message */}
            {/*  Js engine checks for boolean if true, here length is true and if empty values then its false but we have a string 
             so its set to true. */}


                {/*  {this.state.tags.length===0 &&    'Please create new tags'  }   
                 {this.tagsRender()} */}

                 
                </ul>


              <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn sm">Increment</button> 
            
              {/* to pass arguments as an event 
              If you pass harccoded values, use: handleIncrementWithParameters ({id:1})
              */}
             
             {/* <button onClick={()=>this.handleIncrementWithParameters(product)}></button>  */}
              <button 
              onClick={()=>this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2">Delete</button>
             </div> 
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value}=this.props.counter;
        return value===0 ? 'Zero':value;

    }
}
 
export default Counter;