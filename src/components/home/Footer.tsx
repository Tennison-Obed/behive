import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { FooterContainer } from "./style";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <FooterContainer className={className}>
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontSize: {
              xs: "1.6rem",
              sm: "2rem",
              md: "3rem",
            },
            lineHeight: {
              xs: 1.2,
              md: 1.5,
            },
          }}
        >
          Download Our App
        </Typography>
      </Box>

      <Grid
        container
        spacing={3}
        className="wrapper"
        sx={{
          mt: { xs: 5, sm: 20 },
          display: "flex",
        }}
      >
        <Grid
          container
          //   item
          size={{ xs: 12, lg: 6 }}
          sx={{ height: { xs: "50vh", md: "auto" } }}
          className="app-preview"
          flex={1}
        >
          <Box position={"relative"} width={"100%"}>
            <img
              className="preview-image preview-image-2"
              src="/bg/Frame_1.svg"
              alt="App preview 1"
            />
            <img
              className="preview-image preview-image-1"
              src="/bg/Frame_2.svg"
              alt="App preview 2"
            />
          </Box>
        </Grid>

        <Grid
          container
          sx={{
            padding: { xs: 2, sm:5, md: 5, lg: 10 },
          }}
          size={{ xs: 12, md: 6, lg: 6 }}
          flex={1}
        >
          <Typography variant="h4" display={{xs:"none",sm:"block"}}>
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </Typography>

          <Box sx={{ mt: {xs:0, md:5}, margin: { xs : "0 auto", md : "auto"} }}>
            <img
              src="/bg/playstore.png"
              alt="Download on Google Play"
              style={{ marginRight: "1rem" }}
            />
            <img src="/bg/appStore.png" alt="Download on App Store" />
          </Box>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
