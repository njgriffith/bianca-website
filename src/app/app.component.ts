import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { LayDownComponent } from "./lay-down/lay-down.component";
import { MusicComponent } from "./music/music.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LandingPageComponent, LayDownComponent, MusicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
