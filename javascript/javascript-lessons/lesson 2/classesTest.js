class Person{
    constructor(firstName, lastName, YOB){
        this.firstName = firstName;
        this.lastName = lastName;
        this.YOB = YOB;
    }
    Name()
    {
        return (`${this.firstName} ${this.lastName}`);
    }
    Age()
    {
        return (`${this.Name()} is ${new Date().getFullYear() - this.YOB.getFullYear()} years old`);
    }

}

let person1 = new Person("John", "Doe", new Date("1990"));
console.log(person1.Name());
console.log(person1.Age());

let person2 = new Person("Jane", "Doe", new Date("2000"));
console.log(person2.Name());
console.log(person2.Age());























/*
🌤️                                                                             _____👽_____
                            _||____                   ______                    \__________/
                           /      \                  /      \                        
    ☁️                   /        \                 /        \                   ☁️                      ☁️
                         /__________\              /__________\
                        /|   😊     |\            /|   💀  🕸️|\        🦋
                         |   /|\     |             |   /|\     |
                         |____/\_____|             |____/\_____|
                         |           |             |  🖼️      |
__🌳________🌳____🐈____|___________|___🚘🚘____|___________|_______🐛_🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳_______________________                           
*/
