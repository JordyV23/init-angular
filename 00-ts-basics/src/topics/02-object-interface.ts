
// Definicion de tipado de objeto
const skills: string[] = ['Bash','Counter','Heal'];

// Definicion de tipo de dato para un objeto
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?:string; // Argumento opcional
} 
const strider:Character = {
    name:'Strider',
    hp:100,
    skills: skills
}

console.table(strider)


export {};