import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss']
})
export class ToolbarMenuComponent {
  @Input() popText = false;
  @Input() menuTitle = '';
  @Input() smallScreen = false;




}
