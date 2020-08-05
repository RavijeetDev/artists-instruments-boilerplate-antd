import React from 'react'
import {useQuery} from "@apollo/react-hooks";
import {GET_ARTISTS, INSTRUMENTS_OF_ARTIST} from "../../queries";
import {Card, List} from "antd";
import Artist from "../listItems/Artist";

import {Layout} from 'antd'

import '../../App.css'
import RemoveArtist from "../buttons/RemoveArtist";

const {Content} = Layout

const getStyles = () => ({
    list: {
        display: 'flex',
        justifyContent: 'center'
    }
})

const ArtistDetail = () => {
    const styles = getStyles()

    const pathName = window.location.href
    const id = pathName.substring(pathName.lastIndexOf('/') + 1);
    console.log('ID', id)

    const {loading, error, data} = useQuery(INSTRUMENTS_OF_ARTIST, {
        variables: {
            artistId: id
        }
    })
    if (loading) return 'Loading...'
    if (error) return `Errror! ${error.message}`

    console.log(data)

    const fullName = () => {
        return `${data.instrumentsOfArtist.firstName} ${data.instrumentsOfArtist.lastName}`
    }

    console.log(fullName())

    return (
        <div className='container'>
            <Content className='App'>
                <h1 style={styles.title}>{fullName()}</h1>

                <List grid={{gutter: 20, column: 1}} style={styles.list}>
                    {data.instrumentsOfArtist.instruments.map(({id, year, brand, type, price}) => (
                        <List.Item key={id}>
                            <Artist key={id} id={id} firstName={firstName} lastName={lastName}/>
                        </List.Item>
                    ))}
                </List>

            </Content>
        </div>
    )
}

export default ArtistDetail