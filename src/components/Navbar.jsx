// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, styled, alpha, InputBase, Box, Avatar,Menu,MenuItem } from '@mui/material'
import { Notifications, Pets } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge'
import Mail from '@mui/icons-material/Mail'
import Img from '../image/meme.jpg'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  color:'black',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',

  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '35ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
   gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up("sm")]:{
      display:'flex'
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex', 
  gap: '10px',
   alignItems: 'center',
   [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))


export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='stick'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>BEER DEV</Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <SearchIconWrapper >
            <Search />
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search...'
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar src={Img} sx={{ width: 30, height: 30 }} 
          onClick={(e)=>setOpen(true)}
          />
        </Icons>

        <UserBox onClick={(e)=>setOpen(true)}>
        <Avatar src={Img} sx={{ width: 30, height: 30 }} />
        <Typography variant='subtitle1'>Beer</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="basic-menu"
        open={open}
        onClick={(e) => setOpen(false)}
        anchorOrigin={{
          vertical:'top',
          horizontal:'right'
        }}
        transformOrigin={{
          vertical:'top',
          horizontal:'right'
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
