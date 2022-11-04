import React from 'react'
import style from './Pagination.module.css'


const Pagination = ({games,gamePerpage, paginate, loading}) => {
    const page = []
    for (let i = 1; i < Math.ceil(games/gamePerpage); i++) {
        page.push(i)
    }
  return (
    <nav >
        <ul  className={style.container_ul}>
            {
                loading? null:
       page.map(item => (
                    <li  key={item} className={style.numbers}>
                        <p onClick={() => paginate(item)} >{item}</p>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Pagination