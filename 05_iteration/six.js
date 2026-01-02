// ==================================================
// ARRAY METHODS QUICK REVISION (forEach vs filter)
// ==================================================
// forEach → does NOT return anything (undefined)
// filter  → RETURNS a NEW array based on condition
// map     → RETURNS a transformed array


// ================================
// forEach RETURN CONFUSION
// ================================
// ❌ return inside forEach is ignored
// ❌ forEach always returns undefined
// ✔ Use only for side effects (log, push)

const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach(item => {
    return item
})

console.log(values) // undefined


// ================================
// filter WITH NUMBERS
// ================================
// ✔ filter returns matching elements
// ✔ original array not modified

const myNums = [1,2,3,4,5,6,7,8,9,10]

const filteredNums = myNums.filter(num => num > 4)

console.log(filteredNums)


// ================================
// SAME FILTER LOGIC USING forEach
// ================================
// ✔ Manual filtering using condition + push
// ❌ More code than filter

const manualNums = []

myNums.forEach(num => {
    if (num > 4) {
        manualNums.push(num)
    }
})

console.log(manualNums)


// ================================
// ARRAY OF OBJECTS + filter
// ================================
// ✔ filter works on objects
// ✔ Can apply multiple conditions
// ✔ Common interview pattern

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
]

// ================================
// filter WITH MULTIPLE CONDITIONS
// ================================
// ✔ AND (&&) for multiple checks
// ✔ Returns only matching objects

const userBooks = books.filter(
    bk => bk.genre === "History" && bk.publish >= 1995
)

console.log(userBooks)
