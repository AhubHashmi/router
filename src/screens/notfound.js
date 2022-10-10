import { useNavigate } from "react-router-dom";
import React from 'react'

function NotFound() {
    const navigate = useNavigate()

    let clickEv = () => {

        navigate('/')
    }
    let clickev = () => {

        navigate('/service')
    }

    return (
        // <>
        //   <h1 class="notfound" id="profile">Not Found</h1>
        //   <button onClick={clickEv}>Go to Home</button>
        //   <button onClick={clickev}>Go to Service</button>
        // </>

        <
        div className = "app__header app__wrapper section__padding"
        id = "home" >
        <
        div className = "app__wrapper_info" > { /* <SubHeading title="Chase the new flavour" /> */ } <
        h1 class = "notfound"
        id = "profile" > Not Found < /h1> <
        button onClick = { clickEv } > Go to Home < /button> <
        button onClick = { clickev } > Go to Service < /button> <
        h1 className = "app__header-h1" > Page Not Found, Sorry! < /h1> <
        p className = "p__opensans"
        style = {
            { margin: "1rem 0" } } >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quis pharetra adipiscing ultrices vulputate posuere tristique.In sed odio nec aliquet eu proin mauris et. <
        /p> <
        button type = "button"
        className = "custom__button" >
        Order <
        /button> <
        /div> <
        br / >
        <
        div className = "app__wrapper_img" >
        <
        img src = "https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png"
        alt = "header_img" / >
        <
        /div> <
        /div>
    );
}
export default NotFound