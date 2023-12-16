import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYr:number=0;
  constructor(){
    this.currentYr=new Date().getFullYear();
  }
}
