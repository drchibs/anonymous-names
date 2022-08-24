import { readFile } from 'fs/promises';

export class AnonymousNames{
    prefixes: string = "./data/prefixes.json";
    animals: string = "./data/animals.json";

    async pickRandomValue(file:string){
        const json = await readFile(file);
        const object = JSON.parse(json.toString());

        const keys = Object.keys(object);
        const index = keys[Math.floor(Math.random() * keys.length)];

        return object[index];

    }

    async generatePrefix(){
        return this.pickRandomValue(this.prefixes);
    }

    async generateAnimal(){
        return this.pickRandomValue(this.animals);
    }

    async generateAnonymousName(){
        const name = `${await this.generatePrefix()} ${await this.generateAnimal()}`;
        // console.log(name);
        return name;
    }
}