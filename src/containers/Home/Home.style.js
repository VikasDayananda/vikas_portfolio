import styled,{css} from 'styled-components';
import {Link} from 'react-router';
export const imageButton=styled.div`

    
`;
export const Icon=styled.img`
margin-left:20px;
    
`;
export const Border=styled.div`
margin-left:25%;

position:relative;
width:550px;
height:350px;
border:1px 
solid #000;

background-color:white;
`;
export const Background= styled.div`
position:fixed;
left:10vw;
width:80vw;
top:10vh;
height:100%;

background-color:white;
background-size:100%;
background-position:center;
opacity:0.2;
background-repeat:no-repeat;
z-index:-99;
`;
export const Social=styled.div`
margin-left:25%;
position:relative;
width:550px;
height:50px;
border:1px 
solid #000;
z-index=-1;
background-color:white;
`;


export const Image = styled.img`
width: 275px;
height:349.5px;
 
  cursor:pointer;
    overflow:hidden;
    display:inline-block;
    position:absolute;

& > img{
transition: transform .3s;
}
&:hover{
&>img {
transform: scale(1.3);
}
}
  

`;
export const  Details =styled.p`
padding-left:10px;
position:absolute;
margin-left:50%;

`;
export const  Media_icons =styled.p`
padding-top:9px;
padding-bottom:9px;
display: table;
  margin: 0 auto;
`;
export const  Next_icon=styled(Link)`
color:red;
position: fixed;
    bottom:0;
    right:100px;
text-decoration:none;
    -webkit-transform:scale(2.0, 2.0);
-moz-transform:scale(3.0,3.0);
-ms-transform:scale(3.0, 3.0);
-o-transform:scale(3.0,3.0);
transform:scale(3.0,3.0);
cursor:pointer;
 text-shadow: 2px 2px 4px #fff;

`;
export const  Next_page=styled.p`
color:red;
position: fixed;;
    bottom:20px;
    right:100px;
  font-size:100%;
    text-shadow: 2px 2px 4px #fff;
  
`;
export const  Prev_icon=styled(Link)`
    color:red;
position: fixed;
    bottom:0;
    left:200px;
text-decoration:none;
    -webkit-transform:scale(2.0, 2.0);
-moz-transform:scale(3.0,3.0);
-ms-transform:scale(3.0, 3.0);
-o-transform:scale(3.0,3.0);
transform:scale(3.0,3.0);
cursor:pointer;
 text-shadow: 2px 2px 4px #fff;

`;
export const  Prev_page=styled.p`
color:red;
position: fixed;
    bottom:20px;
    left:200px;
  font-size:100%;
   text-shadow: 2px 2px 4px #fff;
  
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
    transition: transform 1s;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;