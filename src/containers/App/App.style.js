import styled from 'styled-components';
export const Background= styled.div`
position:fixed;
 min-width: 100%;
  min-height: 100%;
   top: 0; 
  left: 0;
background-image:url(${require('../../assets/mac_bg.jpg')});
background-size:100% 100%;
background-position:center;
opacity:0.75;
background-repeat:no-repeat;
z-index:-99;
`;