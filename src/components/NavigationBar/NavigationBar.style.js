import styled from 'styled-components';
import {Link} from 'react-router';

export const NavigationContainer= styled.div`
@import url('https://fonts.googleapis.com/css?family=Acme');
position: fixed;
top:3.5em;
left:2.5em;
font-family: 'Acme', sans-serif;

`;
export const NavIcon= styled.img`
position: relative;
width:60%



`;
export const NavItem= styled(Link)`
display: block;
margin-top:20px;
font-size:1.3em;
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