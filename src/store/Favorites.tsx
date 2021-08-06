import React, { useState } from 'react';

const initialState = {
  favorites: new Array<string>(),
  setFavorites: (favs: Array<string>): void => {}
}
const FavoritesContext = React.createContext(initialState);

function FavoritesProvider (props) {
  const [favorites, setFavorites] = useState(new Array<string>())

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesProvider }