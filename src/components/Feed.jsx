// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Box} from '@mui/material'
import Post from './Post'


export default function Feed() {
  return (
    <Box flex={4} p={2}>
       <Post/>
       <Post/>
       <Post/>
    </Box>
  )
}