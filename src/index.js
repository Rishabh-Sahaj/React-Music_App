import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const InitialStateTree = {
    albums: [
          { 
            artist: 'Justin Bieber',
            name:'Purpose', 
            songs: ['Purpose', 'Sorry', 'What do you mean?', 'I\'ll show you', 'Love yourself', 'Where are U Now'] 
          }, 
          { 
            artist: 'Ed Sheeran',
            name:'Divide', 
            songs: ['Shape of you', 'Perfect', 'Galway girl', 'Happier', ] 
          }, 
          { 
            artist: 'Ariana Grande',
            name:'Sweetener', 
            songs: ['God is a woman', 'No tears left to cry'] 
          }
    ]
}

const reducer = (state = {}, action) => {
    switch(action.type) {
        default: 
          return state;
    }
}

const store = createStore(reducer,InitialStateTree);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));