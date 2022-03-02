import React from "react";

class CounterOld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidUpdate(){
    console.log(this.state)
  }

   increase () {

    this.setState({counter: this.state.counter+1})
  }

  decrease () {
    this.setState({counter: this.state.counter-1})
  }


  render() {
    const {counter} = this.state;
    return (
      <>
       <h1>Hello World {counter}</h1>
       <button onClick={ () => this.increase() }>Increate</button>
        <button onClick={ () =>this.decrease() }>decrease</button>
     </>
    );
  }
}

export default CounterOld;