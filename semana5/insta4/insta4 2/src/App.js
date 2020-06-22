import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/51/50'}
          fotoPost={'https://picsum.photos/203/150'}
        />

        <Post
          nomeUsuario={'Felipe'}
          fotoUsuario={'https://picsum.photos/52/50'}
          fotoPost={'https://picsum.photos/202/150'}
        />

        <Post
          nomeUsuario={'Pedro'}
          fotoUsuario={'https://picsum.photos/53/50'}
          fotoPost={'https://picsum.photos/201/150'}
        />
      </div>
    );
  }
}

export default App;
