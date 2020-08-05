import React from 'react'

import Title from './components/layout/Title'

import {Layout} from 'antd'
import AddArtist from './components/forms/AddArtist'

import './App.css'
import Artists from './components/lists/Artists'

const {Content} = Layout

const App = () => (
    <div className='container'>
        <Content className='App'>
            <Title/>
            <AddArtist/>
            <Artists/>
        </Content>
    </div>
)

export default App
