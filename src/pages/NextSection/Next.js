import React from 'react'
import {Console} from '../../components';
import {Consoles} from './Data'

const Next = () => {
    return (
        <div id="next">
            <Console {...Consoles}/>
        </div>
    )
}

export default Next
