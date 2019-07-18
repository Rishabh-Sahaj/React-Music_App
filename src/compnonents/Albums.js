import React from 'react'

const Albums = (props) => {
    const {albums} = props; //destructuring
    const albumsList = albums.map( (album,index) => <li key={index}>{album.name}</li>);
    return (
        <div className="albums">
          <ul>
            {albumsList}
          </ul>
        </div>
    );
}

export default Albums;
