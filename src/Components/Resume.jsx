import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (
      <div className='resume'>
          <div className='resumes'>
            <h1>Resume</h1>
            <hr/>
            <p>A Master Degree in ComputerApplication looking forward to applying to software development roles. Seeking an opportunity to apply my initiative, enthusiasm, and add value to the organization, and
                enhance my skills through continuous learning and adaptability to the changing requirements of customers and the technology environment.</p>          
          </div>
          <br />
          <div className='section1'>

              <div className='summary'>
                  <h2>Summary</h2>
                  <h4>KEERTHANA</h4>
                  <p>Seeking to expand my horizons and develop my acquired and new skills in the field of Software development and applications and work in dynamic organizations that provide opportunities to challenge my skill and growth. A good Team player and willing to learn new technologies.</p>
                    <li>Bangalore,Karnataka</li>
                    <li>(91) 9952248175</li>
                    <li>keerthanachozan170599@gmail.com</li>
                    <div className='education'>
                      <h2>Education</h2>
                      <h4>MASTER OF COMPUTER APPLICATIONS</h4> 
                      <label htmlFor="">2019 - 2021</label>
                      <p><i> Cambridge Institute of Technology, Bangalore, India</i></p> 
                       <p>Visvesvaraya Technology University- Karnataka. <br /> My percentage is 74%.</p>
                    </div><br />
                    <div className='education1'>
                      <h4>BACHELOR OF SCIENCE</h4>
                      <label htmlFor="">2016 - 2019</label>
                      <p><i> SCSVMV University, Kancheepuram, India</i></p>
                      <p> SCSVMV University-Tamilnadu. <br />My percentage is 82%.</p>
                    </div>
              </div>

              <div className='summary1'>
                  <h2>Professional Experience</h2>
                  <h4>INTERNSHIP</h4>
                  <label htmlFor="">2021</label>
                  <p>Bangalore,Karnataka</p>
                  <h3>Automatic Number Plate Recognition System</h3>
                  <li>Text recognition in images and Automatic Number Plate Recognition (ANPR) is an exceptional
                      type of Optical Character Recognition (OCR).</li><br />
                  <li>ANPR is a image handling innovation which distinguishes the vehicle from its number plate consequently by advanced pictures.</li><br />
                  <li>The following Modules are used.</li><br />
                    <li>Loading Images</li>
                    <li>Training Data</li>
                    <li>Building the Model</li>
                    <li>Image Feature extraction</li>
                    <li>Recognition</li>
                  <br /><br />
                  <div className='education3'>
                    <h4>MERN STACK COURSE</h4>
                    <label htmlFor="">2022 - Present</label>
                    <p><i>Bangalore,Karnataka</i></p>
                    <li>I have completed web development(Html , Css , Javascript , React JS) course in Jspider,Hebbal</li><br />
                    <li>Using these skills, i have created websites.</li><br />
                    <li>Frozen yogurt , Bootstrap , DCR websites. </li><br />
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
