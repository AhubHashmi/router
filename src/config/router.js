import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import About from "../screens/about";
import Contact from "../screens/contact";
import Home from "../screens/home";
import NotFound from "../screens/notfound";
import Profile from "../screens/profile";
import Service from "../screens/srevices";

export default function AppRouter() {
    return ( <
        Router >
        <
        div class = "links" >
        <
        Link to = '/'
        class = "links1" > Home < /Link> <
        Link to = 'about'
        class = "links2" > About < /Link> <
        Link to = 'contact'
        class = "links3" > Contact < /Link> <
        Link to = 'service'
        class = "links4" > Service < /Link> <
        Link to = 'profile'
        class = "links5" > Profile < /Link> <
        /div> <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "contact"
        element = { < Contact / > }
        /> <
        Route path = "service"
        element = { < Service / > }
        /> <
        Route path = "about"
        element = { < About / > }
        /> <
        Route path = "profile/:userName"
        element = { < Profile / > }
        /> <
        Route path = "*"
        element = { < NotFound / > }
        /> <
        /Routes> <
        /Router>
    );
}