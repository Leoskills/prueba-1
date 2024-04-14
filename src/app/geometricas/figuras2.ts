export abstract class figuras2 {
    ladoA:number
    ladoB:number 
    ladoC:number

    constructor(ladoA:number,ladoB:number,ladoC:number){
        this.ladoA = ladoA
        this.ladoB = ladoB
        this.ladoC = ladoC

    }
    abstract CalcularPerimetroTriangulo():number

} 

export class Triangulo extends figuras2{
    constructor(ladoA:number,ladoB:number,ladoC:number){
        super(ladoA,ladoB,ladoC)
        
    }
    override CalcularPerimetroTriangulo(): number {
        return this.ladoA + this.ladoB + this.ladoC
        
    }
}