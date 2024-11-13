//Literal Types and Unions
let myName1 = "Bob"
const myName2 = "Bob"

type UserRole = "guest" | "member" | "admin"
type User = {
    id: number
    username: string
    role: UserRole
}

type UpdatedUser = Partial<User>

let userRole: UserRole = "guest"
let nextUserId = 1
//introducing function return types
const users: User[] = [
    {id: nextUserId++, username: "john_doe", role: "member"},
    {id: nextUserId++, username: "jane_doe", role: "admin"},
    {id: nextUserId++, username: "jake_doe", role: "guest"}
];

function fetchUserDetails(username: string): User {
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error (`User with username ${username} not found.`)
    }
    return user
}

//Partial utility type
function updateUser(id: number, updates: UpdatedUser): void {
    const foundUser = users.find(user => user.id === id)
    if (!foundUser){
        console.error(`User with id: ${id} not found.`)
        return
    }

    Object.assign(foundUser, updates)
}

updateUser(1, { username: "new_john_doe"});
//updateUser(4, { role: "contributor"});
console.log(users);

//Omit type
function addNewUser(newUser: Omit<User, "id">): User {
    const user: User = {
        id: nextUserId++,
        ...newUser //spreads all the other properties of newUser here
    }
    users.push(user)
    
    return user
}

addNewUser({ username: "joe_schmoe", role: "member" })

console.log(users)
