class Student {
    constructor(id, name){ //class a constructor must
        this.id = id;
        this.name = name;
        this.school = 'model school'
    }
}

const student1 = new Student(1, 'golam');
const student2 = new Student(2, 'rabby');

// console.log(student1, student2);
console.log(student1.name, student2.name);