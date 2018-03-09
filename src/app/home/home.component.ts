import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser;
  type;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private userService: UserService) {}

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.type = JSON.parse(localStorage.getItem('currentUser')).type;
  }

  searchNotice(){
    console.log('search Notice');
    this.router.navigate(['searchNotice']);
  }
  addNotice(){
    console.log('Add Notice');
    this.router.navigate(['addNotice']);
  }
  myNotice(profil){
    console.log('My Notice for : ', profil);
    this.router.navigate(['myNotice']);
  }






  /*
  * Fonction Test a enlever
  * FIXME
  * */

  testChangeProfil(profil){
    console.log('My Notice for : ', profil);
    this.type = profil;
  }

  test() {
    this.userService.loginTest().subscribe(
      data => {
        console.log('data : ', data);
      },
      error => {
        console.log('error : ', error);
        this.alertService.error(error);
      });
  }
}
