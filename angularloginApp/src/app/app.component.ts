import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FromLoginComponent } from './components/from-login/from-login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FromLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularloginApp';
}
