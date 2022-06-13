import { React, useState } from 'react'

const Tile = ({ hog }) => {
  const [toggle, setToggle] = useState(false)

  console.log(hog['highest medal achieved'])

  return (
    <div onClick={() => setToggle(!toggle)} class="ui card">
      <div class="image">
        <img src={hog.image} />
      </div>
      <div class="content">
        <div class="header">{hog.name}</div>
        {toggle ? (
          <>
            <div class="description">Specialty: {hog.specialty}</div>
            <div class="description">
              Greased: {hog.greased ? 'True' : 'False'}
            </div>
            <div class="description">Weight: {hog.weight}</div>
            <div class="description">
              Medal: {hog['highest medal achieved']}
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default Tile

// need to pass greased (boolean) weight(number) medal (string) to display on card
