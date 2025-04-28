import { Component } from '@angular/core';
import { PersonalFormComponent } from "../components/personal-form/personal-form.component";

@Component({
  selector: 'app-form',
  imports: [PersonalFormComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

}
