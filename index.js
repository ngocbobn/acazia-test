const mutateTheArray = (n, a) => {
    let newArray = [...Array(n)]
    for (let i = 0; i < n; i++) {
        newArray[i] = (a[i - 1] || 0) + (a[i] || 0) + (a[i + 1] || 0)
    }
    return newArray
}

const myMutate = (n, a) => {
    return [...Array(n)].map((value, index) => (a[index - 1] || 0) + (a[index] || 0) + (a[index + 1] || 0))
}

console.log(mutateTheArray(5, [4, 0, 1, -2, 3]))

console.log(myMutate(5, [4, 0, 1, -2, 3]))