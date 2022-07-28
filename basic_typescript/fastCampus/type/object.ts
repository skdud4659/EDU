const person1 = {name: 'mark', age: 39};
// {name: string, age: number}

const person2 = Object.create({name: 'Mark', age: 39});

declare function create(o: object | null): void;
create({prop: 0});
create(null);
create(42); // error
create('string'); // error