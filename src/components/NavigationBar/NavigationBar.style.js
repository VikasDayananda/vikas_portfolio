import styled from 'styled-components';
import {Link} from 'react-router';

export const NavigationContainer= styled.div`

position: fixed;
top:3.5em;
left:2.5em;


`;
export const NavIcon= styled.img`
position: relative;
width:60%



`;
export const NavItem= styled(Link)`
display: block;
color:#B22222;
margin-top:20px;
font-size:1.3em;
font-weight:700;
cursor:pointer;
position:relative;
text-decoration: none;
&:hover{
color:blue;
&:after{
content:' ';
position:absolute;
left: 0;
top: 0;
width:100%;
height: 100%;
background-color:black;
z-index: -1;
transform:scale(1.2, 1.3);
}
}


`;