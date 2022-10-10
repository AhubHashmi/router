import { useNavigate } from "react-router-dom";
import React from 'react'

function Contact() {
    const navigate = useNavigate()

    let clickEv = () => {

        navigate('/')
    }
    let clickev = () => {

        navigate('/service')
    }

    return (
        // <>
        //   <h1 class="contact" id="contact">Contact</h1>
        //   <button onClick={clickEv}>Go to Home</button>
        //   <button onClick={clickev}>Go to Service</button>
        // </>
        //     <div className="app__header app__wrapper section__padding" id="home">
        //   <div className="app__wrapper_info">
        //     {/* <SubHeading title="Chase the new flavour" /> */}
        //     <h1 class="contact" id="contact">Contact</h1>
        //     <button onClick={clickEv}>Go to Home</button>
        //     <button onClick={clickev}>Go to Service</button>
        //     <h1 className="app__header-h1">The Key To Fine Dining</h1>
        //     <p className="p__opensans" style={{ margin: "2rem 0" }}>
        //       Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        //       morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        //       tellus{"abc "}
        //     </p>
        //     <button type="button" className="custom__button">
        //       Explore Menu
        //     </button>
        //   </div>

        //   <div className="app__wrapper_img">
        //     <img src="https://gerichtdeutch.netlify.app/static/media/findus.585c393ccd3671513743.png" alt="header_img" />
        //   </div>
        // </div>

        <
        div className = "app__bg app__wrapper section__padding"
        id = "contact" >
        <
        div className = "app__wrapper_info" > { /* <SubHeading title="Contact" /> */ } <
        h1 class = "contact"
        id = "contact" > Contact < /h1> <
        button onClick = { clickEv } > Go to Home < /button> <
        button onClick = { clickev } > Go to Service < /button> <
        h1 className = "headtext__cormorant"
        style = {
            { marginBottom: "3rem" } } >
        Find Us <
        /h1> <
        div className = "app__wrapper-content" >
        <
        p className = "p__opensans" >
        Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75 G <
        /p> <
        p className = "p__cormorant"
        style = {
            { color: "#DCCA87", margin: "2rem 0" } } >
        Opening Hours <
        /p> <
        p className = "p__opensans" > Mon - Fri: 10: 00 am - 02: 00 am < /p> <
        p className = "p__opensans" > Sat - Sun: 10: 00 am - 03: 00 am < /p> <
        /div> <
        button type = "button"
        className = "custom__button"
        style = {
            { marginTop: "2rem" } } >
        Visit Us <
        /button> <
        /div> <
        br / >
        <
        div className = "app__wrapper_img" >
        <
        img src = "https://gerichtdeutch.netlify.app/static/media/findus.585c393ccd3671513743.png"
        alt = "finus_img" / >
        <
        /div> <
        /div>
    );
}
export default Contact;