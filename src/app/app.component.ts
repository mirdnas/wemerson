import { Component, Input } from '@angular/core';
import { MegamenuComponent } from './megamenu/megamenu.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @Input() megamenu?: MegamenuComponent;

  title = 'wemerson';
}
