import React from 'react';
import { Route, Redirect } from "react-router-dom";
import {router} from "../../routing";
import { home, login } from '../../routing'


export const Router = () => {

    const isAuth = false;

    return (
        <React.Fragment>
            {
                router.map(({page: Page, path, exact, isPrivate }) => (
                    <Route path={path} exact={exact} key={path}>
                        { !isPrivate && <Page /> }
                        { isPrivate && isAuth ? <Page /> : <Redirect to={login} /> }
                    </Route>
                ))
            }
            <Redirect to={isAuth ? home : login}/>
        </React.Fragment>
    )
}