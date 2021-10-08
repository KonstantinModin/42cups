import items from '../api/items.json';
import { createSlice } from '@reduxjs/toolkit'

const itemSlice = createSlice({
  name: 'items',
  initialState: {
    items,
    sortedItems: items,
    sum: 0,
    numberOfProducts: 0
  },
  reducers: {
    increment: (state, action) => {
      const itemId = action.payload
      const item = state.items.find(({ id }) => id === itemId)
      if (item.number < 10) {
        item.number += 1
      }
      state.sum = 0
      state.numberOfProducts = 0
      state.items.map((item) => (
        state.numberOfProducts += item.number
      ))
      state.items.map((item) => (
        state.sum += item.price * item.number
      ))
    },
    decrement: (state, action) => {
      const itemId = action.payload
      const item = state.items.find(({ id }) => id === itemId)
      if (item.number > 0) {
        item.number -= 1
      }
      state.sum = 0
      state.numberOfProducts = 0
      state.items.map((item) => (
        state.numberOfProducts += item.number
      ))
      state.items.map((item) => (
        state.sum += item.price * item.number
      ))
    },
    deleteItem: (state, action) => {
      const itemId = action.payload
      const item = state.items.find(({ id }) => id === itemId)
      state.items = state.items.filter(({ id }) => id !== item.id)
    },
    sortByCountry: (state, action) => {
      const itemCountryName = action.payload
      state.sortedItems = state.items.filter((item) => (
        item.country.find(countryItem => countryItem === itemCountryName)
      ))
    }
  }
})

export const { increment, decrement, deleteItem, sortByCountry } = itemSlice.actions

export default itemSlice.reducer