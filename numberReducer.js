const initialState={
    num1:10,
    num2:100,
    res:0
};

import React from 'react'

const numberReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'add':
            return{
                ...state,
                res: state.num1+state.num2
            };
        
        case 'sub':
            return{
                ...state,
                res: state.num2-state.num1
            };
           
        case 'mul':
            return{
                ...state,
                res: state.num1*state.num2
            };
            
        case "div":
            return{
                ...state,
                res: state.num2/state.num1
            }   
            
        default:
            return state;    
    }
}

export default numberReducer;
