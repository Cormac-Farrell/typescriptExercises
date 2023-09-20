import {Friend, Colleague } from './myTypes'
import { friends, colleagues, Colleagues } from "./01-basics";

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(f: Friend[]) : string[] {
    return f.map(older)}

console.log(older(friends[0]))
console.log(allOlder(friends))

function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(Colleagues.current));

function addColleagues (cs: Colleague[], name: string, department: string, email: string, extension: number ) : void {
    const newColleague : Colleague = {
        name: name,
        department: department,
        contact: {
          email: email,
          extension: extension,
        },
      };
      cs.push(newColleague);
}

addColleagues(Colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(Colleagues.current.filter((c) => c.name === "Sheild O Connell"));