export class Person {
  // public name: string;
  // public address: string;

  // constructor(name: string, address: string){
  //     this.name = name;
  //     this.address = address;
  // }
  constructor(public name: string, public address: string) {}
}

// export class Hero extends Person {

//     constructor(
//         public alterEgo:string,
//         public age: number,
//         public realName:string,
//     ){
//         super(realName,'Ciudad Gotica');
//     }
// }

export class Hero {
//   public person: Person;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    // this.person = new Person(realName, "Ciudad Gotica");
  }
}

const Bruno = new Person("Bruno Diaz", "Ciudad Gotica");
const Batman = new Hero("Batman", 35, "Bruno", Bruno);

// console.log(Ingeniero);
console.log(Batman);
