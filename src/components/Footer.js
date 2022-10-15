import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

export default function Footer() {
    return ( <
        div className = "app__footer section__padding"
        id = "login" >
        <
        div className = "app__footer-links" >
        <
        div className = "app__footer-links_contact" >
        <
        h1 className = "app__footer-headtext" > Contact Us < /h1> <
        p className = "p__opensans" > 9 W 53 rd St, New York, NY 10019, USA < /p> <
        p className = "p__opensans" > +1 212 - 344 - 1230 < /p> <
        p className = "p__opensans" > +1 212 - 555 - 1230 < /p> <
        /div>

        <
        div className = "app__footer-links_logo" >
        <
        img src = "data:image/png;base64,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"
        alt = "footer_logo" / >
        <
        p className = "p__opensans" >
        "The best way to find yourself is to lose yourself in the service
        of others.
        " <
        /p> <
        img src = "https://gerichtdeutch.netlify.app/static/media/spoon.d079f43fbcf509908d3865293080795a.svg"
        className = "spoon__img"
        style = {
            { marginTop: 15 } }
        /> <
        div className = "app__footer-links_icons" >
        <
        FiFacebook / >
        <
        FiTwitter / >
        <
        FiInstagram / >
        <
        /div> <
        /div>

        <
        div className = "app__footer-links_work" >
        <
        h1 className = "app__footer-headtext" > Working Hours < /h1> <
        p className = "p__opensans" > Monday - Friday: < /p> <
        p className = "p__opensans" > 08: 00 am - 12: 00 am < /p> <
        p className = "p__opensans" > Saturday - Sunday: < /p> <
        p className = "p__opensans" > 07: 00 am - 11: 00 pm < /p> <
        /div> <
        /div>

        <
        div className = "footer__copyright" >
        <
        p className = "p__opensans" > 2021 Gericht.All Rights reserved. < /p> <
        /div> <
        /div>
    )
}