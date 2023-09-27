export interface Friend {
    name: string;
    phone: string;
    age: number
}

export interface Colleague {
    name: string;
    department: string;
    contact: {
      email: string;
      extension: number
    } 
  }

export interface ColleagueHistory {
  current: colleague[],
  former: colleague[]
}

export interface EmailContact {
  name: string;
  email: string
}