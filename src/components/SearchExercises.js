import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
 
const SearchExercises = () => {
   return (
     <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{fontSize: { lg: '45px', xs: '30px'}}} mb="46px" textAlign="center">
        Awesome Exercises you <br /> should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField 
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text" />
      </Box>
     </Stack>
   )
 }
 
 export default SearchExercises