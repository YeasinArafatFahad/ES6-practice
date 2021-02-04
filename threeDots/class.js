class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
    }

}

const student1 = new Student(12,'fahad');
const student2 = new Student( 22, 'Yeasin');
console.log(student1, student2);