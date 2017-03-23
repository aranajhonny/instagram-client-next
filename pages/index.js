import React from 'react';
// expose `fetch()` to node
import fetch from 'node-fetch';

export default class Page extends React.Component {
  //explorar https://www.instagram.com/aranajhonny/media/
  static async getInitialProps({ req }) {
    const token = '468776204.2116bbc.88ff7664b1324f04bc190c3f0b495f8b';
    const uid = '468776204';
    const images = await fetch(`https://api.instagram.com/v1/users/${uid}/media/recent/?access_token=${token}`)
      .then( r => r.json() )
      .then( data => {
        return data.data
      });
    return {
      fotos: images,
    };
  }

  render() {
    const { fotos } = this.props
    return (
      <div>
        {
          fotos.map(x => <img src={x.images.thumbnail.url} key={x.id}></img>)
        }
      </div>
      )
  }
}
