import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Image from "../../graphics/android.jpg"

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 300, margin: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="230"
          image={Image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Android Development
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Android App Development with Java, Kotlin and React Native 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Explore
        </Button>
      </CardActions>
    </Card>
  );
}
