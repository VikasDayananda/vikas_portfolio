import styled, {css} from 'styled-components';

export const Body=styled.div`

   padding-left:50px;
   padding-right:50px;
   padding-top:15px;
`;
export const P=styled.p`

    text-align: justify;
    text-justify: inter-word;
`;
export const Button=styled.button`

  
`;

export const RevealP = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 19s;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;