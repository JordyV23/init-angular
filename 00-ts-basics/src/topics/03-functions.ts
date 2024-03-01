function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumberArrow = (a: number, b: number): number => {
  return a + b;
};

function multiply(firstNumber: number, base: number = 2) {
  return firstNumber * base;
}

const res = addNumbers(1, 3) + addNumberArrow(5, 8);
const multiRes = multiply(5)

console.log(res + multiRes)

interface Character {
  name: string;
  hp:number;
  showHp: () => void;
}

const healCharacter = (character:Character,amount:number) => {
  character.hp += amount;
}

const strider: Character = {
  name:'Strider',
  hp:50,
  showHp(){
    console.log(`Puntos de vida: ${this.hp}`)
  }

}

strider.showHp();
healCharacter(strider, 10)
strider.showHp();


export {};
