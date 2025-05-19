import React, { useMemo } from "react";
import {
  Typography,
  Button,
  Grid,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Container } from "./styles";
import Hero from "../../components/home/Hero";
import Features from "../../components/home/Features";
import Overview from "../../components/home/Overview";
import Footer from "../../components/home/Footer";

const Home: React.FC = () => {
  return (
    <Container className="hello">
      <Hero />
      {/* features sections */}
      <Features />
      <Overview></Overview>
      <Footer></Footer>

    </Container>
  );
};

export default Home;
