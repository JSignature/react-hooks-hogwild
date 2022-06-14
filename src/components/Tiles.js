import { React, useState } from 'react'
import Tile from './Tile'

const Tiles = ({ hogs }) => {
  const [filteredHogs, setFilteredHogs] = useState(hogs)
  console.log(filteredHogs)
  const [checked, setChecked] = useState(false)
  // console.log(checked)

  function handleCheck() {
    setChecked(!checked)
    if (!checked) {
      const greasedHogs = filteredHogs.filter(hog => hog.greased)

      setFilteredHogs(greasedHogs)
      console.log('checked' + greasedHogs)
    } else {
      setFilteredHogs(hogs)
      console.log('unchecked')
    }
  }

  return (
    <div>
      <label htmlFor="Greased">Click here to show greased pigs</label>
      <input
        onClick={handleCheck}
        type="checkbox"
        name="Greased"
        id=""
        checked={checked}
      />

      {filteredHogs.map(hog => (
        <Tile key={hog.name} hog={hog} />
      ))}
    </div>
  )
}

export default Tiles
