import {readFile} from 'fs/promises';
import * as prefixes from './data/prefixes.json';
import * as animals from './data/animals.json';

export class AnonymousNames{

    private readonly prefixesFile: string = "./data/prefixes.json";
    private readonly animalsFile: string = "./data/animals.json";

    private async pickRandomValue(file: any){

        const json = await readFile(file);
        const object = JSON.parse(json.toString());

        const keys = Object.keys(object);
        const index = keys[Math.floor(Math.random() * keys.length)];

        return object[index];

    }

    private async generatePrefix(){
        return this.pickRandomValue(this.prefixesFile);
    }

    private async generateAnimal(){
        return this.pickRandomValue(this.animalsFile);
    }

    public async generateAnonymousName(){
        return `${await this.generatePrefix()} ${await this.generateAnimal()}`;
    }
}