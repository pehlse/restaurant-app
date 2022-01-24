import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Restaurant } from "../../src/models/Restaurant"
import { getRestaurant } from "../../src/services/getRestaurant"
import { Header } from './components/Header/Header'
import { AboutRestaurant } from './components/AboutRestaurant/AboutRestaurant'

const About = () => {
  const router = useRouter()

  const [restaurant, setRestaurant] = useState<Restaurant>()

  async function onGetRestaurant() {
    const data = await getRestaurant(Number(router.query.id))
    console.log(data)
    setRestaurant(data)
  }

  useEffect(() => {
    onGetRestaurant()
  }, [])

  return (
    <>
      <Header restaurant={restaurant} />
      <AboutRestaurant restaurant={restaurant}/>
    </>
  )
}

export default About