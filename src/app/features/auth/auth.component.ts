import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: null,
      fullName: null,
      password: null,
    })
  }

  onSubmit() {
    const email = this.formGroup?.controls['email'].value;
    const fullName = this.formGroup?.controls['fullName'].value;
    const password = this.formGroup?.controls['password'].value;
    const payload = { "username": email, "password": password, "accountType": "PLAYER" }
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    this.spinner.show()
    this.http.post<any>('http://localhost:8081/api/v1/auth/signup', JSON.stringify(payload), { headers: headers })
      .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', data.username);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('teamId', '1');
          localStorage.setItem('imgUrl', '/assets/images/realmadrid.png');
          const body = {
            username: data.username,
            fullName: fullName,
            teamId: 1
          }
          this.http.post<any>('http://localhost:8080/api/player', body).subscribe(() => {
            this.router.navigate(['/home'])
            this.spinner.hide()
          });
        },
        error => {
          this.http.post<any>('http://localhost:8081/api/v1/auth/signin', JSON.stringify(payload), { headers: headers })
            .subscribe(
              data => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', data.username);
                localStorage.setItem('isLoggedIn', 'true');
                this.http.get<any>('http://localhost:8080/api/player/' + data.username).subscribe(response => {
                console.log(response)  
                localStorage.setItem('teamId', response.team.id);
                localStorage.setItem('imgUrl', response.team.imgUrl);
                  this.router.navigate(['/home'])
                });
                this.spinner.hide()
              },
              error => {
                localStorage.clear()
                this._snackBar.open('Already registered or wrong credentials', 'dismiss', {
                  horizontalPosition: 'center',
                  verticalPosition: 'top',
                  panelClass: ['blue-snackbar']
                })
                this.spinner.hide()
              }
            )
        }
      )
  }
}
