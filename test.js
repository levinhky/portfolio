const humans = [
  { id: 1, name: 'Kyle', gender: 'male' },
  { id: 2, name: 'Rock', gender: 'male' },
  { id: 3, name: 'En', gender: 'female' },
  { id: 4, name: 'Wiley', gender: 'female' },
  { id: 5, name: 'Yen', gender: 'male' },
]

// const output = [
//   { name: 'Kyle1', gender: 'male' },
//   { name: 'Rock2', gender: 'male' },
//   { name: 'Yen5', gender: 'male' },
// ]

const output = humans.reduce((acc, child) => {
  if (child.gender === 'male') {
    acc.push({ name: `${child.name}${child.id}`, gender: child.gender })
  }
  return acc
}, [])
console.log(output);