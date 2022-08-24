import {AnonymousNames} from './AnonymousNames';

const anon = new AnonymousNames();

const getName = async ()=>{
    return await anon.generateAnonymousName();
}

getName().then(r => console.log(r));
