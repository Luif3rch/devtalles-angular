// Src: https://www.typescriptlang.org/docs/handbook/2/objects.html#interfaces
interface Character {
    name: string
    hp: number
    isAlive: boolean
    skills: string[]
    level: number
    homeTown?: string
}

const strider: Character = {
    name: "John",
    hp: 100,
    isAlive: true,
    skills: ["Bash", "Counter", "Healing"],
    level: 10,
    homeTown: "Gondor",
}

console.table(strider)

export {}
