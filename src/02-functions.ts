import {Friend, Colleague } from './myTypes'
import { friends, Colleagues } from "./01-basics";
import { EmailContact } from "./myTypes";

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(f: Friend[]) : string[] {
    return f.map(older)}

console.log(older(friends[0]))
console.log(allOlder(friends))

function highestExtension(cs: Colleague[]) { // Inferred retun type
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(Colleagues.current));


function addColleague(
    ch: Colleague[], 
    name: string, 
    department: string, 
    email: string
  ): void {
    const newColleague: Colleague = {
      name: name,
      department: department,
      contact: {
        email: email,
        extension: highestExtension(ch).contact.extension + 1
      }
    };
    ch.push(newColleague);
  }

  console.log(highestExtension(Colleagues.current));
addColleague(Colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(Colleagues.current.filter((c) => c.name === "Sheild O Connell"));


function findFriends(friends: Friend[], filter: (f: Friend) => boolean): Friend[] {
  const result: Friend[] = [];
  for (const f of friends) {
    if (filter(f)) {
      result.push(f);
    }
  }
  return result;
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));


function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max? : number
): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined) {
     end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}
// Test invocations
console.log(sortColleagues(Colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
console.log(sortColleagues(Colleagues.current, (a, b) => (a.name.length - b.name.length),1));
console.log(sortColleagues(Colleagues.current, (a, b) => (a.name.length - b.name.length))); // 

function addInterest(f: Friend, interest: string): Friend {
  if (f.interests === undefined) {
    f.interests = [interest];
  } else {
    f.interests.push(interest);
  }
  return f;
}


console.log(addInterest(friends[0], 'Skiing'))
