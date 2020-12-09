import { Component } from '@angular/core';
import { FormDataService} from './services/form-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multistageform';
  constructor(public formDataService : FormDataService) {

  }
}
