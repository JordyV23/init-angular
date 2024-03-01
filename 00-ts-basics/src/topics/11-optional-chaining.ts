export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Jordy",
};

const passenger2: Passenger = {
  name: "Fernando",
  children: ["Natalia", "Elizabeth"],
};

const printChilden = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length || 0;

  console.log(howManyChildren);
};

printChilden(passenger1)
printChilden(passenger2)
