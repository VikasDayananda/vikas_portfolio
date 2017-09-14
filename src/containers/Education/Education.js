import React, { Component } from 'react';

import {Container} from 'theme/grid';
import {Header,P,Uni_Name,Crown,Uni_Details,Dsi,Body,Date} from './Education.style';
import{Next_icon,Next_page,Prev_icon,Prev_page} from '../Home/Home.style';
import './Date_Btn.css';
import '../Projects/img_button.css';
import '../About_me/paralax.css';
var divStyle = {
    paddingTop:'5px'
};
var degree_font={
    fontFamily:"Times New Roman",
    fontSize:'22px',
    fontWeight: 'bold',

}
var major_font={
    fontFamily:"Arial",
    fontSize:'18px',
    fontWeight: 'bold',
    color:'#635b5b',

}
var details_font={
    fontSize:'18px',
    color:'#383535'

}


var Results = React.createClass({
    render: function() {
        return (
            <div id="results" className="search-results">
                <ol>
                    <li>   Algorithm and Data Structures</li>
                    <li> Software System Design and Implementation</li>
                    <li> Cloud Computing for Data Analysis</li>
                    <li>Business Intelligence and Analysis.</li>
                    <li> Database systems</li>
                    <li> Knowledge Discovery in Databases</li>
                    <li>Network Based Application Development</li>

                    <li> Survey of Programming Languages</li>
                    <li>Computer Graphics</li>
                    <li> Game Design and Development</li>
                </ol></div>
        );
    }
});

class Education extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showResults: '',
        };
        this.onClick = this.onClick.bind(this);
    }
    getInitialState() {
    return { showResults: false };
}
    onClick() {
    this.setState({ showResults: true });
}
    render()
    {
        return(



                <Container>
                    <div className="parallax" style={divStyle}>
                    <Header>
                    Education  <Crown src={require('../../assets/edu_icon.png')} alt="Uncc Logo" />
                    </Header>
                    <Body>


                                <P>

                                        <Crown src={require('../../assets/uncc.png')} alt="Uncc Logo" />
                                            <Uni_Name target="_blank" href="https://www.uncc.edu">
                                      The University of North Carolina at Charlotte (UNCC). </Uni_Name> <Date className="button1">Aug 2016 - Dec 2017</Date>

                                    <Uni_Details >
                                        <span style={degree_font}> Master of Science (MS)</span><br/>


                                    <span style={major_font}>Computer Science</span> <br/>
                                            <span style={details_font}>
                        Specialization: Data Science and Analytics.<br/>
                        Award: Graduate Teaching Assistant<br/>
                                                GPA: 3.75<br/>
                                                <span  onClick={this.onClick}> CourseWork(<b className="flash"> Click to View </b>) >>
                                             { this.state.showResults ? <Results /> : null }</span></span>
                                            <br/></Uni_Details>


                                </P>

                                <P>

                                    <Dsi src="http://via.placeholder.com/40x35" alt="DSI Logo" />
                                    <Uni_Name target="_blank" href="http://www.vtu.ac.in">
                                        Visvesvaraya Technological University (VTU).
                                    </Uni_Name> <Date className="button1"> Aug 2012 - Jun 2016 </Date>

                                    <br/>
                                    <Uni_Details>
                                        <span style={degree_font}>   Bachelor of Engineering (BE )</span><br/>
                                        <span style={major_font}>   Computer Science and Engineering.</span><br/>
                                        <span style={details_font}>  GPA: 3.70<br/>
                        I took various courses covering broad topics in computer science and software development, particularly in data science.<br/>
                                        </span>  <br/><br/></Uni_Details>  </P>

                    </Body>
                    </div>
                    <Prev_page>About me</Prev_page>
                    <Prev_icon to="/about">

                        <p>⟵</p>

                    </Prev_icon>
                    <Next_page>Employment</Next_page>
                    <Next_icon to="/employment">

                        <p>⟶</p>

                    </Next_icon>

                 </Container>
        );

    }
}
export default Education;