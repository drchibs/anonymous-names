import {readFile} from 'fs/promises';
import * as prefixes from './prefixes.json';
import * as animals from './animals.json';

export class AnonymousNames{

    private readonly prefixesFile: string = "./prefixes.json";
    private readonly animalsFile: string = "./animals.json";

    private readonly prefixesList: any = prefixes;
    private readonly animalsList: any = animals;

    private async pickRandomValue(file: any){

        const json = await readFile(file);
        const object = JSON.parse(json.toString());

        const keys = Object.keys(object);
        const index = keys[Math.floor(Math.random() * keys.length)];

        return object[index];

    }

    private async pickRandomValueFromObject(list: any){

        const object = JSON.parse(list.toString());

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

    private async generatePrefixFromObject(){
        return this.pickRandomValue(this.prefixesList);
    }

    private async generateAnimalFromObject(){
        return this.pickRandomValue(this.animalsList);
    }

    public async generateAnonymousNameFromObject(){
        return `${await this.generatePrefixFromObject()} ${await this.generateAnimalFromObject()}`;
    }
}