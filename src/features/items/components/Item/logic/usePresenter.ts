import { useEffect, useRef, useState } from "react"
import type { TransitionStatus } from "react-transition-group"

import { itemRemoved } from "../../../../../store/slices/itemsSlice"
import { useAppDispatch } from "../../../../../store/store"

import { TRANSITION_DURATION } from "../constants"

export const usePresenter = ({
  color,
  removed,
}: {
  color: string
  removed: boolean
}) => {
  const dispatch = useAppDispatch()
  const itemRef = useRef<HTMLDivElement>(null)
  const [inProp, setInProp] = useState(false)

  const transitionedExitPropertyValue = removed ? "20vw" : "-20vw"

  const defaultStyles = {
    transition: `all ${TRANSITION_DURATION}ms ease-in-out`,
    marginLeft: transitionedExitPropertyValue,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { marginLeft: "0", opacity: 1 },
    entered: { marginLeft: "0", opacity: 1 },
    exiting: { marginLeft: transitionedExitPropertyValue, opacity: 0 },
    exited: { marginLeft: transitionedExitPropertyValue, opacity: 0 },
    unmounted: { marginLeft: transitionedExitPropertyValue, opacity: 0 },
  }

  const itemStyles = (state: TransitionStatus) => ({
    backgroundColor: color,
    ...defaultStyles,
    ...transitionStyles[state],
  })

  const onExited = () => dispatch(itemRemoved())

  useEffect(() => {
    setInProp(true)
  }, [])

  useEffect(() => {
    setInProp(!removed)
  }, [removed])

  return { inProp, itemRef, itemStyles, onExited }
}
