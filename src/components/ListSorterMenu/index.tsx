import React, { useState } from "react"
import { View, Text } from 'react-native';

import style from "./index.style";

type ListSorterMenuProps = {
  orderByRecent: Function,
  orderByOlder: Function
}

export default function ListSorterMenu(props: ListSorterMenuProps) {
  const [visible, toggle] = useState(false)
  const [selected, setSelected] = useState([true, false]);

  const handleSelected = (index: number) => {
    const selection = selected.map(element => element = false)
    selection[index] = true
    setSelected(selection)
  }

  const sorters = [
    { label: "Ascending", callback: props.orderByRecent },
    { label: "Descending", callback: props.orderByOlder },
  ]

  return (
    <View style={style["item-wrap"]}>
      <Text style={style["item-text"]} onPress={() => toggle(!visible)}>
        Sort by
      </Text>
      { visible &&
        <View style={style["menu-option"]}>
          {sorters.map((element, idx) => (
            <View style={style["item-option"]}>
              <Text style={[selected[idx] && style.selected]}
                onPress={() => { handleSelected(idx); element.callback() }}
                key={idx}>
                {element.label}
              </Text>
            </View>
          ))}
        </View>
      }
    </View>
  )
}
