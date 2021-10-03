import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ChatApp from '../ChatApp';
import Profile from '../components/Profile/Profile';
import NotFound from '../components/NotFound/NotFound';
import Home from '../components/Home/Home';
import { ChatListBar } from '../components/ChatList/ChatListBar';
import { Chat } from './Chat';


/* компонент с маршрутами на разные компоненты. в компонент chatlist также вложен параметр с компонентами чатов, но мне кажется я что-то сделал не так, хотя всё работает */


export const Routes = (props) => {

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chat" component={ChatApp} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/chatlist" component={ChatListBar} />
            <Route path="/chatlist/:chat" component={Chat} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
};