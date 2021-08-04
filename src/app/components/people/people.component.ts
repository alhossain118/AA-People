import { Component, OnInit } from '@angular/core';
import { PeopleResponse, Person } from 'src/app/interfaces/people.interface';
import { PeopleService} from "../../services/people.service"
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
})
export class PeopleComponent implements OnInit{
  constructor(private peopleService: PeopleService){}

  public people: Person[];

  ngOnInit(){
    this.peopleService.getPeopleHttp().subscribe((res: Person[]) => {
      this.people = res
    })
  }
}
