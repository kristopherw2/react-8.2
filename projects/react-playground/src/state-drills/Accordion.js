import React from 'react'

class Accordion extends React.Component {
 static defaultProps = {sections: []}

    state = {
        currentTabIndex: null,
 }

    handleButtonClick = (index) => {
        this.setState({currentTabIndex: index})
    }


    renderButtons(section, idx, currentTabIndex) {
        return (
            <li className='Accordion_item' key={idx}>
                <button type='button'
                onClick={() => this.handleButtonClick(idx)}>
                    {section.title}
                </button>
                {(currentTabIndex === idx) && <p>{section.content}</p>}
            </li>
        )
}
   
    render() {
        const {currentTabIndex} = this.state
        const {sections} = this.props
        return (            
                <ul>
                    {sections.map((section,idx) =>
                        this.renderButtons(section, idx, currentTabIndex)
                 )}
                </ul>
        )
    }
}

export default Accordion