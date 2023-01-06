import React from "react";
import styled from "styled-components";
import { darken } from "polished";

import { RowBetween } from "../Row";
import { ChevronDown, ArrowLeft } from "react-feather";
import { Button as RebassButton, ButtonProps } from "rebass/styled-components";
import useTheme from "../../hooks/useTheme";

interface StyleProp {
  borderRadius?: string;
}

export const Base = styled(RebassButton)<{
  padding?: string;
  width?: string;
  borderRadius?: string;
  altDisabledStyle?: boolean;
}>`
  padding: ${({ padding }) => (padding ? padding : "9px 14px")};
  width: ${({ width }) => (width ? width : "100%")};
  font-weight: 500;
  text-align: center;
  border-radius: 4px;
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  outline: none;
  border: 1px solid transparent;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &:disabled {
    cursor: auto;
  }

  > * {
    user-select: none;
  }
`

export const ButtonUpgrad = styled(Base)`
  width: 300px;
  height: 50px;
  background: linear-gradient(90deg, #18eac4 0%, #3db2ff 100%);
  border-radius: 25px;
  opacity: 0.5;
  font-size: 14px;
  font-weight: 600;
  color: #0d102d;
  margin: 0 auto;
  &:focus {
    background: linear-gradient(90deg, #18eac4 0%, #3db2ff 100%);
  }
  &:hover {
    background-color: ${({ theme }) => theme.primary3};
  }
  &:active {
    background: linear-gradient(90deg, #18eac4 0%, #3db2ff 100%);
  }
  &:disabled {
    cursor: auto;
    box-shadow: none;
    background: ${({ theme }) => theme.primary2};
    /* border: 1px solid
      ${({ theme, altDisabledStyle, disabled }) =>
      altDisabledStyle
        ? disabled
          ? theme.bg3
          : theme.primary1
        : theme.primary5}; */
    outline: none;
    opacity: ${({ altDisabledStyle }) => (altDisabledStyle ? "1" : "0.2")};
  }
`;

export const ButtonPrimary = styled(Base)`
  background-color: ${({ theme }) => theme.primary3};
  color: ${({ theme }) => theme.text4};
  font-weight: 600;
  &:focus {
    background-color: ${({ theme }) => theme.primary1};
  }
  &:hover {
    background-color: ${({ theme }) => theme.primary2};
  }
  &:active {
    background-color: ${({ theme }) => theme.primary1};
  }
  &:disabled {
    cursor: auto;
    box-shadow: none;
    background: ${({ theme }) => theme.primary2};
    /* border: 1px solid
      ${({ theme, altDisabledStyle, disabled }) =>
      altDisabledStyle
        ? disabled
          ? theme.bg3
          : theme.primary1
        : theme.primary5}; */
    outline: none;
    opacity: ${({ altDisabledStyle }) => (altDisabledStyle ? "1" : "0.2")};
  }
`;

export const ButtonChangePrimary = styled(Base)`
  width: 300px;
  height: 50px;
  background: linear-gradient(90deg, #18eac4 0%, #3db2ff 100%);
  border-radius: 25px;
  font-weight: 600;
  color: #0d102d;
  line-height: 14px;
  font-size: 14px;
  &:focus,
  &:hover,
  &:active {
    background: #18eac4;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.primary4};
  }
  &:disabled {
    cursor: auto;
    box-shadow: none;
    background: ${({ theme }) => theme.primary2};
    /* border: 1px solid
      ${({ theme, altDisabledStyle, disabled }) =>
      altDisabledStyle
        ? disabled
          ? theme.bg3
          : theme.primary1
        : theme.primary5}; */
    outline: none;
    opacity: ${({ altDisabledStyle }) => (altDisabledStyle ? "1" : "0.2")};
  }
`;

export const ButtonPrimaryRadius = styled(Base)`
  display: inline-block;
  font-family: "MPLUS1";
  font-size: 14px;
  ${({ theme }) => theme.fw500};
  /* background-color: ${({ theme }) => theme.text3}; */
  background: linear-gradient(90deg, #18eac4 0%, #3db2ff 100%);
  color: ${({ theme }) => theme.black};
  border-radius: 50px;
  height: ${({ height }) => (height ? height : "50px")};
  padding: 0;
  width: ${({ width }) => (width ? width : "400px")};
  &:hover {
    background-color: ${({ theme }) => theme.white};
  }
  &:disabled {
    cursor: auto;
    background: linear-gradient(90deg, #18eac4 0%, #3db2ff 100%);
    outline: none;
    opacity: ${({ altDisabledStyle }) => (altDisabledStyle ? "1" : "0.2")};
  }
`;

export const ButtonLight = styled(Base)`
  background-color: ${({ theme }) => theme.primary5};
  color: ${({ theme }) => theme.primaryText1};
  font-size: 16px;
  font-weight: 500;
  &:focus {
    box-shadow: 0 0 0 1pt
      ${({ theme, disabled }) => !disabled && darken(0.03, theme.bg4)};
    background-color: ${({ theme, disabled }) =>
      !disabled && darken(0.03, theme.primary5)};
  }
  &:hover {
    background-color: ${({ theme, disabled }) =>
      !disabled && darken(0.03, theme.primary5)};
  }
  &:active {
    box-shadow: 0 0 0 1pt
      ${({ theme, disabled }) => !disabled && darken(0.05, theme.bg4)};
    background-color: ${({ theme, disabled }) =>
      !disabled && darken(0.05, theme.primary5)};
  }
  :disabled {
    opacity: 0.4;
    :hover {
      cursor: auto;
      background-color: ${({ theme }) => theme.primary5};
      box-shadow: none;
      border: 1px solid transparent;
      outline: none;
    }
  }
`;

export const ButtonGray = styled(Base)`
  background-color: ${({ theme }) => theme.bg1};
  color: ${({ theme }) => theme.text1};
  font-size: 16px;
  font-weight: 500;
  &:focus {
    color: ${({ theme }) => theme.text4};
  }
  &:hover {
    color: ${({ theme }) => theme.text4};
  }
  &:active {
    color: ${({ theme }) => theme.text4};
  }
  :disabled {
    color: ${({ theme }) => theme.text5};
  }
`;

export const ButtonSecondary = styled(Base)`
  border: 1px solid ${({ theme }) => theme.primary4};
  color: ${({ theme }) => theme.primary1};
  background-color: transparent;
  font-size: 14px;
  border-radius: 12px;
  padding: ${({ padding }) => (padding ? padding : "10px")};

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => theme.bg4};
    border: 1px solid ${({ theme }) => theme.primary3};
  }
  &:hover {
    border: 1px solid ${({ theme }) => theme.primary3};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => theme.bg4};
    border: 1px solid ${({ theme }) => theme.primary3};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
  a:hover {
    text-decoration: none;
  }
`;

export const ButtonPink = styled(Base)`
  background-color: ${({ theme }) => theme.primary1};
  color: white;

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.primary1)};
    background-color: ${({ theme }) => darken(0.05, theme.primary1)};
  }
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.primary1)};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.primary1)};
    background-color: ${({ theme }) => darken(0.1, theme.primary1)};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.primary1};
    opacity: 50%;
    cursor: auto;
  }
`;

export const ButtonUNIGradient = styled(ButtonPrimary)`
  color: white;
  padding: 4px 8px;
  height: 36px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.bg3};
  background: radial-gradient(
      174.47% 188.91% at 1.84% 0%,
      #ff007a 0%,
      #2172e5 100%
    ),
    #edeef2;
  width: fit-content;
  position: relative;
  cursor: pointer;
  border: none;
  white-space: no-wrap;
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 0.9;
  }
`;

export const ButtonOutlined = styled(Base)<{ selected?: boolean }>`
  border: 1px solid ${({ theme }) => theme.primary4};
  background-color: ${({ theme, selected }) =>
    selected ? theme.primary2 : "transparent"};
  color: ${({ theme, selected }) =>
    selected ? theme.black + " !important" : theme.text1};

  &:focus {
    /* box-shadow: 0 0 0 1px ${({ theme }) => theme.primary2}; */
  }
  &:hover {
    /* box-shadow: 0 0 0 1px ${({ theme }) => theme.primary2}; */
    border: 1px solid ${({ theme }) => theme.primary2};
    color: ${({ theme }) => theme.primary2};
  }
  &:active {
    /* box-shadow: 0 0 0 1px ${({ theme }) => theme.primary2}; */
    background-color: ${({ theme }) => theme.primary2};
    color: ${({ theme }) => theme.black};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
    /* box-shadow: 0 0 0 1px ${({ theme }) => theme.bg2}; */
  }
`;

export const ButtonOutlinedPrimary = styled(Base)`
  border: 1px solid ${({ theme }) => theme.primary1};
  background-color: transparent;
  color: ${({ theme }) => theme.primary1};

  :hover,
  :focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.primary4};
    border-color: ${({ theme }) => theme.primary4};
    color: ${({ theme }) => theme.primary4};
  }
  :active {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.bg4};
  }

  &:disabled {
    border-color: ${({ theme }) => theme.primary5};
    color: ${({ theme }) => theme.primary5};
    cursor: auto;
  }
`;
export const ButtonClosePrimary = styled(Base)`
  border: 1px solid #3cb3fe;
  font-size: 14px;
  font-family: MPLUS1-SemiBold, MPLUS1;
  font-weight: 600;
  color: #18eac4;
  line-height: 14px;
  background: none;
  width: 300px;
  height: 50px;
  border-radius: 25px;
  :hover,
  :focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.primary4};
    border-color: #18eac4;
  }
  :active {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.bg4};
    border-color: #18eac4;
  }
  &:disabled {
    border-color: ${({ theme }) => theme.primary5};
    color: ${({ theme }) => theme.primary5};
    cursor: auto;
  }
`;

export const ButtonEmpty = styled(Base)<{ color?: string }>`
  background-color: transparent;
  color: ${({ theme, color }) => color ?? theme.primary1};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`;

export const ButtonWhite = styled(Base)`
  border: 1px solid #edeef2;
  background-color: ${({ theme }) => theme.bg1};
  color: black;

  &:focus {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    box-shadow: 0 0 0 1pt ${darken(0.05, "#edeef2")};
  }
  &:hover {
    box-shadow: 0 0 0 1pt ${darken(0.1, "#edeef2")};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${darken(0.1, "#edeef2")};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`;

const ButtonConfirmedStyle = styled(Base)`
  background-color: ${({ theme }) => theme.primary1};
  color: ${({ theme }) => theme.bg1};
  border: 1px solid transparent;

  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`;

const ButtonErrorStyle = styled(Base)`
  background-color: ${({ theme }) => theme.red1};
  border: 1px solid ${({ theme }) => theme.red1};

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.red1)};
    background-color: ${({ theme }) => darken(0.05, theme.red1)};
  }
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.red1)};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.red1)};
    background-color: ${({ theme }) => darken(0.1, theme.red1)};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
    box-shadow: none;
    background-color: ${({ theme }) => theme.red1};
    border: 1px solid ${({ theme }) => theme.red1};
  }
`;

export function ButtonConfirmed({
  confirmed,
  altDisabledStyle,
  ...rest
}: { confirmed?: boolean; altDisabledStyle?: boolean } & ButtonProps &
  StyleProp) {
  if (confirmed) {
    return <ButtonConfirmedStyle {...rest} />;
  } else {
    return <ButtonPrimary {...rest} altDisabledStyle={altDisabledStyle} />;
  }
}

export function ButtonError({
  error,
  outlined,
  ...rest
}: { error?: boolean; outlined?: boolean } & ButtonProps & StyleProp) {
  if (error) {
    return <ButtonErrorStyle {...rest} />;
  } else if (outlined) {
    return <ButtonOutlined {...rest} />;
  } else {
    return <ButtonPrimary {...rest} />;
  }
}

export function ButtonDropdown({
  disabled = false,
  children,
  ...rest
}: { disabled?: boolean } & ButtonProps & StyleProp) {
  return (
    <ButtonPrimary {...rest} disabled={disabled}>
      <RowBetween>
        <div style={{ display: "flex", alignItems: "center" }}>{children}</div>
        <ChevronDown size={24} />
      </RowBetween>
    </ButtonPrimary>
  );
}

export function ButtonDropdownGrey({
  disabled = false,
  children,
  ...rest
}: { disabled?: boolean } & ButtonProps & StyleProp) {
  return (
    <ButtonGray {...rest} disabled={disabled} style={{ borderRadius: "20px" }}>
      <RowBetween>
        <div style={{ display: "flex", alignItems: "center" }}>{children}</div>
        <ChevronDown size={24} />
      </RowBetween>
    </ButtonGray>
  );
}

export function ButtonDropdownLight({
  disabled = false,
  children,
  ...rest
}: { disabled?: boolean } & ButtonProps & StyleProp) {
  return (
    <ButtonOutlined {...rest} disabled={disabled} borderRadius="14px">
      <RowBetween>
        <div style={{ display: "flex", alignItems: "center" }}>{children}</div>
        <ChevronDown size={14} />
      </RowBetween>
    </ButtonOutlined>
  );
}

export function ButtonRadio({
  active,
  ...rest
}: { active?: boolean } & ButtonProps & StyleProp) {
  if (!active) {
    return <ButtonWhite {...rest} />;
  } else {
    return <ButtonPrimary {...rest} />;
  }
}

export function ArrowLeftButton({ onClick }: { onClick: () => void }) {
  const theme = useTheme();
  return (
    <ButtonEmpty onClick={onClick} padding="8px" width="fit-content">
      <ArrowLeft color={theme.text1} />
    </ButtonEmpty>
  );
}
