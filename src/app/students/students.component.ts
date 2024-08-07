import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{

  public students:any;
  public dataSource : any;
  constructor(){

  }
  ngOnInit(): void {
    this.students=[];
    for(let i = 1; i < 100; i++){
      this.students.push(
        {
          id:i,
          firstName: Math.random().toString(20),
          lastName: Math.random().toString(20),
        }
      );
    }
    this.dataSource = new MatTableDataSource(this.students);
  }

}
