import { Component,OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

constructor(){}

  ngOnInit(): void {

  }
  async homePage()
  {
    Swal.fire("Info", "You Are On The Home Page", 'warning');
  }
 async aboutPage()
 {
Swal.fire("Info", "Working In Progress....", 'info');

 }

async contactPage()
{
  Swal.fire("Info", "Working In Progress....", 'info');

}

}
