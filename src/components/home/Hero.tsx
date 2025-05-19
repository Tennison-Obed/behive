import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { HeroContainer } from "./style";
import { Box, Grid, Typography } from "@mui/material";

const propTypes = {};
const defaultProps = {};

const Hero = () => {
  return (
    <HeroContainer id="hero-section"  padding={{xs:0, md: 5}} marginBottom={5}>
      <Grid
        container
        maxWidth="lg"
        margin="auto"
        className="hero-container"
        spacing={2}
        padding={{ xs:0 ,lg:5}}
      >
        <Grid size={{ xs: 12, md: 6 }} className="left-section">
          <Typography
            variant="h1"
            sx={{
            fontSize: { xs: "1.6rem", sm:"2rem", md: "3rem"  },
              lineHeight: { xs: 1.2, md: 1.5 },
            }}
          >
            Host your meeting with world-class amenities. Starting at
            <span className="text-theme"> ₹199/-!</span>
          </Typography>
        </Grid>
        {/* <Grid size={{ xs: 12, md: 6 }}  className="right-section"> */}
        <img
          className="right-bg-img"
          src="/bg/hero.png"
          alt="Hero illustration"
        />
        {/* </Grid> */}
      </Grid>
    </HeroContainer>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;
// #endregion

export default Hero;
