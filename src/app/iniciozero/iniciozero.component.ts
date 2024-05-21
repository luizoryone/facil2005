import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'; 
import {MatGridListModule} from '@angular/material/grid-list'; 

@Component({
  selector: 'app-iniciozero',
  standalone: true,
  imports: [MatCardModule,MatGridListModule],
  templateUrl: './iniciozero.component.html',
  styleUrl: './iniciozero.component.scss'
})
export class IniciozeroComponent {

}
