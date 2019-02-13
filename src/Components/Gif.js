import React from 'react';

const Gif = props => (
  <li className="gif-wrap">
    <img alt="" src={props.img}/>
  </li>
);

export default Gif;