import React from 'react'
import Tile from './Tile'

const Tiles = ({ hogs }) => {
  console.log(hogs)
  return (
    <div>
      <h1>Test</h1>
      {hogs.map(hog => (
        <Tile hog={hog} />
      ))}
    </div>
  )
}

export default Tiles
