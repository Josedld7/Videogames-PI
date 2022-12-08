import React from 'react'
import { useState } from 'react'
import { useDispatch,} from "react-redux";
import { getByName } from '../../redux/actions';
import style from './SearchBar.module.css'

const Search = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    
    
    const handleChange =(e)=>{
        e.preventDefault()
        setInput(e.target.value)
        
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(getByName(input))
        setInput('')
        
    }

  return (
    <div >
        <input className={style.input} onChange={(e)=>handleChange(e)}  value={input} type= {"text" } name = "buscar" placeholder="Type here..." autoComplete="off"/>
        <button className={style.btn} onClick={(e) =>handleSubmit(e)} type = {"submit"}>  </button>
    </div>
  )
}

export default Search

//<i class="fa-solid fa-magnifying-glass" ></i>