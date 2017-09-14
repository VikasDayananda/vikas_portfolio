import React, { Component } from 'react';
import {Header,P, Body,Proj_Name,Proj_Details,Proj_icon} from './Projects.style';
import {Container} from 'theme/grid';
import Lightbox from 'react-image-lightbox';
import{Next_icon,Next_page,Prev_icon,Prev_page} from '../Home/Home.style';
import './img_button.css';
import Blink from 'react-blink';
import Player from 'react-player';
var divStyle = {
    paddingTop:'5px',

};
var player = {
    marginLeft:'8%',

};
var proj_link_text = {

    fontSize:'18px',
    marginLeft:'30%',

};
const bb_images = [
    require("../../assets/Project Pics/Blood bank system/1.JPG"),
    require("../../assets/Project Pics/Blood bank system/2.JPG"),
    require("../../assets/Project Pics/Blood bank system/3.JPG"),

];
const fd_images = [
    require("../../assets/Project Pics/Face Detection/1.jpg"),
    require("../../assets/Project Pics/Face Detection/2.jpg"),
    require("../../assets/Project Pics/Face Detection/3.jpg"),
    require("../../assets/Project Pics/Face Detection/4.jpg"),
    require("../../assets/Project Pics/Face Detection/5.jpg"),
    require("../../assets/Project Pics/Face Detection/6.jpg"),

];
const gsp_images = [
    require("../../assets/Project Pics/Grad School Predictor/1.JPG"),
    require("../../assets/Project Pics/Grad School Predictor/2.JPG"),

];
const sa_images = [
    require("../../assets/Project Pics/Sentimental analysis/1.jpg"),
    require("../../assets/Project Pics/Sentimental analysis/2.jpg"),
    require("../../assets/Project Pics/Sentimental analysis/3.jpg"),
    require("../../assets/Project Pics/Sentimental analysis/4.jpg"),
];
const cg_images = [
    require("../../assets/Project Pics/CG/1.jpg"),
    require("../../assets/Project Pics/CG/2.jpg"),
    require("../../assets/Project Pics/CG/3.jpg"),
    require("../../assets/Project Pics/CG/4.jpg"),
    require("../../assets/Project Pics/CG/5.jpg"),
    require("../../assets/Project Pics/CG/6.jpg"),
    require("../../assets/Project Pics/CG/7.jpg"),
    require("../../assets/Project Pics/CG/8.jpg"),
    require("../../assets/Project Pics/CG/9.jpg"),


];

class Projects extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen1: false,
            isOpen2: false,
            isOpen3: false,
            isOpen4: false,
            isOpen5: false,


        };
    }

    render()
    {
        const {
            photoIndex,
            isOpen1,isOpen2,isOpen3,isOpen4,isOpen5,
        } = this.state;

        return(
            <Container>

                <div className="parallax" style={divStyle}>

                <Header>
                    Projects  <Proj_icon src={require('../../assets/proj_icon.png')} alt="Uncc Logo" />
                </Header>
                    <p style={proj_link_text} className="flash" >( Click on Project name for Github code )</p>
                <Body>
                <P>
                    <Proj_Name  target="_blank" href="https://github.com/VikasDayananda/Blood-Bank-Application-Using-Node-with-Express.js">Blood Bank Management Web Application.</Proj_Name>
                    <Proj_Details>
                    Technology: Node with Express.Js, HTML, CSS, MongoDB<br/>
                    A Web Application used to Request and Donate Blood, Find Donors and also to educate people about blood.
                        <div>
                            <button
                                type="button" className="btn btn-3 btn-3a icon-cart"
                                onClick={() => this.setState({ isOpen1: true })}
                            >
                                Gallery
                            </button>

                            {isOpen1 &&
                            <Lightbox
                                mainSrc={bb_images[photoIndex]}
                                nextSrc={bb_images[(photoIndex + 1) % bb_images.length]}
                                prevSrc={bb_images[(photoIndex + bb_images.length - 1) % bb_images.length]}

                                onCloseRequest={() => this.setState({ isOpen1: false })}
                                onMovePrevRequest={() => this.setState({
                                    photoIndex: (photoIndex + bb_images.length - 1) % bb_images.length,
                                })}
                                onMoveNextRequest={() => this.setState({
                                    photoIndex: (photoIndex + 1) % bb_images.length,
                                })}
                            />
                            }
                        </div>
                    </Proj_Details>
                </P>
                <hr/>
                <P>
                    <Proj_Name  target="_blank" href="https://github.com/VikasDayananda/Grad-School-Predictor-R-language-">Graduate School Predictor Application.</Proj_Name>
                    <Proj_Details>
                    Technology: R Language and Shiny HTML package<br/>
                    An Application used to predict admission possibilities of a student (US citizen/International) into Graduate Schools in thousands of universities across the USA.    <br/>
                        <div>
                            <button
                                type="button" className="btn btn-3 btn-3a icon-cart"
                                onClick={() => this.setState({ isOpen2: true })}
                            >
                                Gallery
                            </button>

                            {isOpen2 &&
                            <Lightbox
                                mainSrc={gsp_images[photoIndex]}
                                nextSrc={gsp_images[(photoIndex + 1) % gsp_images.length]}
                                prevSrc={gsp_images[(photoIndex + gsp_images.length - 1) % gsp_images.length]}

                                onCloseRequest={() => this.setState({ isOpen2: false })}
                                onMovePrevRequest={() => this.setState({
                                    photoIndex: (photoIndex + gsp_images.length - 1) % gsp_images.length,
                                })}
                                onMoveNextRequest={() => this.setState({
                                    photoIndex: (photoIndex + 1) % gsp_images.length,
                                })}
                            />
                            }
                        </div>   </Proj_Details>

                </P>
                <hr/>
                <P>
                    <Proj_Name  target="_blank" href="https://github.com/VikasDayananda/Face-Detection-Using-PHP-and-Kairos-Api"> Face Detection System Web Application.</Proj_Name>
                    <Proj_Details>
                    Technology: PHP, MySQL and Kairos API.<br/>
                    An Application for intelligence agencies and police department to store and retrieve criminal records and identifying criminals by scanning images.      <br/>
                        <div>
                            <button
                                type="button" className="btn btn-3 btn-3a icon-cart"
                                onClick={() => this.setState({ isOpen3: true })}
                            >
                                Gallery
                            </button>

                            {isOpen3 &&
                            <Lightbox
                                mainSrc={fd_images[photoIndex]}
                                nextSrc={fd_images[(photoIndex + 1) % fd_images.length]}
                                prevSrc={fd_images[(photoIndex + fd_images.length - 1) % fd_images.length]}

                                onCloseRequest={() => this.setState({ isOpen3: false })}
                                onMovePrevRequest={() => this.setState({
                                    photoIndex: (photoIndex + fd_images.length - 1) % fd_images.length,
                                })}
                                onMoveNextRequest={() => this.setState({
                                    photoIndex: (photoIndex + 1) % fd_images.length,
                                })}
                            />
                            }
                        </div> </Proj_Details>

                </P>
                <hr/>
                <P>
                    <Proj_Name target="_blank" href="https://github.com/VikasDayananda/Classification-of-Saatchi-Art-Paintings-Based-on-Price--Weka--R--Python"> Classification of ‘Saatchi Art’ Paintings.</Proj_Name>
                    <Proj_Details>
                    Technology: Python, R Language, Weka tool.<br/>
                    •	Developed a code to classify paintings based on price with high precision.      <br/>
                    •	Classification Algorithms such as J48, Naive Bayes, and Random Forest was applied.<br/>
                    •	Python was used to scrap data, R language to pre-process and Weka tool was used to classify.<br/>
                    </Proj_Details>

                </P> <hr/>
                <P>
                    <Proj_Name  target="_blank" href="https://github.com/VikasDayananda/SendSpace--Air-Luggage-Sharing-System">Flight Luggage Sharing System Application.</Proj_Name>
                    <br/>
                    <Proj_Details>
                    Technology: MySQL, Java, Servlets, Html, Java Script, JQuery and Ajax.<br/>
                    •	Web based application to facilitate baggage sharing between flight passengers.   </Proj_Details>

                </P>
                <hr/>
                <P>
                    <Proj_Name  target="_blank" href="https://github.com/VikasDayananda/Sentiment-Analysis-on-Tweets">Sentimental Classification of tweets.</Proj_Name>
                    <Proj_Details>
                    Technology: JAVA, HTML,  MySQL, HADOOP.<br/>
                    •	An Application used to dynamically fetch the tweets from the twitter and use Hadoop tool to perform sentimental analysis on the tweets to obtain reviews (positive, negative or neutral) of the product.      <br/>
                    •	Published a paper on the same in “National Conference on Convergence of Science , Technology & Management (NCCSTM-2016)<br/>
                        <div> <button
                            type="button" className="btn btn-3 btn-3a icon-cart"
                            onClick={() => this.setState({ isOpen4: true })}
                        >
                            Gallery
                        </button>

                        {isOpen4 &&
                        <Lightbox
                            mainSrc={sa_images[photoIndex]}
                            nextSrc={sa_images[(photoIndex + 1) % sa_images.length]}
                            prevSrc={sa_images[(photoIndex + sa_images.length - 1) % sa_images.length]}

                            onCloseRequest={() => this.setState({ isOpen4: false })}
                            onMovePrevRequest={() => this.setState({
                                photoIndex: (photoIndex + sa_images.length - 1) % sa_images.length,
                            })}
                            onMoveNextRequest={() => this.setState({
                                photoIndex: (photoIndex + 1) % sa_images.length,
                            })}
                        />
                        }
                </div>  </Proj_Details>
                </P>
                <hr/>
                <P>
                    <Proj_Name target="_blank" href="https://sites.google.com/view/clandestinegame"> CLANDESTINE GAME.  <span  className="flash" >( Click for game website )</span></Proj_Name>
                    <Proj_Details>
                    Technology: RPG MAKER MV and JavaScript<br/>
                    •	A 2.5D RPG game made in RPG MAKER MV as the term project in the game design and development class.
                    This game was awarded as the best project in the class.
                    <br/>
                        <Player style={player} url="https://www.youtube.com/watch?v=8uVFRKpGFgw" controls />

                        <a target="_blank" href="https://drive.google.com/file/d/0B31c1R7ZNgovMUVLbW82WndWV1k/view">  <button className="btn-d btn-2 btn-2a icon-download" >Download (MAC) </button></a>
                        <a target="_blank" href="https://drive.google.com/file/d/0B31c1R7ZNgovSHhGV05GYXNyT0k/view">     <button className="btn-d btn-2 btn-2a icon-download" >Download (PC) </button></a>


                    </Proj_Details> </P> <hr/>
                <P>
                    <Proj_Name  target="_blank" href="https://github.com/VikasDayananda/Cups-and-Ball-OpenGL-Game-"> 3 CUPS & A BALL.</Proj_Name>
                    <Proj_Details>
                    Technology: OPENGL<br/>
                    •	An interactive 3D game with many levels and scoreboard using OpenGL libraries with C, Computer Graphics <br/>
                        <div>
                            <button
                                type="button" className="btn btn-3 btn-3a icon-cart"
                                onClick={() => this.setState({ isOpen5: true })}
                            >
                                Gallery
                            </button>

                            {isOpen5 &&
                            <Lightbox
                                mainSrc={cg_images[photoIndex]}
                                nextSrc={cg_images[(photoIndex + 1) % cg_images.length]}
                                prevSrc={cg_images[(photoIndex + cg_images.length - 1) % cg_images.length]}

                                onCloseRequest={() => this.setState({ isOpen5: false })}
                                onMovePrevRequest={() => this.setState({
                                    photoIndex: (photoIndex + cg_images.length - 1) % cg_images.length,
                                })}
                                onMoveNextRequest={() => this.setState({
                                    photoIndex: (photoIndex + 1) % cg_images.length,
                                })}
                            />
                            }
                        </div></Proj_Details>

                </P> <hr/>
                </Body>
                </div>
                <Prev_page>Employment</Prev_page>
                <Prev_icon to="/employment">

                    <p>⟵</p>

                </Prev_icon>
                <Next_page>Skills</Next_page>
                <Next_icon to="/skills">

                    <p>⟶</p>

                </Next_icon>
            </Container>
        );

    }
}

export default Projects;