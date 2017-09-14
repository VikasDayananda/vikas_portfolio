import React, { Component } from 'react';
import {Container} from 'theme/grid';
import Field from './Field';
import Textarea from './Textarea';
import Button from './Button';
import {Contact_Form, Border,Contact_Form_Name,Contact_Form_Message,Contact_Form_Button,Contact_icon,Header} from './Contact_Form.style';
import './Contact.css';


import{Next_icon,Next_page,Prev_icon,Prev_page,Social,Media_icons,Icon} from '../Home/Home.style';
var style1={

    height: '25px',
    width: '275px',
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderWidth: '0px 0px 1px 0px',
    borderColor: "darkred",
    outline:0

};
var table_style={
    marginTop:'-35px'
}

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            email:'',
            subject:'',
            message:'',
        };
        this.updateField=this.updateField.bind(this);
    }
    updateField(field,value){
        this.setState({[field]:value});

    }
    render()
    {
        return(
            <Container>

                <Border>

                    <Header>Contact Me <Contact_icon src={require('../../assets/contact_icon.png')} alt="Uncc Logo" /></Header>
                    <table style={table_style}>
                        <tbody>
                        <tr>
                            <td>
                <Contact_Form_Name>
                <Field  label="Name" onChange={(event)=>this.updateField('name',event.target.value)} value={this.state.name} />

                </Contact_Form_Name></td>
                            <td>
                                <Contact_Form_Name>
                                    <Field label="Email" style={style1} onChange={(event)=>this.updateField('email',event.target.value)} value={this.state.email} />
                                </Contact_Form_Name>
                  </td>
                    </tr>
                        </tbody>
                </table>
                    <Contact_Form_Name>
                        <Field  label="Subject" onChange={(event)=>this.updateField('subject',event.target.value)} value={this.state.subject} />
                    </Contact_Form_Name>
                    <Contact_Form_Message>
                <Textarea  label="Message"  onChange={(event)=>this.updateField('message',event.target.value)}
                        value={this.state.message} />
                    </Contact_Form_Message>
                <Contact_Form_Button>
                <Button formValues={this.state} email="vikas.dayananda@gmail.com" />
                </Contact_Form_Button>
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

                <Prev_page>Skils</Prev_page>
                <Prev_icon to="/skills">

                    <p>⟵</p>

                </Prev_icon>
            </Container>
        );

    }
}
export default Contact;