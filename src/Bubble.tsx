import { Card, CardContent, Typography } from "@mui/material"

export interface BubbleType {
  id: string
  totalAmount: number
}

const Bubble = ({ id, totalAmount }: BubbleType) => {
  return (
    <Card sx={{ minWidth: "10%", borderRadius: "50%" }} variant="outlined">
      <CardContent>
        <Typography gutterBottom>{id}</Typography>
        <Typography sx={{ fs: 14 }}>{totalAmount}</Typography>
      </CardContent>
    </Card>
  )
}

export default Bubble
