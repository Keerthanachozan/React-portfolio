import React , {Component} from "react";
import styled from "styled-components";

let imgUrl = "https://cdn.pixabay.com/photo/2022/07/14/03/52/woman-7320390__340.jpg"

let Dp =styled.img`
border-radius: 50%;
height:100px;
width:100px;
border:2px solid grey;
display:block;
margin:auto;
`

let Name = styled.h1`
font-family:sans-serif;
letter-spacing:1px;
word-spacing:1px;
font-size:20px;
text-align:center;
color:white;`

class Profile extends Component{
    render(){
        return(
            <div className="profile-sec">
                <Dp src={imgUrl} alt="" />
                <Name>Keerthana</Name>
            </div>
        )
    }
}
export default Profile