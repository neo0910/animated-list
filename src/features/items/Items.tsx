import { useAppSelector } from "../../store/store"

import { Item } from "./components/Item/Item"

import styles from "./styles.module.css"

export const Items = () => {
  const items = useAppSelector(state => state.items)

  return (
    <div className={styles.container}>
      {items.map(({ color, id, removed }, i) => (
        <Item color={color} key={id} removed={removed} />
      ))}
    </div>
  )
}
