import { withKey } from "../axios"

const GET_RESTAURANTS = 'https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants'

export async function getRestaurants(pageIndex: number = 1, pageSize: number = 8, search: string = '') {
  try {
    const { data } = await withKey(`${GET_RESTAURANTS}?page=${pageIndex}&limit=${pageSize}&search=${search}`)
    return data.data
  } catch (error) {
    console.log(error)
  }
}