import React, { Component, PropTypes } from 'react';
import '../Projects/img_button.css';


class Button extends Component {

    static propTypes = {
        email: PropTypes.string.isRequired,
        formValues: PropTypes.shape({
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
            subject: PropTypes.string.isRequired,


        }).isRequired,

    };

    constructor(props) {
        super(props);
        this.state = {
            showMe: false,
        };
        this.logFormDataToConsole =
            this.logFormDataToConsole.bind(this);
    }

    logFormDataToConsole() {
        this.setState({showMe: true});

        const msg = {
            to: 'vikas.dayananda@gmail.com',
            from: `${this.props.formValues.email}`,
            subject: `${this.props.formValues.subject}`,
            text: `${this.props.formValues.message}`,
            // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };
        // sgMail.send(msg);


    }

    render() {
        if (this.state.showMe) {
            return (
                <input type="button" disabled={true} className="btn" name="mail" value="Sent"/>);

        } else {
            return (
                <input type="button" className="btn btn-2" name="mail"
                       onClick={this.logFormDataToConsole} value="Send Mail"/>

            );
        }
    }
}

export default Button;