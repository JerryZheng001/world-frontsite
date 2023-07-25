import { transparentize } from "polished";
import React from "react";
import { AlertTriangle } from "react-feather";
import styled, { css } from "styled-components";
import { Text } from "rebass";
import { AutoColumn } from "./Column";
import loadingPic from "../assets/images/contrastDetec/loading.png";

export const Wrapper = styled.div`
  position: relative;
  padding: 1rem;
`;

export const ArrowWrapper = styled.div<{ clickable: boolean }>`
  ${({ clickable }) =>
    clickable
      ? css`
          :hover {
            cursor: pointer;
            opacity: 0.8;
          }
        `
      : null}
`;

export const SectionBreak = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.bg3};
`;

export const BottomGrouping = styled.div`
  margin-top: 1.5rem;
`;

export const ErrorText = styled(Text)<{ severity?: 0 | 1 | 2 | 3 | 4 }>`
  color: ${({ theme, severity }) =>
    severity === 3 || severity === 4
      ? theme.red1
      : severity === 2
      ? theme.yellow2
      : severity === 1
      ? theme.text1
      : theme.green1};
`;

export const StyledBalanceMaxMini = styled.button`
  height: 22px;
  width: 22px;
  border: none;
  border-radius: 50%;
  padding: 0.2rem;
  font-size: 0.875rem;
  font-weight: 400;
  margin-left: 0.4rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text1};
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  background: none;

  :hover {
    color: ${({ theme }) => theme.text3};
  }
  :focus {
    color: ${({ theme }) => theme.text3};
    outline: none;
  }
`;

export const TruncatedText = styled(Text)`
  text-overflow: ellipsis;
  max-width: 220px;
  overflow: hidden;
`;

// styles
export const Dots = styled.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: ".";
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: ".";
    }
    33% {
      content: "..";
    }
    66% {
      content: "...";
    }
  }
`;
export const SmallLoading = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(${loadingPic});
  margin-right: 3px;
  background-size: 100% 100%;
  animation: spin 2s linear infinite;
  position: relative;
  top: 4px;
  left: -3px;
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const SwapCallbackErrorInner = styled.div`
  background-color: ${({ theme }) => transparentize(0.9, theme.red1)};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  font-size: 0.825rem;
  width: 100%;
  padding: 3rem 1.25rem 1rem 1rem;
  margin-top: -2rem;
  color: ${({ theme }) => theme.red1};
  z-index: -1;
  p {
    padding: 0;
    margin: 0;
    font-weight: 500;
  }
`;

const SwapCallbackErrorInnerAlertTriangle = styled.div`
  background-color: ${({ theme }) => transparentize(0.9, theme.red1)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  border-radius: 12px;
  min-width: 48px;
  height: 48px;
`;

export function SwapCallbackError({ error }: { error: string }) {
  return (
    <SwapCallbackErrorInner>
      <SwapCallbackErrorInnerAlertTriangle>
        <AlertTriangle size={24} />
      </SwapCallbackErrorInnerAlertTriangle>
      <p>{error}</p>
    </SwapCallbackErrorInner>
  );
}

export const SwapShowAcceptChanges = styled(AutoColumn)`
  background-color: ${({ theme }) => transparentize(0.9, theme.primary1)};
  color: ${({ theme }) => theme.primary1};
  padding: 0.5rem;
  border-radius: 12px;
  margin-top: 8px;
`;
export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.bg2};
`;
export const FooteStyled = styled.div`
  width: 100%;
  height: 136px;
  opacity: 1;
  background: rgba(0, 0, 0, 1);
  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    .item {
      height: 136px;
      flex: 1;
    }
    .item:nth-child(1) {
      width: ;
      padding: 27.8px 0;
      p {
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 36px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
        vertical-align: top;
        margin-top: 10px;
      }
    }
    .item:nth-child(2) {
      padding: 48px 0;
      text-align:right;
      span {
        display: inline-block;
        width: 40px;
        height: 40px;
        margin-left: 30px;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
