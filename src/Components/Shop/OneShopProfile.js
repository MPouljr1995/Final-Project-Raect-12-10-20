import React, { Component } from 'react';
import './ShopCss/OneShopProfile.css'

import {Grid,Card,CardContent,Typography,Button, CardActions} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import Photo from './ShopImage/phone4.jpg'

class OneShopProfile extends Component {
    render() {
        return(
            <div className='oneShopMain'>
            <Grid container spacing={3} >
                <Grid item xs={12}>
                    <Card className= 'oneShopProfileMain'>
                        <CardActionArea>
                            <Grid container>
                                <Grid item xs={5}>
                                    <CardMedia>
                                        <img src= {Photo} alt="Logo"/>
                                    </CardMedia>
                                </Grid>
                                <Grid item xs={7}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            SHOP NAME
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        ShopShop Shop ShopShopShopShop Shop........
                                        </Typography> 
                                        <Rating name="read-only" value={2} readOnly />   
                                    </CardContent>
                                    <CardActions >
                                        <Button id="shopEditProfile"  variant="contained"  >
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Grid>        
                            </Grid>                           
                        </CardActionArea>        
                    </Card>
                </Grid>

                {/* ///////////////////////////////////////////////// */}

                <Grid item xs={6} sm={4} md={3} lg={2} style={{marginTop:'20px'}}  >

                    <Card className='productCard'   elevation={3}>
                        <CardActionArea >
                        <Box className='showImgDiv'>
                            <CardMedia
                            className='showImg'
                            component="img"
                            image={Photo}
                            title="Contemplative Reptile"
                            class="img-responsive"
                            id="showImg"

                            />
                        </Box>

                        <CardContent>
                            <Typography gutterBottom  className='productTitle'>
                            {/* {product.title} */}
                            title
                            </Typography>
                            <Typography className='offerPrice' variant="h6">
                            {/* {product.lastPrice} */}
                            lastprice
                            </Typography>
                            <Typography className='sellPrice' variant="h6">
                            {/* {product.sellPrice} */}
                            sellprice
                            </Typography>

                            <Typography className='offerPrice'>
                                <Rating name="read-only" value={2} readOnly  />
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions >
                        <Button variant="contained" id="btn" style={{backgroundColor:'#03a9f4',color:'white',margin:'auto'}} >
                        Buy
                        </Button>
                        <Button   variant="contained" style={{backgroundColor:'#03a9f4',color:'white',margin:'auto'}} >
                        Add cart
                        </Button>
                        <Button   variant="contained" style={{backgroundColor:'#03a9f4',color:'white',margin:'auto'}} >
                        Edit
                        </Button>
                        </CardActions>
                    </Card>

                </Grid>
            </Grid>
            </div>
        )
    }
}
export default OneShopProfile;