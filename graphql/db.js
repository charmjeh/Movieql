export const people = [{
        id: 0,
        name: 'Nicolas',
        age: 18,
        gender: 'female'
    },
    {
        id: 1,
        name: 'YoungHee',
        age: 20,
        gender: 'male'
    },
    {
        id: 2,
        name: 'ChulSu',
        age: 23,
        gender: 'female'
    },
    {
        id: 3,
        name: 'Jessie',
        age: 20,
        gender: 'male'
    },
    {
        id: 4,
        name: 'Rain',
        age: 19,
        gender: 'female'
    },
]

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id)
    return filteredPeople[0];
}