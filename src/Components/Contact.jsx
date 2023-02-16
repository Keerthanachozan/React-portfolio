import React, { Component } from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';

export default class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <div className='contacts'>
        <h1>Contact</h1>
        <hr/>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className='group'>
        <div className='contacts1'>
          <LocationOnIcon className='contactaddress'/>
          <h3>Location:</h3>
          <p>Bangalore,Karnataka 560036</p>
          <EmailIcon className='contactaddress'/>
          <h3>Email:</h3>
          <p>keerthanachozan170599@gmail.com</p>
          <CallIcon className='contactaddress'/>
          <h3>Call:</h3>
          <p>9952248175</p>
        </div>
        <div className='contacts2'>
          <label htmlFor="">Your Name</label>
          <label htmlFor="" className='label'>Subject</label><br /><br />
          <input type="text" /> 
          <input type="text" /><br /><br /><br />
          <label htmlFor="">Message</label><br /><br />
          <textarea name="" id="" cols="50" rows="10"></textarea>
          <button>Send Message</button>

        </div>
      </div>
      </div>
    )
  }
}
