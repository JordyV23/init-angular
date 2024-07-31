import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower:string = 'lospatitos sa';
  public nameUpper:string = 'lospatitos sa';
  public fullName:string = 'lospatitos sa';
  public customDate: Date = new Date();

}
