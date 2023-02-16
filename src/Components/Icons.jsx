import React, { Component } from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
export default class Icons extends Component {
  render() {
    return (
      <div>
      <ul>
      <li><TwitterIcon/> </li>
      <li><InstagramIcon/></li>
      <li><FacebookIcon/></li>
      <li><WhatsAppIcon/></li>
      <li><LinkedInIcon/></li>
      </ul>
      </div>
    )
  }
}
