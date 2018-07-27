import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../public/styles/About.css';

const info = require("json-loader!yaml-loader!../about.yaml");

const Blurb = ({ callback }) => (
  <div>
    {info && info.blurb.map((text, idx) =>
      <p key={idx}>{text}</p>
    )}
    <div className='mailIcon' onClick={ () => callback() }>
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
    <input type='submit' value='SUBMIT' />
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
    console.log(info)
  }

  toggleContact = () => {
    this.setState({
      contact: !this.state.contact,
    });
  }

  sendMail = (data) => {
    fetch('http://localhost:8000/send_mail', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    // .then(res => res.json())
    .then(res => {
      if (res.ok) {
        console.log('yes')
        console.log(res)
      } else {
        console.log("no")
        console.log(res)
      }
    })
    .catch(err => {
      console.log("weell I meana ay")
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
      // this.setState({
      //   sent: true
      // });
      // setTimeout(() => {
      //   this.props.callback();
      // }, 3500);
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
        
      {/* We'll settle with this for now */}
        {/*<Blurb callback={ () => window.open('mailto:contact@jchow.club') } />*/}
      </main>
    )
  }
}

export default About;