import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class BodyRegisterComponent {
email: String = "";
name: String = "";
password: String = "";


  constructor(private http: HttpClient) { }

  onSubmitRegister(){
    const user = {
      name : this.name,
      email : this.email,
      password : this.password
    }
    this.registerUser(user).subscribe()
  }
  registerUser(usuario: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/users', usuario);
  }
}
