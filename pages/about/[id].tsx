import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Restaurant } from "../../src/models/Restaurant"
import { getRestaurant } from "../../src/services/getRestaurant"
import { Header } from './components/Header/Header'

const About = () => {
  const router = useRouter()

  const [restaurant, setRestaurant] = useState<Restaurant>()

  async function onGetRestaurant() {
    const data = await getRestaurant(Number(router.query.id))
    setRestaurant(data)
  }

  useEffect(() => {
    onGetRestaurant()
  }, [])

  return (
    <>
      <Header />
      <h1>{restaurant?.name}</h1>
    </>
  )
}

export default About