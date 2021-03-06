import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import Counter from './components/counter';
import React, {Component} from 'react';

class App extends Component {
  state={

    counters:[ 
        {id:1, value:0},
        {id:2, value:4},
        {id:3, value:7}]

};

handleIncrement=(counter)=>{
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

  return (
    <React.Fragment>
      <NavBar/>
      <main className="container">
        <Counters 
        counters={this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete}
        />
      </main>
      </React.Fragment>
  );
}
}
export default App;
