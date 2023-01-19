import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task_17';
  trainName = "Garibhrath Pune Express [12120]";
  AvalTicket = 136;
  bookTicket(){
     this.AvalTicket--;
  }
  avalTicket(){
    this.AvalTicket++;
  }
}
