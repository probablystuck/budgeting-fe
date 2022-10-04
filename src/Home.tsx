import { Box } from "@mui/material"
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
    <Box
      display="flex"
      justifyContent="space-around"
      sx={{ maxWidth: "80%vh" }}
      justifySelf="center"
      flexWrap="wrap"
    >
      {bubbles.map((bubble) => (
        <Bubble id={bubble.id} totalAmount={bubble.totalAmount} />
      ))}
    </Box>
  )
}

export default Home
