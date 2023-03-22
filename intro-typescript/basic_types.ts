// numbers
let nameVar: number = 123;
nameVar = 321;
nameVar = 23.54;
nameVar = 0xf4;
console.log(nameVar)

// boolean
let ative: boolean = true;

// string
let firstName = 'José';
let lastName = 'Maria';
let fullName = `${firstName} ${lastName}`;

// Enum
enum ROLES {
    MANAGER = 'Manager',
    ADMIN = 'Administrator',
    CEO = 'CEO',
    CTO = 'CTO'
};

function setRole(role: ROLES): void {
    console.log(role);
}

setRole(ROLES.ADMIN);

//Array
let femaleNames: string[] = ["Maria", "Joana", "Marta"];
let maleNames: Array<string> = ["Maria", "Joana", "Marta"];
let AnyValues: Array<any> = ["Maria", "Joana", "Marta", 123, 0X543, true];