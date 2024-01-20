function addNumber(a: number, b: number) {
    return a + b
}


const sum = addNumber(1, 2)

// 2. Function arguments

const add = (a: number, b: number): number => {
    return a + b
}

const sum2 = add(1, 2)


// 3. multiple arguments

const fullName = (
    firstName: string,
    lastName?: string,
    corporateName: string = "blockdo3",
    ): string => {
        return `${firstName} ${lastName}  ${corporateName}`
    }
    
    const myName = fullName("John", "Doe")
    




// 4. Function signature




// console.log()

console.log({ sum })
console.log({ sum2 })
console.log({ myName })