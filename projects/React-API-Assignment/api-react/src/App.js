import React, {Component} from 'react';
import './App.css';
import HeadTitle from './headsection/HeadTitle'
import ResultsList from './ResultsList/ResultsList'

class App extends Component {
  
  render (){
      return(
      <div className='app'>
        <HeadTitle />
        <ResultsList />
      </div>
        
  )}
}
export default App;
