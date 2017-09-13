import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {Container} from 'theme/grid';
import {Image, imageButton,  Details, Icon,Border,Social,Media_icons, Background, RevealP,Next_page,Next_icon} from './Home.style';
import Zoomy from 'react-zoomy';
import Wheninview from "../../components/wheninview/wheninview";
import {Link} from 'react-router';

export default class Home extends Component {
    static propTypes = {};

    render() {
        return (

            <Container>
                <Border>


                <Zoomy
                    imageUrl={require('assets/viky.JPG')}
                    renderThumbnail={({showImage}) =>

                            <Image src={require('../../assets/viky.JPG')} alt="hero-image" onClick={showImage} />

                    }
                    scale={[1.1, 1.1]}
                    imageProps={{
                        style: {
                            width: '100vw',
                            height: 'auto'
                        }
                    }}
                />

                <Details>
                    Vikas Dayananda<br/>
                    <br/>


                    Phone: <br/>980-250-3171
                    <br/>
                    <br/>

                    Email: <br/>vikas.dayananda@gmail.com<br/>
                    <br/>

                    Address: <br/>209 Barton Creek Drive<br/> Apt B,
                             Charlotte, NC 28262.<br/>
                    <br/>


                </Details>

                </Border>

                <br/>
            <Social>
                <Media_icons>
                    <a href="https://www.linkedin.com/in/vikasd94/" target="_blank">
                   <Icon src={require('../../assets/in.png')}  />
                    </a>
                    <a href="https://github.com/VikasDayananda" target="_blank">
                        <Icon src={require('../../assets/git.png')}  />
                    </a>
                    <a href="https://www.facebook.com/viky.vikaslive" target="_blank">
                        <Icon src={require('../../assets/fb.png')}  />
                    </a>
                    <a href="https://www.instagram.com/vikyvikas/" target="_blank">
                        <Icon src={require('../../assets/insta.png')}  />
                    </a>
                </Media_icons>

            </Social>
                {/*
                <Wheninview>
                    {({isInView}) =>
                        <RevealP hide={isInView}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione rem nobis dolorum eius autem alias optio veniam totam voluptatibus a, ipsa blanditiis quisquam dolores molestias, similique laboriosam iste suscipit magnam maxime quia ut. Unde quam eaque magni doloribus cum harum adipisci minus ipsam, maxime. Facere itaque, similique esse repudiandae cum corrupti ullam ipsam! Dolor necessitatibus earum atque aut, hic molestias tempora!
                        </RevealP>
                    }
                </Wheninview>
                <Wheninview>
                    {({isInView}) =>
                        <RevealP hide={!isInView}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione rem nobis dolorum eius autem alias optio veniam totam voluptatibus a, ipsa blanditiis quisquam dolores molestias, similique laboriosam iste suscipit magnam maxime quia ut. Unde quam eaque magni doloribus cum harum adipisci minus ipsam, maxime. Facere itaque, similique esse repudiandae cum corrupti ullam ipsam! Dolor necessitatibus earum atque aut, hic molestias tempora!
                        </RevealP>
                    }
                </Wheninview>
                <Wheninview>
                    {({isInView}) =>
                        <RevealP hide={!isInView}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione rem nobis dolorum eius autem alias optio veniam totam voluptatibus a, ipsa blanditiis quisquam dolores molestias, similique laboriosam iste suscipit magnam maxime quia ut. Unde quam eaque magni doloribus cum harum adipisci minus ipsam, maxime. Facere itaque, similique esse repudiandae cum corrupti ullam ipsam! Dolor necessitatibus earum atque aut, hic molestias tempora!
                        </RevealP>
                    }
                </Wheninview>
          */}

          <Next_page>About me</Next_page>
          <Next_icon to="/about">

             <p>⟶</p>

          </Next_icon>


            </Container>

        );
    }
}