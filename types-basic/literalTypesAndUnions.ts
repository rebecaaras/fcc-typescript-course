//Literal Types and Unions
let myName1 = "Bob"
const myName2 = "Bob"

type UserRole = "guest" | "member" | "admin"
type User = {
    username: string
    role: UserRole
}

let userRole: UserRole = "guest"

//introducing function return types
const users: User[] = [
    {username: "john_doe", role: "member"},
    {username: "jane_doe", role: "admin"},
    {username: "jake_doe", role: "guest"}
];

function fetchUserDetails(username: string): User {
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error (`User with username ${username} not found.`)
    }
    return user
}