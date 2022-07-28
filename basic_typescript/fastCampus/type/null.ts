let MyName:string = null;
// tsconfig.json > "strictNullChecks": true이기 때문에 오류가 남

let v:void = undefined;

// union type
let union:string | null = null;
union = 'mark';