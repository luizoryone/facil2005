import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menuzero',
  standalone: true,
  imports: [RouterModule,MatToolbarModule, MatButtonModule, MatIconModule],  templateUrl: './menuzero.component.html',
  styleUrl: './menuzero.component.scss'
})
export class MenuzeroComponent {

}

