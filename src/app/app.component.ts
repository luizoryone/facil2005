import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { IniciozeroComponent } from './iniciozero/iniciozero.component';
import { MenuzeroComponent } from './menuzero/menuzero.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoginzeroComponent } from './loginzero/loginzero.component';
import { RodapezeroComponent } from './rodapezero/rodapezero.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,RouterOutlet, MatButtonModule,MatCardModule,IniciozeroComponent,MenuzeroComponent,MatGridListModule,LoginzeroComponent,RodapezeroComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'facil2005';
}
