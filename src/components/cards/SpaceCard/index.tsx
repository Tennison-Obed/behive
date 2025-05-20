import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { SpaceCardContainer } from "./style";
import { Badge, Box, Button, ButtonGroup, Typography } from "@mui/material";
import {
  STATIC_ASSETS_BASEURL,
  WorkspaceData,
} from "../../../store/slices/workspaceSlice";
import { AstDirectionIcon, NextIcon } from "../../icons";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const SpaceCard = ({ space }: { space: WorkspaceData }) => {
  return (
    <SpaceCardContainer size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
      <Box
        p={2}
        display={"flex"}
        className="header-section"
        alignItems={"center"}
      >
        <Typography
          margin={0}
          marginRight={5}
          className="text-primary"
          sx={{
            fontSize: { xs: "1rem", sm: "1rem", md: "1rem", lg: "1.2rem" },
            lineHeight: { xs: 1.2, md: 1.5 },
          }}
          fontWeight={600}
          gutterBottom
        >
          {space.name}
        </Typography>
        <Box display={"inline"} className="tool-section">
          <AstDirectionIcon></AstDirectionIcon>
          <Typography fontSize={".6rem"} color="textDisabled" variant="caption">
            60kms
          </Typography>
        </Box>
      </Box>
      <Box padding={"10px"} paddingTop={0}>
        <img
          className="thumbnail-img"
          src={`${STATIC_ASSETS_BASEURL}/${space.thumbnail}`}
        ></img>
      </Box>
      <Box
        padding={"10px"}
        paddingTop={0}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Button className="action-btn " variant="contained" color="primary">
          <Box
            component={Typography}
            display={"block"}
            variant="button"
            className="text-sm text-secondary"
          >
            Day Pass
          </Box>
          <Box component={Typography} variant="button" fontSize={"20px"}>
            $ {space.day_pass_price}<span className=" text-xs text-secondary ">/ 10 Days </span>
          </Box>
          <NextIcon className="next-icon"></NextIcon>
        </Button>
        <Badge color="secondary" badgeContent={"20% Discount"}>
          <Button className="action-btn " variant="contained" color="secondary">
            <Box
              component={Typography}
              display={"block"}
              variant="button"
              className="text-sm text-secondary"
            >
              Day Pass
            </Box>
            <Box component={Typography} variant="button" fontSize={"20px"}>
              $ {( Math.round( parseInt(space?.day_pass_price||"400") - parseInt(space?.day_pass_price || "400")/20) )}<span className=" text-xs text-secondary ">/ 10 Days </span>
            </Box>
            <NextIcon className="next-icon"></NextIcon>
          </Button>
        </Badge>
      </Box>
    </SpaceCardContainer>
  );
};

SpaceCard.propTypes = propTypes;
SpaceCard.defaultProps = defaultProps;
// #endregion

export default SpaceCard;
