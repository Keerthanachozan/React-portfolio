import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'; 
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

class Navlinks extends Component {
  render() {
    return (
      <div className='navlinks'>
        <div>
         <NavLink to="/home" className="navlink">
         <HomeIcon/>
          &nbsp; Home
         </NavLink>
        </div>

        <div>
         <NavLink to="/about"  className="navlink">
        <PersonIcon/>
         &nbsp; About
         </NavLink>
        </div>

        <div>
         <NavLink to="/resume"  className="navlink">
         <FileCopyIcon/>
         &nbsp; Resume
         </NavLink>
        </div>

        <div>
         <NavLink to="/portfolio"  className="navlink">
         <ImportContactsIcon/>
         &nbsp; Portfolio
         </NavLink>
        </div>

        <div>
         <NavLink to="/services"  className="navlink">
         <SettingsApplicationsIcon/>
         &nbsp; Services
         </NavLink>
        </div>

        <div>
         <NavLink to="/contact"  className="navlink">
         <MailOutlineIcon/>
         &nbsp; Contact
         </NavLink>
        </div>
      </div>
    )
  }
}

export default Navlinks;