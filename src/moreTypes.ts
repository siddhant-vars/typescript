let response : any = "42"

const numericlength = (response as string).length; // forcefull assertion

type Book = {
    name: "string",
}

const bookString = '{"name": "Atomic Habits"}'
const bookObject = JSON.parse(bookString) as Book 
console.log(bookObject.name)

let x:any;
x = "chai"
x = 21
x = [1,2,3]
x.toUpperCase();

let y:unknown;
y = "chai"
y = 21
y = [1,2,3]
if(typeof y === "string"){
    y.toUpperCase();
}

try {
    
} catch (error) {
    if(error instanceof Error) {
        console.log(error.message)
    }
    console.log("Error",error)
}

const data: unknown = "chai aur code"
const strdata : string = data as string

type Role = "admin" | "user" | "superadmin"

function redirectBasedOnRole(role: Role) : void{
    if(role === "admin") {
        console.log("Redirecting to admin dashboard")
        return
    }
    if(role === "user") {
        console.log("Redirecting to user dashboard")
        return;
    }
    role; //never if no type available or signify to last remain type
        
}
