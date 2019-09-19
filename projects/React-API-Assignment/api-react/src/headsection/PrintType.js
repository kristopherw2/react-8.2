import React, {Component} from 'react'

class PrintType extends Component {
    render() {
    return (
        <>
            <label htmlFor="print-drop-down" style={{margin:'3px'}}>Print Type:</label>
            <select id='print-drop-down'style={{margin:'3px'}}>
                <option value="test1"> Test1</option>
                <option value="test2"> Test2</option>
                <option value="test3"> Test3</option>
                <option value="test4"> Test4</option>
            </select>
        </>
    )
   }
}

export default PrintType