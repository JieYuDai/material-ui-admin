import * as contants from './contants'

export const getData = (data) => ({
  type: contants.SET_DATA,
  data
})