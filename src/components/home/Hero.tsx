import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { HeroContainer } from "./style";
import { Box, Grid, Typography } from "@mui/material";

const propTypes = {};
const defaultProps = {};

const Hero = () => {
  return (
    <HeroContainer id="hero-section" marginBottom={20}>
      <Grid container maxWidth="lg" margin="auto" className="hero-container" spacing={2}>
        <Grid size={{ xs: 12, md: 6 }} className="left-section">
          <Typography variant="h2" sx={{ 
            fontSize: { xs: '2rem', md: '3rem' },
            lineHeight: { xs: 1.2, md: 1.5 }
          }}>
            Host your meeting with world-class amenities. Starting at 
            <span className="text-theme"> ₹199/-!</span>
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}  className="right-section">
          <img src="/bg/hero.png" alt="Hero illustration" />
        </Grid>
      </Grid>
    </HeroContainer>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;
// #endregion

export default Hero;
