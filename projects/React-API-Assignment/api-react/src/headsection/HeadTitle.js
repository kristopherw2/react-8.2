import React, {Component} from 'react'
import Search from './Search'

class HeadTitle extends Component {
    render () {
        return (
            <div>
                <h1 style={{backgroundColor: 'black', color: 'white', textAlign: 'center', margin:'0 0 0 0'}}>Google Book Search</h1>
                <Search />
            </div>
        )
    }
}

export default HeadTitle