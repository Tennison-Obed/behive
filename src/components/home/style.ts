import { Grid } from "@mui/material";
import styled from "styled-components";

export const HeroContainer = styled(Grid)`
  position: relative;
  height: 80vh;
  padding-top: 25vh;
  overflow: hidden;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    /* height: 100vh; */
    padding-top: 10vh;
  }

  .hero-container {
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  /* backgroud texture */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1200px;
    height: 754px;
    background-image: url("/bg/bg1.png");
    background-repeat: no-repeat;
    background-size: cover;
    /* background-position: -450px; */
    z-index: 1;
    mix-blend-mode: multiply;

    @media (max-width: 768px) {
      top: 50vh;
      left: 0px;
      width: 100vw;
      background-position: unset;
    }
  }

  /* right col orange backdrop */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 644px;
    height: 743px;
    background-image: url("/bg/bg2.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    z-index: 1;

    @media (max-width: 768px) {
      width: 100%;
      right: 0px;
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

  /* right col image */
  img.right-bg-img {
    width: 388px;
    height: 388px;
    object-fit: contain;
    position: absolute;
    top: 20vh;
    right: 18vw;
    mix-blend-mode: multiply;
    @media (max-width: 768px) {
      position: relative;
      top: 0;
      right: 0;
      margin: 0 auto;
      width: 100%;
      /* height: 388px; */
    }
  }
  & .right-section {
    /* position: relative; */
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

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

      @media (max-width: 320px) {
        margin-right: 5px;
        width: 30px;
      }
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

export const FooterContainer = styled(Grid)`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: ${({ theme }) => theme.spacing.md};
  }

  .MuiGrid-root.MuiGrid-container.wrapper {
    background-color: var(--background-white);
    border-radius: 18px;
    border: 1px solid var(--grey-200);
    /* padding: 3rem; */
    position: relative;


  ${({ theme }) => theme.breakpoints.down('sm')} {
   flex-direction: column;
   height: 100vh;
  }

  }

  .app-preview {
    position: relative;
    
    .preview-image {
      position: absolute;
      left: 5%;
      bottom: 0;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }

      &.preview-image-2 {
        left: 21%;
      }
    }
  }




  ${({ theme }) => theme.breakpoints.up('sm')} {
    .app-preview {
      .preview-image {
        &.preview-image-2 {
          left: 40%;
        }
      }
    }
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    .app-preview {
      .preview-image {
        &.preview-image-2 {
          left: 20%;
        }
      }
    }
  }


`;
