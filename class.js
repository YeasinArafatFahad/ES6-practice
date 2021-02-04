class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Mirpur High School'
    }

}

const student1 = new Student(12,'fahad');
const student2 = new Student( 22, 'Yeasin');
const student3 = new Student (24,'Arafat')
console.log(student1, student2,student3);