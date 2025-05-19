import React, { useMemo } from "react";
import {
  Typography,
  Button,
  Grid,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
//   import { toggleTheme } from "../../store/slices/themeSlice";
import { FeatureContainer } from "./style";

import {
  CommunityEventsIcon,
  MeetingRoomsIcon,
  VirtualEventsIcon,
  NetworkingIcon,
  WorkshopsIcon,
  ConferencesIcon,
  TeamBuildingIcon,
  TrainingIcon,
} from "../../components/icons";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

const breakpoint = { isMobile: 6, isTablet: 4, isDesktop: 3 };

const features = [
  { icon: CommunityEventsIcon, title: "Community Events" },
  { icon: MeetingRoomsIcon, title: "Meeting Rooms" },
  { icon: VirtualEventsIcon, title: "Virtual Events" },
  { icon: NetworkingIcon, title: "Networking" },
  { icon: WorkshopsIcon, title: "Workshops" },
  { icon: ConferencesIcon, title: "Conferences" },
  { icon: TeamBuildingIcon, title: "Team Building" },
  { icon: TrainingIcon, title: "Training" },
];

/**
 *
 */
const Features = () => {
  const mode = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  const itemsPerRow = useMemo(() => {
    if (isMobile) return 12 / breakpoint.isMobile; // 2 items per row
    if (isTablet) return 12 / breakpoint.isTablet; // 3 items per row
    return 12 / breakpoint.isDesktop; // 4 items per row
  }, [isMobile, isTablet]);

  const lastRowStartIndex = useMemo(() => {
    const totalItems = features.length;
    const itemsInLastRow = totalItems % itemsPerRow;
    return totalItems - (itemsInLastRow || itemsPerRow);
  }, [features.length, itemsPerRow]);

  const isRightmostCell = (index: number) => {
    return (index + 1) % itemsPerRow === 0;
  };

  return (
    <FeatureContainer id="features"  maxWidth="lg"  padding={{xs:2, md: 5}} margin="auto" marginBottom={5}>
      <Box marginBottom={2}>
        <Typography variant="h3" 
        
        sx={{
            fontSize: { xs: "1.6rem", sm:"2rem", md: "3rem"  },
            lineHeight: { xs: 1.2, md: 1.5 },
          }}>Why Choose Us ?</Typography>
      </Box>
      <Grid container spacing={0}>
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Grid
              key={index}
              size={{
                xs: breakpoint.isMobile,
                sm: breakpoint.isTablet,
                lg: breakpoint.isDesktop,
              }}
              className={`${
                index >= lastRowStartIndex ? "last-row-item" : ""
              } ${isRightmostCell(index) ? "rightmost-item" : ""}`}
            >
              <Box className="feature-card">
                <Icon className="feature-icon" />
                <Typography className="feature-title" variant="body2">
                  {feature.title}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </FeatureContainer>
  );
};

Features.propTypes = propTypes;
Features.defaultProps = defaultProps;
// #endregion

export default Features;
