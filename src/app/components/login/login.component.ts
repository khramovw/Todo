import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  user: string;

  @ViewChild("todoForm") form: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    this.authService.getAuth().subscribe( auth => {
      if ( auth ) {
        this.router.navigate(['/']);
      }
    });

  }

  onSubmit() {
    this.authService.login(this.email, this.password)
      .then( res => {
        this.user = this.email;
        this.router.navigate(['/']);
      })
      .catch( err => {
        alert(err.message);
      });
  }
}
