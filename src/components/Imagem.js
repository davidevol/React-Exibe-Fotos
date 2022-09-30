import React from 'react'

const Imagem = ({pic, alt}) => {
  return (
    <div>
        <img src={pic} alt={alt}/>
    </div>
  )
}

export default Imagem