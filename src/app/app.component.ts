import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario = 'Angular';
  password = '123456';
  getInputValue(inputValue:string, inputValue2:string){
    if (inputValue != this.usuario || inputValue2 != this.password){
      alert("Credenciales incorrectas.");
    }
  }
}
