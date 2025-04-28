import { Component } from '@angular/core';
import { InputComponent } from "../../shared/input/input.component";

@Component({
  selector: 'apollo-personal-form',
  imports: [InputComponent, InputComponent],
  templateUrl: './personal-form.component.html',
  styleUrl: './personal-form.component.scss'
})
export class PersonalFormComponent {

}
