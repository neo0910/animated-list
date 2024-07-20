import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

import { getRandomColor } from "../utils/getRandomColor"

export type Item = {
  color: string
  id: string
  removed: boolean
}

const itemsSlice = createSlice({
  name: "items",
  initialState: [] as Item[],
  reducers: {
    itemAdded(state) {
      const newItem = {
        color: getRandomColor(),
        id: uuidv4(),
        removed: false,
      }

      state.unshift(newItem)
    },
    markItemAsRemoved(state) {
      const candidate = state.at(-1)

      if (!candidate) return

      candidate.removed = true
    },
    itemRemoved(state) {
      state.pop()
    },
  },
})

export const { itemAdded, itemRemoved, markItemAsRemoved } = itemsSlice.actions
export default itemsSlice.reducer
