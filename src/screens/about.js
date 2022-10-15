import { useNavigate } from "react-router-dom";
import React from 'react'

function About() {
    const navigate = useNavigate()

    let clickEv = () => {

        navigate('/')
    }
    let clickev = () => {

        navigate('/contact')
    }
    return (
        // <>
        //   <h1 class="about" id="about">About</h1>

        //   <button onClick={clickEv}>Go to Home</button>
        //   <button onClick={clickev}>Go to Contact</button>
        // </>
        //     <div
        //   className="app__aboutus app__bg flex__center section__padding"
        //   id="about"
        // >
        //   <div className="app__aboutus-overlay flex__center">
        //     <img src="src\G.png" alt="G_overlay" />
        //   </div>

        //   <div className="app__aboutus-content flex__center">
        //     <div className="app__aboutus-content_about">
        //     <h1 class="about" id="about">About</h1>

        //       <button onClick={clickEv}>Go to Home</button>
        //       <button onClick={clickev}>Go to Contact</button>
        //       <h1 className="headtext__cormorant">About Us</h1>
        //       <img src="https://gerichtdeutch.netlify.app/static/media/spoon.d079f43fbcf509908d3865293080795a.svg" alt="about_spoon" className="spoon__img" />
        //       <p className="p__opensans">
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
        //         adipiscing ultrices vulputate posuere tristique. In sed odio nec
        //         aliquet eu proin mauris et.
        //       </p>
        //       <button type="button" className="custom__button">
        //         Know More
        //       </button>
        //     </div>

        //     <div className="app__aboutus-content_knife flex__center">
        //       <img src="https://gerichtdeutch.netlify.app/static/media/knife.1121c0a5afb62acb31cb.png" alt="about_knife" />
        //     </div>

        //     <div className="app__aboutus-content_history">
        //       <h1 className="headtext__cormorant">Our History</h1>
        //       <img src="https://gerichtdeutch.netlify.app/static/media/spoon.d079f43fbcf509908d3865293080795a.svg" alt="about_spoon" className="spoon__img" />
        //       <p className="p__opensans">
        //         Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
        //         Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
        //         odio nec aliquet.
        //       </p>
        //       <button type="button" className="custom__button">
        //         Know More
        //       </button>
        //     </div>
        //   </div>
        // </div>
        <
        div className = "app__header app__wrapper section__padding"
        id = "home" >
        <
        div className = "app__wrapper_content" > { /* <SubHeading title="Chase the new flavour" /> */ } { /* <h1 class="about" id="about">About</h1> */ } <
        button onClick = { clickEv } > Go to Home < /button> <
        button onClick = { clickev }
        style = {
            { marginBottom: "2rem", marginTop: "3rem" } } > Go to Contact < /button> <
        h1 className = "headtext__cormorant"
        style = {
            { marginBottom: "3rem" } } > About Us < /h1> <
        p className = "p__opensans"
        style = {
            { margin: "3rem" } } >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quis pharetra adipiscing ultrices vulputate posuere tristique.In sed odio nec aliquet eu proin mauris et.Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet. <
        /p> <
        button type = "button"
        className = "custom__button" >
        Know More <
        /button> <
        /div> <
        br / >
        <
        div className = "app__wrapper_img" >
        <
        img src = "https://freedesignfile.com/upload/2018/08/Chef-illustration-vectors.jpg"
        alt = "header_img" / >
        <
        /div> <
        /div>
    );
}
export default About;