import React, { useContext } from 'react';
import { Text, View } from 'react-native';

import { FavoritesContext } from '../../store/Favorites';

import styles from './index.style';

export default function ItemFavorite(props) {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const handleFavorite = () => {
    const index = favorites.indexOf(props.id)
    const _favorites = [...favorites]
    if (index === -1) {
      _favorites.push(props.id)
    } else {
      _favorites.slice(index, 1)
    }
    setFavorites(_favorites)
  }

  return (
    <View style={{ ...styles["item-wrap"], ...props.style }}>
      <Text onPress={handleFavorite}>
        {`${favorites.indexOf(props.id) != -1 && "\u2605 Unlike" || "\u2606 Like"}`}
      </Text>
    </View>
  )
}