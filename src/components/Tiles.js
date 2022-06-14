import { React, useState } from 'react'
import Tile from './Tile'

const Tiles = ({ hogs }) => {
  const [filteredHogs, setFilteredHogs] = useState({ hogs })
  const [checked, setChecked] = useState(false)
  // console.log(checked)

  if (checked) {
    const greasedHogs = filteredHogs.hogs.filter(hog => hog.greased)
    setFilteredHogs(greasedHogs)
    console.log(greasedHogs)
  } else {
    // setFilteredHogs(hogs)
    console.log('unchecked')
  }

  return (
    <div>
      <label htmlFor="Greased">Click here to show greased pigs</label>
      <input
        onClick={() => setChecked(!checked)}
        type="checkbox"
        name="Greased"
        id=""
        checked={checked}
      />

      {filteredHogs.hogs.map(hog => (
        <Tile key={hog.name} hog={hog} />
      ))}
    </div>
  )
}

export default Tiles
