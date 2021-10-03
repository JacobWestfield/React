import { Routes } from './Routes';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation'

/* основной компонент приложения в котором находятся два компонента:
навигация и маршруты на разные компоненты приложения */

function App() {

    return (
        <div>
            <BrowserRouter>
                <Navigation />
                <Routes />
            </BrowserRouter>
        </div>
    );
}

export default App;