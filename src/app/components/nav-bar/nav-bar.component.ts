import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

// Services
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( private router: Router,
               private authService: AuthService
  ) { }

  ngOnInit() {

    this.authService.getAuth().subscribe( auth => {
      if ( auth ) {

      }
    })

  }

  onLogOutClick() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
