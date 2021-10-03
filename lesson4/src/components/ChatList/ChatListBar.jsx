import React, { useState } from "react";
import list from './Chatlist.json';
import { Box, List, ListItem, ListItemText, Button } from '@material-ui/core';
import { useRouteMatch, Link } from "react-router-dom";
export const ChatListBar = () => {


    //получил данные текущего адреса чтобы использовать их в ссылках на чаты
    let { url } = useRouteMatch();



    // наброски логики удаления чатов. Не работает

    let [stateList, setState] = useState();

    stateList = list.map(item => item);

    function deleteChat(event) {

        let buttonIndx = event.target;
        let indx = buttonIndx.getAttribute('id');
        // eslint-disable-next-line array-callback-return
        setState(stateList.filter((item, index) => {
            if (index !== Number(indx)) {
                return item
            }
        }))
    };




    // основной компонент списка чатов

    return <Box sx={{ bgcolor: 'rgb(150, 150, 224)', height: "100vh", display: 'flex', alignItems: 'center' }}>
        <List>{stateList.map((item, index) => (
            <ListItem key={index} sx={{ height: '200px' }}>
                <ListItemText primary={item.chat} secondary={item.text}>
                </ListItemText>
                <Button id={index} onClick={deleteChat}>Delete chat</Button>
                <Link to={`${url}/chat${index + 1}`}>Chat {index + 1}</Link>
            </ListItem>
        ))}
        </List>

    </Box>
}