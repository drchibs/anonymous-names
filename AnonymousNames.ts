// import {readFile} from 'fs/promises';
import * as prefixes from './data/prefixes.json';
import * as animals from './data/animals.json';

export class AnonymousNames{

    private async pickRandomValue(list: any){

        const object = JSON.parse(list);

        const keys = Object.keys(object);
        const index = keys[Math.floor(Math.random() * keys.length)];

        return object[index];

    }

    private async generatePrefix(){
        return this.pickRandomValue(prefixes);
    }

    private async generateAnimal(){
        return this.pickRandomValue(animals);
    }

    public async generateAnonymousName(){
        return `${await this.generatePrefix()} ${await this.generateAnimal()}`;
    }
}