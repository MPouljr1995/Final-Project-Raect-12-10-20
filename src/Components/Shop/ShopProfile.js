import React, { Component } from 'react';
import './ShopCss/ShopProfile.css'

import {Grid,Card,CardContent,Typography} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
// import Box from '@material-ui/core/Box';

import Photo from './ShopImage/phone4.jpg'



class ShopProfile extends Component {

    render(){
        return(
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card className= 'shopProfileMain'>
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
                            </Grid>        
                        </Grid>
                            
                        </CardActionArea>
                            
                    </Card>
                </Grid>
            </Grid>
        )
    }


}
export default ShopProfile;