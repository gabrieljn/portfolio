import { Component } from '@angular/core';
import { LottieComponent } from 'ngx-lottie';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  options: AnimationOptions = {
    path: 'animations/Programming.json',
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  };

}
