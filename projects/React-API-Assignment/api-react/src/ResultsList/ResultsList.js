import React, {Component} from 'react'
import ResultsDescription from './ResultsDescription'
import ResultsImage from './ResultsImage'

class ResultsList extends Component {
    render () {
        return (
            <div style={{border: '1px solid #ccc'}} >
                <ResultsImage />
                <ResultsDescription />
            </div>
        )
    }
}

export default ResultsList