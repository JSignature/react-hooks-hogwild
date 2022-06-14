import { React, useState } from 'react'
import Tile from './Tile'

const Tiles = ({ hogs }) => {
  const [filteredHogs, setFilteredHogs] = useState(hogs)

  const [checked, setChecked] = useState(false)
  const name = ''
  const weight = ''
  const [sortType, setSortType] = useState(name)

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
      <form>
        <label htmlFor="Name">Sort by name </label>
        <input type="radio" name="Name" id="" value={name} checked />
        <label htmlFor="Weight">Sort by weight</label>
        <input type="radio" name="Weight" id="" value={weight} />
      </form>
      <br />
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
