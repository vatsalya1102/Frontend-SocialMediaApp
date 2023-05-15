import { Container } from '@material-ui/core'
import Navbar from './components/Navbar/Navbar'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Home from './components/Home/Home'
import { Auth } from './components/Auth/Auth'

export default function App() {

    return (
        <Router>
            <Container maxWidth='xl'>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/auth' element={<Auth />} />
                </Routes>
            </Container>
        </Router>

    )
}
