import { Actions } from "./features/actions/Actions"
import { Items } from "./features/items/Items"
import styles from "./styles.module.css"

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <Actions />
      <Items />
    </div>
  )
}
