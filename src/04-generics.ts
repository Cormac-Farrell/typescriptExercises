
import {friends, colleagues, Colleagues} from './01-basics'
import {Friend, Colleague} from './myTypes'

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}

console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane')  ))
console.log(findMatch<Colleague>(Colleagues.current, (c) => c.department === 'Finance'  ))

function sortByMatch<T>(array: T[], criteria: (d: T, f: T) => number,) : T[] | undefined{
    let selectedarray = array.sort((criteria))
    return selectedarray
}

// Sort friends by age
console.log(sortByMatch<Friend>(friends, (a, b) => a.age - b.age));

// Sort colleagues by extension number
console.log(sortByMatch<Colleague>(Colleagues.current,(a, b) => a.contact.extension - b.contact.extension));