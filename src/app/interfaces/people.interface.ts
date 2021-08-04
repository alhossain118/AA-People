export interface PeopleResponse {
    people: Person[];
}

export interface Person {
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    number: string;
}