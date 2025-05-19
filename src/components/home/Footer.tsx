import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FooterContainer } from "./style";
import { Box, Grid, Typography } from "@mui/material";
import { Height } from "@mui/icons-material";

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
const Footer = () => {
  return (
    <FooterContainer padding={{ xs: 2, md: 5 }}>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "1.6rem", sm: "2rem", md: "3rem" },
            lineHeight: { xs: 1.2, md: 1.5 },
          }}
          variant="h3"
        >
          Download Our App
        </Typography>
      </Box>

      <Grid
        sx={{
          marginTop: { xs: 5, sm: 20 },
          display: { xs: "flex" },
        //   flexDirection:{sm:"row",lg:"row"}
        }}
        container
      >
        <Grid size={{ xs: 12, lg: 6 }} sx={{height:{xs:"50vh",md:"auto"}}} className="img-block">
          <img className="image-2" src="/bg/Frame_1.svg"></img>
          <img src="/bg/Frame_2.svg"></img>
        </Grid>
        <Grid
          size={{ xs: 12, lg: 6 }}
          sx={{display:{xs:"none",md:"block" }}}
        >
          <Typography variant="h4" >
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </Typography>
          <Box marginTop={5}>
            <img src="/bg/playstore.png"></img>
            <img src="/bg/appStore.png"></img>
          </Box>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
// #endregion

export default Footer;
