import { Component } from '@angular/core';
import { GeneralInfoComponent } from "../widgets/general-info/general-info.component";
import { WorksheetComponent } from "../widgets/worksheet/worksheet.component";
import { PersonalInfoComponent } from "../widgets/personal-info/personal-info.component";
import { LastPatientsComponent } from "../widgets/last-patients/last-patients.component";
import { WidgetComponent } from "../shared/widget/widget.component";

@Component({
  selector: 'app-dashboard',
  imports: [GeneralInfoComponent, WorksheetComponent, PersonalInfoComponent, LastPatientsComponent, WidgetComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
