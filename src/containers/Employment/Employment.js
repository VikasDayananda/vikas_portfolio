import React, { Component } from 'react';
import {Container} from 'theme/grid';
import {Header,P,Cmp_Details,Cmp_Name,Body,Emp_icon} from './Employment.style';
import {Date} from '../Education/Education.style'
import{Next_icon,Next_page,Prev_icon,Prev_page} from '../Home/Home.style';
var divStyle = {
    paddingTop:'5px'
};
class Employment extends React.Component{
    render()
    {
        return(



            <Container>
                <div className="parallax" style={divStyle}>
                    <Header>
                        Employment <Emp_icon src={require('../../assets/emp_icon.png')} alt="Uncc Logo" />
                    </Header>
                    <Body>


                    <P>


                        <Cmp_Name target="_blank" href="https://www.uncc.edu">
                            Graduate Teaching Assistant.
                        </Cmp_Name> <Date className="button1">Jan 2017 - Present</Date>

                        <br/>
                        <Cmp_Details>
                            The University of North Carolina at Charlotte<br/>

                            Branch: Computer Science<br/>
                            Course: Game Design and Development<br/>
                            Professor: Dr. Julio Bahamon<br/>
                            Duties: Assist in Lectures. Create Lecture notes and Slides. Grade Assignments, activities,exmas and projects.
                             <br/>
                        </Cmp_Details>
                    </P>

                    <P>


                        <Cmp_Name target="_blank" href="http://www.vtu.ac.in">
                           Web Application Developer- INTERN
                        </Cmp_Name><Date className="button1">Aug 2015 - Jan 2016</Date>

                        <br/>
                        <Cmp_Details>
                            BLR24.COM, India<br/>
                            Technology: C# With ASP.NET MVC Framework, MySQL, Razor Html.<br/>
                            Role: Back-end Developer and Database developer<br/>
                            This is was 6 month Internship in an e-commerce startup company called BLR24. With Team of 2, we developed working website for the company.
                       </Cmp_Details>  </P>
                    <br/>
                    </Body>
                </div>
                <Prev_page>Education</Prev_page>
                <Prev_icon to="/education">

                    <p>⟵</p>

                </Prev_icon>
                <Next_page>Projects</Next_page>
                <Next_icon to="/projects">

                    <p>⟶</p>

                </Next_icon>
            </Container>
        );

    }
}
export default Employment;