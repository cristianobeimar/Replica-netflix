import React from 'react'

export default function Sesiones({name, url}) {
  return (
    <div>
        <p>{name}</p>
        <img src={url} alt={name} />
    </div>
  )
}
