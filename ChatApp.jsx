import React, { useRef } from 'react';
import '../../App.css';
import { Button, TextField, Box, Grid } from '@material-ui/core';
import { Layout } from '../../components/Layout/Layout';
import { useDispatch, useSelector } from "react-redux";
import { messageAdd } from '../MessageReducer/actions';
import { chatAdd } from '../ChatReducer/actions';
import { getMessage } from '../MessageReducer/selectors';


export const ChatApp = () => {
    //создаем хук диспатч
    const dispatch = useDispatch();
    //использовал тут хук реф чтобы получать данные из инпутов
    const idRef = useRef();
    const messageRef = useRef();
    const authorRef = useRef();
    const idChatRef = useRef();

    //немного логики просто для выведения сообщений выбранного чата во второй части страницы
    let messages = useSelector(getMessage);
    let currentChat = idRef?.current?.value;
    console.log(messages.messageList[currentChat])

    //логика добавления сообщений в стор. там есть инпут автора, но посмотрел Ваше решение задания и не нашел там использования поля автора
    const submitMessage = (event) => {
        event.preventDefault();
        dispatch(messageAdd(messageRef.current.value, idRef.current.value))
    }
    //логика добавления чата в стор
    const submitChat = (event) => {
        event.preventDefault();
        dispatch(chatAdd(idRef.current.value))
    }


    return (
        <div>
            <Layout sx={{
                height: '100vh',
                margin: '0',
                padding: '0'
            }}>
                <Box sx={{
                    height: '30vh',
                    backgroundColor: 'rgb(108, 191, 224)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <div >
                        <form onSubmit={submitMessage} sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <TextField label="Enter ID" variant="outlined" inputRef={idRef} />
                            <TextField label="Enter username" variant="outlined" inputRef={authorRef} />
                            <TextField label="Enter message" variant="outlined" inputRef={messageRef} />
                            <Button type="submit" variant="outlined" >Submit</Button>
                        </form>
                    </div>
                    <div >
                        <form onSubmit={submitChat} sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <TextField label="Enter ID" variant="outlined" inputRef={idChatRef} />

                            <Button type="submit" variant="outlined" >Add new chat</Button>
                        </form>
                    </div>
                </Box>
                <Box sx={{
                    height: '70vh',
                    backgroundColor: 'rgb(223, 141, 116)',
                }}>
                    <Grid container spacing={5} >
                        {messages?.messageList[currentChat]?.map((item, indx) => (
                            <Grid item xs={2} key={indx}>
                                <Box sx={{
                                    borderRadius: '50px',
                                    background: 'transparent',
                                    border: '1px solid black',
                                    padding: '20px'
                                }} >
                                    <h2>Текущий чат: {currentChat}</h2>
                                    <h4>Сообщение:  {item}</h4>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Layout >
        </div>
    );
}
