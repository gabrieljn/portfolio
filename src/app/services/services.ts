import { Component } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  options: AnimationOptions = {
    path: 'animations/Computer.json',
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  };
}