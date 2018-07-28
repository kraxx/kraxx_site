import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../public/styles/About.css';

const info = require("json-loader!yaml-loader!../about.yaml");

const Blurb = ({ callback }) => (
  <div>
    {info && info.blurb.map((text, idx) =>
      <p key={idx}>{text}</p>
    )}
    <div className='mailIcon squareIcon' onClick={ () => callback() }>
      <FontAwesomeIcon icon={['far', 'envelope']} />
    </div>
  </div>
)

const Contact = ({ callback, error }) => (
  <form onSubmit={ e => callback(e) }>
    <label htmlFor='name'>Name:  &nbsp;</label>
    <input type='text' name='name' />
    <br />
    <label htmlFor='email'>Email: </label>
    <input type='text' name='email' />
    <br />
    <label htmlFor='message'>Message: </label>
    <br />
    <textarea name='message' maxLength='5000' />
    <br />
    <button type='submit'>
      <FontAwesomeIcon icon={['fas', 'paper-plane']} />
    </button>
    {error && <p>Please fill out all fields.</p>}
  </form>
)

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contact: false,
      sent: false,
      error: false
    };
  }

  toggleContact = () => {
    this.setState({
      contact: !this.state.contact,
    });
  }

  sendMail = (data) => {
    fetch(info.email_service, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(res => {
      // I'm unsure what to do with this
      if (res.ok) {
      } else {
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let name = e.target.name.value;
    let email = e.target.email.value;
    let message = e.target.message.value;

    if (name !== '' && email !== '' && message !== '') {

      this.sendMail({
        name: name,
        email: email,
        message: message
      });
      this.setState({
        sent: true
      });
      setTimeout(() => {
        this.props.callback();
      }, 3500);
    } else {
      this.setState({
        error: true
      });
    }
  }

  render() {
    return (
      <main className='about'>
        {this.state.sent
          ? <p>Message sent!</p>
          : (this.state.contact
            ? <Contact callback={ e => this.handleSubmit(e) } error={this.state.error} />
            : <Blurb callback={ () => this.toggleContact() } />)
        }
      </main>
    )
  }
}

export default About;