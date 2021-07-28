import React from 'react'
import Band from './Band'

const Bands = (props) => (
  <ul>
    {props.bands.map((band) => (
      <Band band={band} deleteBand={props.deleteBand} key={band.id} />
    ))}
  </ul>
)

export default Bands
