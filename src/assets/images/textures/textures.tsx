import dirtImg from './dirt.jpg';
import grassImg from './grass.jpg';
import glassImg from './glass.png';
import logImg from './log.jpg';
import woodImg from './wood.png';
import { NearestFilter, TextureLoader, RepeatWrapping } from 'three'

const dirtTexture = new TextureLoader().load(dirtImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const logTexture = new TextureLoader().load(logImg);
const woodTexture = new TextureLoader().load(woodImg);
const groundTexture = new TextureLoader().load(grassImg)

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

export {
    dirtTexture,
    logTexture,
    grassTexture,
    glassTexture,
    woodTexture,
    groundTexture,
}