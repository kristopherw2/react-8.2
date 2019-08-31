import React from 'react'

class RouletteGun extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }

    static defaultProps = {
        bulletInChamber: 8
    }



    handleButtonClicks =  () => {
        this.setState({spinningTheChamber: true});
        
        this.timeout = setTimeout(() => {
            const randoNumber = Math.ceil(Math.random() * 8)
            //this.defaultProps = {bulletInChamber: randoNumber }
            this.setState({chamber: randoNumber }) 
            this.setState({spinningTheChamber: false});
        }, 2000);
    }

    componentWillUnmount () {
        clearTimeout(this.timeout)
    }


    renderDisplay () {
        const {chamber, spinningTheChamber} = this.state
        const {bulletInChamber} = this.props
        if(spinningTheChamber === true) {
             return 'spinning the chamber and pulling the trigger!'
        } else if(chamber === bulletInChamber){
             return 'BANG!!'
        } else {
            return "You're safe!"
        }
    }
 

    
    render () {
        return (
            <div>
                <p>{this.renderDisplay()}</p>
                <button onClick={() => this.handleButtonClicks()}>Pull the trigger!</button>
            </div>
        )
    }
}


export default RouletteGun;