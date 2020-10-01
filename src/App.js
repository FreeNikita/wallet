import React from 'react';
import {
    BrowserRouter,
    Switch,
    Link
} from "react-router-dom";
import { Router } from './conteiner/routing/Routing'
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                   <Router />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
