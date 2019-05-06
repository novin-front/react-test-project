import React from 'react';
import Bodyall from './Components/Bodyall'
import {Provider} from 'react-redux';
import {createStore } from 'redux';
import reduser from './reducers/'

const  store = createStore(reduser);
class App extends React.Component{
      
    render(){
        return(
            <Provider store={store}>
            <Bodyall/>
            </Provider>
        )
    }
}
export default App;