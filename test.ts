import {AnonymousNames} from './AnonymousNames';

const anon = new AnonymousNames();


anon.generateAnonymousName().then(r => console.log(r));
