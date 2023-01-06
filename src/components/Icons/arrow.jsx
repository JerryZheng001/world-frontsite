import styled from 'styled-components';

const Arrow = styled.span`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  width: 0;
  height: 0;
`;

export const ArrowLeft = styled(Arrow)`
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

export const ArrowRigth = styled(Arrow)`
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

export const ArrowUp = styled(Arrow)`
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`;

export const ArrowDown = styled(Arrow)`
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;
