import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const Nav = ({setLibraryStatus,libraryStatus}) => {
    return (
        <nav>
            <h1>Music Player by Shaheer</h1>
            <button onClick={()=>{setLibraryStatus(!libraryStatus)}}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav
