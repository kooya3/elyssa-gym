import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;
  
  return (
    <Box id="exercises" sx={{mt: { lg: '110px'}}} mt="50px" p="20px">
    <Typography variant="h3" mb="46px">
      Showing Results
    </Typography>
    <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px'}}} flexWrap="wrap" justifyContent="center">
      {exercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise} />       
      ))}
    </Stack>
    <Stack mt="100px" alignItems="center">
      {exercises.length > 12 && (
        <Pagination color="standard"
        shape="rounded"
        defaultPage={1}
        count={math.ceil(exercises.length / 12)}
        /* exercise number is 12 per page */
        page={currentPage}
        onChange={paginate}
        size="large" />

      )}
    </Stack>
    </Box>
  );
}

export default Exercises