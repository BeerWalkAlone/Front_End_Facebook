// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import Img1 from '../images/54.jpg'
import Img2 from '../images/9t (2).jpg'
import Img3 from '../images/FF.png'
import Img4 from '../images/meme.jpg'
import Img5 from '../images/images.jpg'

import Img11 from '../image/11.jpg'
import Img22 from '../image/22.jpg'
import Img33 from '../image/33.jpg'

export default function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{display : {xs:"none", sm:"block"}}}>
       <Box position='fixed' width={300}>
      <Typography variant='h6' fontWeight={100} marginLeft={0}>Online Frineds</Typography>

      <AvatarGroup sx={{marginRight:10}}>
      <Avatar alt="Remy Sharp" src={Img1} />
      <Avatar alt="Travis Howard" src={Img2} />
      <Avatar alt="Cindy Baker" src={Img3}/>
      <Avatar alt="Agnes Walker" src={Img4}/>
      <Avatar alt="Trevor Henderson" src={Img5}/>
      <Avatar alt="Trevor Henderson" />
      <Avatar alt="Trevor Henderson"/>
    </AvatarGroup>
    <Typography variant='h6' fontWeight={100} mt={2} md={2} marginLeft={0}>
      Latest Photos
    </Typography>
    <ImageList cols={3} fontWeight={100}  >
    <ImageListItem>
      <img
        src={Img11}
        alt=''
      />
    </ImageListItem>

    <ImageListItem>
      <img
        src={Img22}
        alt=''
      />
    </ImageListItem>

    <ImageListItem>
      <img
        src={Img33}
        alt=''
      />
    </ImageListItem>
    </ImageList>

    <Typography variant='h6' fontWeight={100} mt={2}>
      Latest Conversations</Typography>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
       </Box> 
    </Box>
  )
}
