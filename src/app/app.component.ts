import { Component } from '@angular/core';
import { HeaderComponent } from './components/pages/Register/headerRegister/header.component';
import { FooterComponent } from './components/pages/Register/footer/footer.component';
import { BodyRegisterComponent } from './components/pages/Register/body-register/body-register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, FooterComponent, BodyRegisterComponent],
})
export class AppComponent {
  title = 'projeto';
}
