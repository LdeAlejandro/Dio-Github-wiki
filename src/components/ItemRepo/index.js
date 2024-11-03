import React from 'react'
import { ItemContainer } from './styles'

const ItemRepo = ({repo, handleRemoveRepo}) => {

  const handleRemove = ()=>{
    handleRemoveRepo(repo.id);
  }
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target='_blank' rel='noreferrer'>Ver repositorio</a><br/>
      <button className='remove' onClick={handleRemove}>Remover</button>
      <hr/>
    </ItemContainer>
  )
}

export default ItemRepo