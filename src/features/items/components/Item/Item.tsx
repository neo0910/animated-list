import { Transition } from "react-transition-group"

import { TRANSITION_DURATION } from "./constants"
import { usePresenter } from "./logic/usePresenter"
import styles from "./styles.module.css"

export const Item = (props: { color: string; removed: boolean }) => {
  const { inProp, itemRef, itemStyles, onExited } = usePresenter(props)

  return (
    <Transition
      in={inProp}
      nodeRef={itemRef}
      onExited={onExited}
      timeout={TRANSITION_DURATION}
    >
      {state => (
        <div style={itemStyles(state)} className={styles.item} ref={itemRef} />
      )}
    </Transition>
  )
}
