export abstract class figuras {
    radio1:number

    constructor(radio1:number){
        this.radio1 = radio1

    }
    abstract CalcularPerimetro():number

} 

export class Circulo extends figuras{
    constructor(radio1:number){
        super(radio1)
    }
    override CalcularPerimetro(): number {
        return this.radio1 * 2 * Math.PI
    }

}