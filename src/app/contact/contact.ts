import { Component } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  options: AnimationOptions = {
    path: 'animations/Contact.json',
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  };
}