import { Card, CardContent, Typography } from "@mui/material"

export interface BubbleType {
  id: string
  totalAmount: number
}

const Bubble = ({ id, totalAmount }: BubbleType) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {id}
        </Typography>
        <Typography variant="h5" component="div">
          {totalAmount}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Bubble
