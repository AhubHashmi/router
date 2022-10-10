import React from 'react'

export default function header() {
    return ( <
        div className = "app__header app__wrapper section__padding"
        id = "home" >
        <
        div className = "app__wrapper_info" > { /* <SubHeading title="Chase the new flavour" /> */ } <
        h1 className = "app__header-h1" > The Key To Fine Dining < /h1> <
        p className = "p__opensans"
        style = {
            { margin: "2rem 0" } } >
        Sit tellus lobortis sed senectus vivamus molestie.Condimentum volutpat morbi facilisis quam scelerisque sapien.Et, penatibus aliquam amet tellus { " " } <
        /p> <
        button type = "button"
        className = "custom__button" >
        Explore Menu <
        /button> <
        /div>

        <
        div className = "app__wrapper_img" >
        <
        img src = "https://gerichtdeutch.netlify.app/static/media/welcome.d724eb984456d9c97470.png"
        alt = "header_img" / >
        <
        /div> <
        /div>  )
    }