import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AnimationOptions, LottieComponent } from 'ngx-lottie';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LottieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  options: AnimationOptions = {
    path: 'https://lottie.host/3aa3bb20-4821-4bdd-89f0-54900543f407/ATKpVBs4KH.json',
  }
  
  animationCreated(animationItem: any): void {
    console.log(animationItem);
  }

  error(e:any){
    console.log(e)
  }
}
