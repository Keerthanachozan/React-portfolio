import React, { Component } from 'react'
import EmailIcon from '@material-ui/icons/Email';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AssessmentIcon from '@material-ui/icons/Assessment';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import FlareIcon from '@material-ui/icons/Flare';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

export default class Services extends Component {
  render() {
    return (
      <div className='service'>
        <div className='services'>
          <h1>Service</h1>
          <hr/>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
          <div className='services1'>
          <EmailIcon className='email'/>
            <div className='lorem'>
              <h3>Lorem Ipsum</h3>
              <p className='para'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non providen</p>
            </div>
            <ListAltIcon className='list'/>
            <div className='dolor'>
              <h3>Dolor Sitema</h3>
              <p className='para'>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
            <AssessmentIcon className='assess'/>
            <div className='sed'>
              <h3>Sed ut perspiciatis</h3>
              <p className='para'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>
            <div className='services2'>
            <StrikethroughSIcon className='strike'/>
              <div className='magni'>
                <h3>Magni Dolores</h3>
                <p className='para'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
              <FlareIcon className='flare'/>
              <div className='nemo'>
                <h3>Nemo Enim</h3>
                <p className='para'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </div>
              <AssignmentIndIcon className='assign'/>
              <div className='eiusmod'>
                <h3>Eiusmod Tempor</h3>
                <p className='para'>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
              </div>
            </div>
      </div>
    )
  }
}
