import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  email: string;
  age: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Usman Arshad', email: "usmanvirk052@gmail.com", age: '23'},
  {position: 2, name: 'Usman Arshad', email: "usmanvirk052@gmail.com", age: '43'},
  {position: 3, name: 'Usman Arshad', email: "usmanvirk052@gmail.com", age: '13'},
  {position: 4, name: 'Usman Arshad', email: "usmanvirk052@gmail.com", age: '22'},
  {position: 5, name: 'Usman Arshad', email: "usmanvirk052@gmail.com", age: '31'},
  {position: 6, name: 'Usman Arshad', email: "usmanvirk052@gmail.com", age: '21'},
  {position: 7, name: 'Usman Arshad', email: "usmanvirk052@gmail.com", age: '43'},
  {position: 8, name: 'Usman Arshad', email: "usmanvirk052@gmail.com", age: '12'},
  {position: 9, name: 'Usman Arshad', email: "usmanvirk052@gmail.com", age: '32'},
  {position: 10, name: 'Usman Arshad', email: "usmanvirk052@gmail.com", age: '14'},
];

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  displayedColumns: string[] = ['position', 'name', 'email', 'age'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
