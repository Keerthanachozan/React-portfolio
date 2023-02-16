import React, { Component } from 'react'

let styles ={
  textAlign :"center",
  fontFamily : "sans-serif"
}
export default class Copyright extends Component {
  render() {
    return (
      <div style={{lineHeight:"10px", marginTop:"80px" }}>
        <p style={styles}><small>&copy; copyright Myportfolio</small></p>
        <p style={styles}><small>Designed by keerthana</small></p>
      </div>
    )
  }
}
