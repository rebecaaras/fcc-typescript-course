// Challenge: try to figure out how to move the nested address object type
// into a separate type definition. When done correctly, there should be no more
// red errors in the editor

type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address: Address
}

let joe: Person = {
    name: "Joe",
    age: 28,
    isStudent: true,
    address: {
        street: "Manoel Cortez",
        city: "Toronto",
        country: "Canada"
    }
}

let jill: Person = {
    name: "Jill",
    age: 64,
    isStudent: true,
    address: {
        street: "St 2",
        city: "Toronto",
        country: "Canada"
    }
}

function displayPersonInfo(person: Person){
    console.log (`${person.name} lives ar ${person.address.street}.`)
}

displayPersonInfo(jill)