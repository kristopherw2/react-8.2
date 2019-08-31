import React from 'react'

class Helloworld extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            who: 'World!',
        }
    }

    render () {
       return <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={() => this.setState({who: 'friend!'})}>Friend</button>
                <button onClick={() => this.setState({who: 'react!'})}>React</button>
                <button onClick={() => this.setState({who: 'world!'})}>World</button>
              </div>
    }
}


export default Helloworld;