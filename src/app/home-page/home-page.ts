import { Component } from '@angular/core';
import { About } from '../about/about';
import { Stacks } from '../stacks/stacks';
import { Services } from '../services/services';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [About, Stacks, Services, Projects, Contact],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
