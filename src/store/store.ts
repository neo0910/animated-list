import { configureStore } from "@reduxjs/toolkit"
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useDispatch, useSelector } from "react-redux"

import items from "./slices/itemsSlice"

const store = configureStore({
  reducer: { items },
})

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store
