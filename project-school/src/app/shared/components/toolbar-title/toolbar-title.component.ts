import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-toolbar-title',
  templateUrl: './toolbar-title.component.html',
  styleUrls: ['./toolbar-title.component.scss']
})
export class ToolbarTitleComponent implements OnInit {
  @Input() title: string = "";

  iconFa = '';
  iconMat = '';

  @Input()
  set icon (value:string) {
    value.includes('fa-') ? this.iconFa = value : this.iconMat = value;
  }



  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
