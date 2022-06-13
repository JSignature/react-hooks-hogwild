import React from 'react'
import Tile from './Tile'

const Tiles = ({ hogs }) => {
  console.log(hogs)
  return (
    <div>
      <h1>Test</h1>
      {hogs.map(hog => (
        <Tile
          key={hog.id}
          name={hog.name}
          image={hog.image}
          specialty={hog.specialty}
          greased
          weight
          medal={'highest medal achieved'}
        />
      ))}
    </div>
  )
}

export default Tiles
