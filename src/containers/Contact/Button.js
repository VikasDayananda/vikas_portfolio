import React, { Component, PropTypes } from 'react';

class Button extends Component{
    static propTypes={
        email:PropTypes.string.isRequired,
        formValues:PropTypes.shape({
            name:PropTypes.string.isRequired,
            email:PropTypes.string.isRequired,
            message:PropTypes.string.isRequired,
            subject:PropTypes.string.isRequired,


        }).isRequired,

    };
    constructor(props){
        super(props);
        this.state={
            isClicked:false,
        };
        this.logFormDataToConsole=
            this.logFormDataToConsole.bind(this);
    }
    logFormDataToConsole(event){
        console.log('Form Values', this.props.formValues);
        this.setState({isClicked:true });
    }
    render()
    {
        const recipient= `mailto:${this.props.email}`;
        const subject = `?subject=${this.props.subject}`;
        const body=`&body=${this.props.formValues.message}`;
        return(
          <button disabled={this.state.isClicked}
                  onClick={this.logFormDataToConsole} >
              <a
              href={`${recipient}${subject}${body}` }style={{ textDecoration: 'none' }}

              >Send Mail</a>

          </button>
        );
    }
}

export default Button;