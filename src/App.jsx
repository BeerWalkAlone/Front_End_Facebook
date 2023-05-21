/* eslint-disable no-unused-vars */
import React from 'react'
import Siderbar from './components/Sidebar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import { Box, Container, Stack } from '@mui/material/'
import Navbar from './components/Navbar'
export default function App() {
  return (
    <Box sx={{margin:-1}}>
     <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">

     
      <Siderbar />
      <Feed />
      <Rightbar />
      </Stack>
    </Box>
  )
}
