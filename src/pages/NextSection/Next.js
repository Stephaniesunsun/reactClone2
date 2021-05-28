import React from 'react'
import {Console,OwnConsole} from '../../components';
import {Consoles,OwnConsoles} from './Data'

const Next = () => {
    return (
        <div id="next">
            <Console {...Consoles}/>
            <OwnConsole {...OwnConsoles}/>
        </div>
    )
}

export default Next
