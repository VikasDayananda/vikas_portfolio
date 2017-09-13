import React, { Component } from 'react';
import {Container} from 'theme/grid';
import {Header,Skill_icon,Image,Skil_Details,Skill_Name,P} from './Skills.style';
import{Next_icon,Next_page,Prev_icon,Prev_page} from '../Home/Home.style';
var divStyle = {
    paddingTop:'5px'
};
class Skills extends React.Component{
    render()
    {
        return(
            // <Container>
            //     <div className="parallax" style={divStyle}>
            //         <Header>
            //             Skills  <Skill_icon src={require('../../assets/proj_icon.png')} alt="Uncc Logo" />
            //         </Header>
            //         <Image src={require('../../assets/skills.jpg')} alt="hero-image" />
            //     </div>
            // </Container>
            <Container>
                <div className="parallax" style={divStyle}>
                    <Header>
                        Skills <Skill_icon src={require('../../assets/skills_icon.png')} alt="Uncc Logo" />
                    </Header>
                    <Image src={require('../../assets/skills.jpg')} alt="hero-image" />
                <br/>
                    <P>These are the skills i have acquired over years by education, experience, and my projects.</P>
                    <Skill_Name>PROGRAMMING LANGUAGES</Skill_Name>
                    <Skil_Details>
                        <ol>
                            <li>C</li>
                            <li>C#</li>
                            <li>JAVA</li>
                            <li>R</li>
                        </ol>
                    </Skil_Details>
                    <Skill_Name>Web Technologies</Skill_Name>
                    <Skil_Details>
                        <ol>
                            <li>React</li>
                            <li>Node</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JQuery</li>
                            <li>BootStrap</li>
                        </ol>
                    </Skil_Details>
                    <Skill_Name>Scripting Languages</Skill_Name>
                    <Skil_Details>
                        <ol>
                            <li>JavaScript</li>
                            <li>PHP</li>

                        </ol>
                    </Skil_Details>
                    <Skill_Name>Database Technologies</Skill_Name>
                    <Skil_Details>
                        <ol>
                            <li>MySql</li>
                            <li>MongoDB</li>
                            <li>SQL SERVER</li>
                        </ol>
                    </Skil_Details>
                    <Skill_Name>Cloud Technologies</Skill_Name>
                    <Skil_Details>
                        <ol>
                            <li>Hadoop</li>
                            <li>Spark</li>
                            <li>HIVE</li>
                        </ol>
                    </Skil_Details>
                    <Skill_Name>Frameworks</Skill_Name>
                    <Skil_Details>
                        <ol>
                            <li>Spring</li>
                            <li>MVC</li>
                            <li>ASP.NET</li>
                        </ol>
                    </Skil_Details>

                <Skill_Name>Software Methodologies</Skill_Name>
                <Skil_Details>
                    <ol>
                        <li>Agile</li>
                        <li>Waterfall</li>

                    </ol>
                </Skil_Details>
                <Skill_Name>Tools and IDE's</Skill_Name>
                <Skil_Details>
                    <ol>
                        <li>MS Office</li>
                        <li>Eclipse</li>
                        <li>Visual Studio</li>
                        <li>Visual Basic</li>
                        <li>Tableau</li>
                        <li>Weka</li>
                        <li>Adobe Photoshop</li>
                        <li>JetBrains</li>

                    </ol>
                </Skil_Details>
                    <Skill_Name>Game Development and Graphics Technologies</Skill_Name>
                    <Skil_Details>
                        <ol>
                            <li>OpenGL</li>
                            <li>WebGL</li>
                            <li>GameMaker</li>
                            <li>Unity 3D</li>
                            <li>RPG Maker</li>
                        </ol>
                    </Skil_Details>


                    <P> I am expert in Windows and MAC. I am novice to UNIX systems. I am always ready to learn new technologies.</P>
                    <br/> </div>
                <Prev_page>Projects</Prev_page>
                <Prev_icon to="/projects">

                    <p>⟵</p>

                </Prev_icon>
                <Next_page>Contact</Next_page>
                <Next_icon to="/contact">

                    <p>⟶</p>

                </Next_icon>
            </Container>
        );

    }
}
export default Skills;