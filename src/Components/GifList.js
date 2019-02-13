import React from 'react';
import Gif from './Gif';

const GifList = props => { 

  const results = props.data;
  const gifs = results.map(gif => {
    return <Gif img={gif.images.fixed_height.url} key={gif.id} />
  })
  
  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
}

export default GifList;
