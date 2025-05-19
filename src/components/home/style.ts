import { Grid } from "@mui/material";
import styled from "styled-components";

export const HeroContainer = styled(Grid)`
  position: relative;
  height: 80vh;
  padding-top: 25vh;
  overflow: hidden;

  .hero-container {
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
      padding-top: 5vh;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/bg/bg1.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: -450px;
    z-index: 1;

    @media (max-width: 768px) {
      background-position: center;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 60%;
    background-image: url("/bg/bg2.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    z-index: 1;

    @media (max-width: 768px) {
      width: 100%;
      height: 40%;
      background-position: center;
    }
  }

  & .left-section {
    position: relative;
    z-index: 5;
    padding: 10px;

    @media (max-width: 768px) {
      text-align: center;
      padding: 20px;
    }
  }

  & .right-section {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      height: auto;
    }

    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }
`;

export const FeatureContainer = styled(Grid)`
  .feature-card {
    display: flex;
    align-items: center;
    padding: 20px;
    height: 100%;
    border-bottom: 1px solid var(--grey-200);
    border-right: 1px solid var(--grey-200);
    transition: all 0.3s ease;

    &:hover {
      box-shadow: var(--shadow-2);
      transform: translateY(-2px);
      border-radius: 10px;
      background-color: var(--white);
    }

    .feature-icon {
      margin-right: 20px;
      color: var(--secondary-main);
    }

    .feature-title {
      font-weight: 500;
      color: var(--text-primary);
    }
  }

  /* Remove bottom border for last row items */
  .last-row-item .feature-card {
    border-bottom: none !important;
  }

  /* Remove right border for rightmost items */
  .rightmost-item .feature-card {
    border-right: none !important;
  }
`;

export const OverviewContainer = styled(Grid)`
  max-width: 1200px;
  margin: 0 auto;

`;