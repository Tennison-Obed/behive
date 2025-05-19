import styled from "styled-components";
import { Box, Grid } from "@mui/material";

export const SpaceCardContainer = styled(Grid)`
  background-color: var(--white);
  box-shadow: 0px 1.08px 8.63px 0px #0000000f;
  border: 1.08px solid #eee7e7cc;
  border-radius: 8px;
  height: 384px;
  width: 370px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-3);
  }

  & .header-section {
    height: 80px;
  }



  & img.thumbnail-img {
    width: 100%;
    height: 202px;
    object-fit: cover;
    margin: 0 auto;
    border-radius: 6px;
  }
  & .tool-section {
    min-width: 52px;
    min-height: 52px;
    background-color: var(--grey-50);
    border: 1px solid var(--grey-200);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-left: auto;
  }


  & .MuiBadge-root span.MuiBadge-standard.MuiBadge-badge{
    left: 50%;
    position: absolute;
    width: 100px;
    height:18px;
    font-size: .65rem;
    display: block;
    top: -10px;
    transform: translateX(-50%);
    background-color: var(--background-primary);
    color:var(--primary-contrast-text);
    border-radius: 4px;
    padding: 4px;
    text-align: center;
    letter-spacing: 1.5px;
    }

  & .MuiButtonBase-root.action-btn {
    display: block;
    border: 1px solid var(--grey-200);
    text-align: left;
    padding: 5px 8px 5px 8px;
    width: 165px;
    & p{

    }




    & .next-icon {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
    }

    &:not(.MuiButton-containedSecondary) {
      background-color: var(--grey-50);
    }
  }
`;
