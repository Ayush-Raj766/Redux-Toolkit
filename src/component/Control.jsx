import React from 'react'
import { useRef } from 'react';
import { useDispatch } from 'react-redux'
import { counterAction, privacyAction } from '../store';

export default function () {
    const dispatch =useDispatch();
    const inputelement = useRef();
    const handleIncrement =()=>{
       dispatch (counterAction.increment());
    }
    const handleDecrement =()=>{
        dispatch(counterAction.decrement());
    }
    const handleAdd =()=>{
        dispatch(counterAction.add({num:inputelement.current.value}))
        inputelement.current.value="";
    }
    const handleSubstract =()=>{
      dispatch(counterAction.substract({num:inputelement.current.value}))
      inputelement.current.value=""
    }
    const handleprivate =()=>{
        dispatch(privacyAction.privacy());
    }
  return (
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-success" onClick={handleIncrement}>+1</button>
      <button type="button" className="btn btn-danger" onClick={handleDecrement}>-1</button>
      <button type="button" className="btn btn-warning" onClick={handleprivate}>Private</button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center gapup">
        <input className='input-width' type="text" placeholder='Enter Number' ref={inputelement}/>
        <button type="button" className="btn btn-info" onClick={handleAdd}>Add</button>
        <button type="button" className="btn btn-warning" onClick={handleSubstract}>Substract</button>
      </div>
    </div>
  )
}
