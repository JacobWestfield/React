import ChatList from '../components/ChatList/Chatlist.json'
import { Box } from '@material-ui/core';
import { useParams } from 'react-router';
import { Redirect } from 'react-router-dom';

export const Chat = () => {
    
    /* получаем из адресной строки параметр. далее я делаю немного преобразований чтобы отрендерить именно номер чата */
    const params = useParams();
    console.log(params);
    let { chat } = params;
    let chatID = chat.split('')[4];
    
    /* проверка есть ли найденный из адресной строки чат в файле json
    получаю тут на выходе массив с одним лишь элементом объектом */
    let currentChat = ChatList.filter(({id}) => id === chat)
    console.log(currentChat)
    
    //здесь делается проверка на существование чата и редирект если чата нет
    if (currentChat.length === 0){
        return <Redirect to="/*" />
    };
    

    /* если в файле json есть чат то он рендерится (но мне кажется я тут что-то неправильно сделал. у меня в этом компоненте нет тега Route) */
    
    return <Box sx={{ bgcolor: 'rgb(150, 150, 224)', height: "100vh"}}>
        <h1>Chat {chatID}</h1>
        <h2>{currentChat[0].chat}</h2>
        <h3>{currentChat[0].text}</h3>
    </Box>
}