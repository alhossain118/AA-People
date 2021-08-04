import { Injectable } from '@angular/core';
import { map } from "rxjs/operators"
import { PeopleResponse, Person } from '../interfaces/people.interface';
import { HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class PeopleService {
    constructor(private http: HttpClient){}

    public getPeople(): PeopleResponse {
        return {
            "people": [
                {
                    "firstName": "Joe",
                    "lastName": "Jackson",
                    "gender": "male",
                    "age": 28,
                    "number": "7349282382"
                },
                {
                    "firstName": "James",
                    "lastName": "Smith",
                    "gender": "male",
                    "age": 32,
                    "number": "7349282382"
                },
                {
                    "firstName": "Emily",
                    "lastName": "Jones",
                    "gender": "female",
                    "age": 24,
                    "number": "7349282382"
                }
            ]
        }
    }

    public getPeopleHttp(): Observable<Person[]> {
        return this.http.get("/assets/response/people.json")
        .pipe(
            map((res: PeopleResponse) => {
                return res.people
            })
        )
    }
}