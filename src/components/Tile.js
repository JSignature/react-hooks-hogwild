import { React, useState } from 'react'

const Tile = ({ name, image, specialty, greased, weight, medal }) => {
  const [toggle, setToggle] = useState(false)

  console.log(name)
  console.log(weight)
  console.log(greased)
  return (
    <div onClick={() => setToggle(!toggle)} class="ui card">
      <div class="image">
        <img src={image} />
      </div>
      <div class="content">
        <div class="header">{name}</div>
        {toggle ? (
          <>
            <div class="description">Specialty: {specialty}</div>
            <div class="description">Greased: {greased.value}</div>
            <div class="description">Weight: {weight}</div>
            <div class="description">Medal: {medal}</div>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default Tile
