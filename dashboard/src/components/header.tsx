import nlwUniteIcon from '../assets/nlw-unite-icons.svg'
import { NavLink } from './nav-link'

export function Header() {
    return (
        <div className='flex items-center gap-5'>
            <img src={nlwUniteIcon} />

            <nav className='flex items-center gap-5 '>
                <a href="#" className='font-medium text-sw text-zinc-300'>Eventos</a>
                <NavLink href="/eventos">Eventos</NavLink>
                <NavLink title='' href="/participants">Participantes</NavLink>
            </nav>

        </div>

    )
}