import {readFile} from 'fs/promises';

export class AnonymousNames{
    private readonly prefixes: string = "./data/prefixes.json";
    private readonly animals: string = "./data/animals.json";

    private async pickRandomValue(file:string){
        const json = await readFile(file);
        const object = JSON.parse(json.toString());

        const keys = Object.keys(object);
        const index = keys[Math.floor(Math.random() * keys.length)];

        return object[index];

    }

    private async generatePrefix(){
        return this.pickRandomValue(this.prefixes);
    }

    private async generateAnimal(){
        return this.pickRandomValue(this.animals);
    }

    public async generateAnonymousName(){
        return `${await this.generatePrefix()} ${await this.generateAnimal()}`;
    }
}