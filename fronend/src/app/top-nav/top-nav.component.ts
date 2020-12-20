import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor() { }
userName:string
singIn:boolean
  ngOnInit(): void {

    if  (localStorage.getItem('singIn'))
    {
      this.userName= localStorage.getItem('singIn');
      this.singIn= true
    }
    else{
      this.singIn= false;
    }
 
  }
  exsit()
  {
    localStorage.removeItem('singIn');
    this.singIn= false;
    this.userName='';
  }

}
