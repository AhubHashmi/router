import { useParams, useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate()

    let clickEv = () => {

        navigate('/')
    }
    const params = useParams()
    console.log(params)
    return ( <
        >
        <
        h1 class = "profile" > Welcome { params.userName } < /h1> <
        button onClick = { clickEv } > Go to Home < /button> <
        />
    );
}
export default Profile;