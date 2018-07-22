import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../public/styles/About.css';

const Blurb = ({ callback }) => (
  <div>
    <p>Hi, I'm Justin, a software polyglot. I love working with Web technologies!</p>
    <p>Feel free to contact me!</p>
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
  }

  toggleContact = () => {
    this.setState({
      contact: !this.state.contact,
    });
  }

  sendMail = (e) => {
    e.preventDefault();

    let name = e.target.name.value;
    let email = e.target.email.value;
    let message = e.target.message.value;

    if (name !== '' && email !== '' && message !== '') {
      // send mail
      this.setState({
        sent: true
      });
      setTimeout(() => {
        this.props.callback();
      }, 2500);
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
            ? <Contact callback={ e => this.sendMail(e) } error={this.state.error} />
            : <Blurb callback={ () => this.toggleContact() } />)
        }
      </main>
    )
  }
}

export default About;