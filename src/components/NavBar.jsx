import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'

const NavBar = () => {
    console.log('Navbar')

    const {user, login, logout} = useContext(UserContext);

    return (
        <nav className='navbar navbar-dark bg-dark mb-4'>
            <div className="container">
                <span className='navbar-brand'>
                    <h2>{user? `Hola, ${user.name}`: 'Bienvenid@'}</h2>
                </span>
                { user 
                ?
                    <button
                        type='button'
                        className='btn btn-danger'
                        onClick={logout}
                    >Cerrar Sesion</button>
                :
                    <button
                        type='button'
                        className='btn btn-primary'
                        onClick={login}
                    >Iniciar Sesion</button>
                }
            </div>
        </nav>
    )
}

export default NavBar
