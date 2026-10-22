// reducer : function resue 
// complex state management 
// global application : redux

import React, { useReducer } from 'react'
import Headers from '../layout/Comana/Headers';

const initialState = 0

export function reducer(state,action){
    switch (action) {
        case 'increment':
            return state += 1
            break;
        case 'decrement':
            return state -= 1
        case 'zero':
            return state = 0
        default:
            return initialState
            break;
    }
}

function RedData() {

    const [count,dispatch] = useReducer(reducer,initialState)

    return (
    <div>
        <Headers /> 

        <h1>Counter : {count}</h1>
        <button onClick={()=>dispatch('increment')}>Icrement</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('zero ')}>reset</button>
    </div>
  )
}

export default RedData