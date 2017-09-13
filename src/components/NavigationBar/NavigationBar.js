import React,{Component} from 'react';
import { NavigationContainer, NavItem, NavIcon } from './NavigationBar.style';

class NavigationBar extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <NavIcon src={require('../../assets/icon.ico')} alt="Icon"/>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/about">About Me</NavItem>
                <NavItem to="/education">Education</NavItem>
                <NavItem to="/employment">Employment</NavItem>
                <NavItem to="/projects">Projects</NavItem>
                <NavItem to="/skills">Skills</NavItem>
                <NavItem to="/contact">Contact</NavItem>

            </NavigationContainer>
        );
    }
}

export default NavigationBar;