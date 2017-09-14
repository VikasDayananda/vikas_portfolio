import React, { Component } from 'react'
import saveAs from '../../save-as'
import styled,{css} from 'styled-components';
import {Container} from 'theme/grid';
import {Body, P, RevealP,Button} from './About_me.style';
import{Next_icon,Next_page,Prev_icon,Prev_page} from '../Home/Home.style';
import './paralax.css';

import {Link} from 'react-router';

function makeFile() {
    // do some calculations
    return {
        mime: 'text/plain',
        filename: 'VikasDayanandaResume',
        location: './Vikas_Resume.pdf'

    }
}

class About_me extends React.Component{
    render()
    {
        return(
            <Container>
                <div className="parallax">
                <Body>
            <h3>Hi There . . . ,</h3>

            <P>My name is Vikas Dayananda,a graduate student at <a  target="_blank" href="https://www.uncc.edu">The University of North Carolina, Charlotte (UNCC) </a>
                in the Department of Computer Science, advised by <a  target="_blank" href="http://webpages.uncc.edu/aatzache/">Prof. Angleina Tzchavea</a>. I am specializing in Data Science
                    and Analytics and will be graduating in December 2017. My interests are Data Analytics,
                Front End Development, Back End Developement and Full Stack Applications.
                </P>
            <a target="_blank" href="https://drive.google.com/file/d/0B-M-QIiacJ27VE5CZjhVUnRTTmc/view?usp=sharing">
                <Button className="button button1" >View Resume</Button>
            </a>
            <a  target="_blank" href="https://drive.google.com/a/uncc.edu/uc?authuser=2&id=0B-M-QIiacJ27VE5CZjhVUnRTTmc&export=download" download="VikasDayanandaResume">
                <Button  className="button button5" >Download Resume</Button>
            </a>
            <Link to="/contact" >
                <Button  className="button button2">Contact</Button>
            </Link>
                <br/>
            <br/>
            <br/>


                </Body>
                </div>
                <Prev_page>Home</Prev_page>
                <Prev_icon to="/">

                    <p>⟵</p>

                </Prev_icon>
                <Next_page>Education</Next_page>
                <Next_icon to="/education">

                    <p>⟶</p>

                </Next_icon>
            </Container>
        );

    }
}
export default About_me;