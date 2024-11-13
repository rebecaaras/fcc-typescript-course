type Voter = {
    name: string
    age: number
}

const gameScores = [14, 21, 33, 42, 59]
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
const voters = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }]

function getLastItem<Type>(array: Type[]): Type | undefined {
    return array[array.length - 1]
}

function addToArray<Type>(array: Type[], item: Type): Type[] {
    array.push(item)
    return array
}

// example usage:
addToArray<number>(gameScores, 58)
addToArray<string>(favoriteThings, "churros quentinhos")
addToArray<Voter>(voters, { name: "Johann", age: 19 })

console.log(gameScores)
console.log(favoriteThings)
console.log(voters)
/**
 * Mini-challenge: call `getLastItem` (and console.log the returned value)
 * on each of the 3 arrays above. Hover over different values to see what the Intellisense
 * says about the types for each one.
 */

