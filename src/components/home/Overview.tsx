import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { OverviewContainer } from "./style";
import { Grid, Typography } from "@mui/material";

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
const Overview = () => {
  return (
    <OverviewContainer  maxWidth={"lg"} margin={"auto"} marginTop={10}>
      <Grid>
        <Typography variant="h3"> Our Space Overview</Typography>
      </Grid>
    </OverviewContainer>
  );
};

Overview.propTypes = propTypes;
Overview.defaultProps = defaultProps;
// #endregion

export default Overview;
