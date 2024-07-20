import { itemAdded, markItemAsRemoved } from "../../store/slices/itemsSlice"
import { useAppDispatch } from "../../store/store"

import styles from "./styles.module.css"

export const Actions = () => {
  const dispatch = useAppDispatch()

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={() => dispatch(itemAdded())}>
        Добавить
      </button>
      <button
        className={styles.button}
        onClick={() => dispatch(markItemAsRemoved())}
      >
        Удалить
      </button>
    </div>
  )
}
