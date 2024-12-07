
import React, { useEffect, useState } from 'react'

const Item = ({getData}) => {

    const [items, setItems] = useState([])
    useEffect( () => {
        let data = getData();
        console.log("j,habs,a")
        setItems(data);
    },[getData])
    
  return (
    <ul>
        {items.map((el, i) => {
            return <li key={i}>{el}</li>
        })}
    </ul>
  )
}

export default Item