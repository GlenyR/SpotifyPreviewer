import trae from 'trae'
import configServer from './config'

const platziMusicService = trae.create({
    baseUrl: configServer.apiUrl
})

export default platziMusicService