import { useState, useEffect } from "react"
import Bubble, { BubbleType } from "./Bubble"

const Home = () => {
  const [bubbles, setBubbles] = useState<BubbleType[]>([])

  useEffect(() => {
    fetch("bubble/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setBubbles(data)
      })
  }, [])

  return (
    <>
      {bubbles.map((bubble) => (
        <Bubble id={bubble.id} totalAmount={bubble.totalAmount} />
      ))}
    </>
  )
}

export default Home
