import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SimilarExercises = (props) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3">Exercises the same muscle group</Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {props.targetMuscleExercises.length && (
          <HorizontalScrollbar data={props.targetMuscleExercises} />
        )}
      </Stack>
      <Typography variant="h3">Exercises the same equipment</Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {props.equipmentExercises.length && (
          <HorizontalScrollbar data={props.equipmentExercises} />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
