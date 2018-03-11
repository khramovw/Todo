import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

// Services
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../login/login.component.css','./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  email: string;
  password: string;

  constructor( private authService: AuthService,
               private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.email, this.password)
      .then( res => {
        console.log(res);
        this.router.navigate(['/']);
      })
      .catch( err => {
        alert(err.message);
      })
  }

}
