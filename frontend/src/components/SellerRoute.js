import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';


export default function SellerRoute ({component: Component, ...rest}) {
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;

    return (
        <Route {...rest} render={(props) => userInfo && userInfo.isSeller ? (
            <Component {...props}></Component>
        ) :
    (
        <Redirect to="/signin" />
    )}
    ></Route>
    );
}