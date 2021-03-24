class Microsoft {
    constructor(name) {
        this.name = name;
    }
    get getter(){
        return this.name;
    }
    set setter(name){
        this.name = name;
    }
    occupation() {
        return `${this.name} is a philanthropist!`;
    }
}
class FaceBook extends Microsoft {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    studentAge() {
        return `${this.name} is ${this.age}`;
    }
}
let henry = new Microsoft("Wiliam Henry Gates III");
console.log(henry.occupation());
let elliot = new FaceBook("Mark Elliot Zuckerberg", 23);
console.log(elliot.studentAge());
console.log(elliot.occupation());

module.exports = {
    Microsoft,
    FaceBook
}