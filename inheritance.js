class Parent{
    constructor(){
        this.fatherName = 'Satter'
    }
}
class Child extends Parent{
    constructor(cname){
        super();
        this.name= cname;
    }
    getName(){
        return this.name +' ' + this.fatherName
    }
}

const child1 = new Child('Fahad')
const child2 = new Child('Sabiha')
console.log(child1,child2)
