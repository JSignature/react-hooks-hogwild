import React from 'react'
import Tile from './Tile'

const Tiles = hogs => {
  return (
    <div>
      {hogs.map(hog => (
        <Tile key={hog.id} name={hog.name} iamge={hog.image} />
      ))}
    </div>
  )
}

export default Tiles
