import React from 'react'
import {InfoSection} from '../../components'
import {homeObj} from './Data';

const Home = () => {
    return (
        <div style={{height:'100vh'}}>
            <InfoSection {...homeObj}/>
        </div>
    )
}

export default Home
