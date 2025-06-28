import { Component } from '@angular/core';
import { FooterComponent } from '../app/components/Footer/footer.component'
import { HeaderComponent } from '../app/components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
})
export class AppComponent {
  title = 'MovieMap';

}
