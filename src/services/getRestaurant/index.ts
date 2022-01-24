import { withKey } from "../axios"

const GET_RESTAURANT = 'https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants/'

export async function getRestaurant(id: number) {
  try {
    const { data } = await withKey.get(`${GET_RESTAURANT}${id}`)
    return data.data
  } catch (error) {
    console.log(error)
  }
}