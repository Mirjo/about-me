export abstract class AbstractEntity {
    name: string;

    constructor(obj: Partial<AbstractEntity>) {
        this.name = obj.name;
    }
}