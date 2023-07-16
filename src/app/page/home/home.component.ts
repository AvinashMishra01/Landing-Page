import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myVideo:any

  constructor()
  {

  }
async ngOnInit() {

 Swal.fire({
  position:'top-end',
  title: 'Important Note',
  html: ' <p> This is Responcive for Laptop And Mobile Screen Only...  </p>',
  showConfirmButton: false,
  timer: 3000

 })


}
async registration()
{
  Swal.fire('Success', " Your Appointment is Scheduled",'success');

}

// myvideo1:any;
async playVideo(){
    this.myVideo=document.getElementById('play')
    if (this.myVideo.paused) {
      this.myVideo.play();

      }
  else  {
      this.myVideo.pause();

      }
}


}
