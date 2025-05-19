import React, { useEffect } from "react";
import { Grid, Typography, Box, CircularProgress } from "@mui/material";
import { OverviewContainer } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchWorkspaceData } from "../../store/slices/workspaceSlice";
import SpaceCard from "../cards/SpaceCard";

const Overview: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: workspaceData,
    loading,
    error,
  } = useSelector((state: RootState) => state.workspace);

  useEffect(() => {
    dispatch(fetchWorkspaceData());
  }, [dispatch]);

  if (loading) {
    return (
      <OverviewContainer>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="200px"
        >
          <CircularProgress />
        </Box>
      </OverviewContainer>
    );
  }

  if (error) {
    return (
      <OverviewContainer>
        <Typography color="error" align="center">
          {error}
        </Typography>
      </OverviewContainer>
    );
  }

  return (
    <OverviewContainer padding={{ xs: 2, md: 5 }} marginBottom={5}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.6rem", sm: "2rem", md: "3rem" },
              lineHeight: { xs: 1.2, md: 1.5 },
            }}
            gutterBottom
          >
            Our Space Overview
          </Typography>
        </Grid>
        {workspaceData && (
          <>
            {workspaceData.map((space) => (
              <SpaceCard space={space}></SpaceCard>
            ))}
          </>
        )}
      </Grid>
    </OverviewContainer>
  );
};

export default Overview;
