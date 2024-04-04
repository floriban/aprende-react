import { TwitterCard } from './components/twitterCard/TwitterCard.jsx'
import './index.css'

export function App(){
    return(
        <section className='app'>
            <TwitterCard userName='midudev' name='Miguel Angel' />
            <TwitterCard userName='pheralb' name='Pablo Hernandez' />
            <TwitterCard userName='kikobeats' name='Kiko Beats' />
            <TwitterCard name='Desconocido' />
        </section>
    )
}