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

    private pickRandomValueFromObject(list: any){

        const keys = Object.keys(list);
        const index = keys[Math.floor(Math.random() * keys.length)];

        return list[index];

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

    private generatePrefixFromObject(){
        return this.pickRandomValueFromObject(this.prefixesList);
    }

    private generateAnimalFromObject(){
        return this.pickRandomValueFromObject(this.animalsList);
    }

    public generateAnonymousNameFromObject(){
        return `${this.generatePrefixFromObject()} ${this.generateAnimalFromObject()}`;
    }
}