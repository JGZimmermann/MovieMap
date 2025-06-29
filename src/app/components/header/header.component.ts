import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  isLogged: string = "false";



  ngOnInit() {
    console.log(this.isLogged);

    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('isLogged');
      this.isLogged = token ?? 'false';
      console.log(this.isLogged);
    }
  }
}