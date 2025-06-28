// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Router, RouterLink } from '@angular/router';


// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [FormsModule, HttpClientModule, RouterLink],
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css',
// })
// export class BodyRegisterComponent {
//   email: string = '';
//   name: string = '';
//   password: string = '';

//   users: any[] = [];
//   apiUrl: string = 'http://localhost:3000';
//   emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   passwordPattern: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   constructor(private http: HttpClient, private router: Router) {
//     this.getUsers().subscribe(data => this.users = data);
//   }

//   onSubmitRegister() {
//     if (!this.emailPattern.test(this.email)) {
//       alert('E-mail inválido!');
//       return;
//     }

//     if (!this.passwordPattern.test(this.password)) {
//       alert('Senha inválida! A senha deve ter pelo menos 8 caracteres, incluindo letras, números e caracteres especiais.');
//       return;
//     }

//     const usuarioExistente = this.users.find(u => u.email === this.email);
//     if (usuarioExistente) {
//       alert('E-mail já cadastrado!');
//       return;
//     }

//     this.createUser();
//   }

//   createUser() {
//     const novoId = this.users.length > 0 ? Math.max(...this.users.map(u => u.id)) + 1 : 1;
//     const userComId = {
//       id: novoId,
//       name: this.name,
//       email: this.email,
//       password: this.password,
//     };

//     this.http.post(`${this.apiUrl}/users`, userComId).subscribe(() => {
//       alert('Usuário cadastrado com sucesso!');
//       this.email = '';
//       this.name = '';
//       this.password = '';
//       this.getUsers().subscribe((data: any[]) => this.users = data);
//       this.router.navigate(['/login']);
//     }, error => {
//       console.error('Erro ao cadastrar:', error);
//       alert('Erro ao cadastrar usuário.');
//     });
//   }

//   getUsers(): Observable<any[]> {
//     return this.http.get<any[]>(`${this.apiUrl}/users`);
//   }
// }
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { supabase } from '../../../supabaseClient';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class BodyRegisterComponent {
  email: string = '';
  name: string = '';
  password: string = '';

  emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  passwordPattern: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  constructor(private router: Router) { }

  async onSubmitRegister() {
    if (!this.emailPattern.test(this.email)) {
      alert('E-mail inválido!');
      return;
    }

    if (!this.passwordPattern.test(this.password)) {
      alert('Senha inválida! A senha deve ter pelo menos 8 caracteres, incluindo letras, números e caracteres especiais.');
      return;
    }

    // Verificar se já existe usuário com esse email
    const { data: existingUser, error: errorCheck } = await supabase
      .from('users')
      .select('id')
      .eq('email', this.email)
      .single();

    if (errorCheck && errorCheck.code !== 'PGRST116') {
      alert('Erro ao verificar usuário.');
      return;
    }

    if (existingUser) {
      alert('E-mail já cadastrado!');
      return;
    }

    // Criar usuário
    const { data, error } = await supabase.from('users').insert([
      {
        name: this.name,
        email: this.email,
        password: this.password, // ideal: criptografar a senha antes de salvar
      },
    ]);

    if (error) {
      alert('Erro ao cadastrar usuário: ' + error.message);
      return;
    }

    alert('Usuário cadastrado com sucesso!');
    this.email = '';
    this.name = '';
    this.password = '';
    this.router.navigate(['/login']);
  }
}
