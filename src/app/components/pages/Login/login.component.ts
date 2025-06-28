// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
// import { RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule, RouterLink],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css',
// })
// export class BodyLoginComponent implements OnInit {
//   constructor(private router: Router) { }

//   userData: any;
//   users: any;
//   url: string = 'http://localhost:3000/users';

//   emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   user: string = '';
//   password: string = '';

//   ngOnInit() {
//     fetch(this.url)
//       .then((res) => res.json())
//       .then((json) => {
//         this.userData = json;
//       });
//   }

//   onSubmit() {
//     if (!this.emailPattern.test(this.user)) {
//       alert('E-mail inválido!');
//       return;
//     }

//     if (!this.passwordPattern.test(this.password)) {
//       alert('Senha inválida!');
//       return;
//     }

//     this.users = Object.values(this.userData);
//     const foundUser = this.users.find(
//       (user: any) => this.user === user.email && this.password === user.password
//     );

//     if (foundUser) {
//       localStorage.setItem('id', foundUser.id);
//       localStorage.setItem('name', foundUser.name);
//       localStorage.setItem('user', foundUser.email);
//       localStorage.setItem('password', foundUser.password);
//       alert('Login concluído!');
//       this.router.navigate(['/search']);
//     } else {
//       alert('Usuário ou senha incorretos...');
//     }
//   }
// }
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { supabase } from '../../../supabaseClient';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class BodyLoginComponent {
  user: string = '';
  password: string = '';

  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  constructor(private router: Router) { }

  async onSubmit() {
    if (!this.emailPattern.test(this.user)) {
      alert('E-mail inválido!');
      return;
    }

    if (!this.passwordPattern.test(this.password)) {
      alert('Senha inválida!');
      return;
    }


    const { data: users, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', this.user)
      .limit(1);

    if (error) {
      alert('Erro ao buscar usuário: ' + error.message);
      return;
    }

    if (!users || users.length === 0) {
      alert('Usuário não encontrado.');
      return;
    }

    const foundUser = users[0];


    if (foundUser.password !== this.password) {
      alert('Senha incorreta.');
      return;
    }


    localStorage.setItem('id', foundUser.id);
    localStorage.setItem('name', foundUser.name);
    localStorage.setItem('user', foundUser.email);
    alert('Login concluído!');
    this.router.navigate(['/search']);
  }
}

