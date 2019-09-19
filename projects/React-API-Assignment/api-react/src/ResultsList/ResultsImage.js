import React, {Component} from 'react'
import seal from '../Images/seal.png'

class ResultsImage extends Component {
    render () {
        return (
            <>
            <img style={{float: 'left', margin:'5px'}}  src={seal} alt="DA SEAL"/>
            </>
        )
    }
}

export default ResultsImage