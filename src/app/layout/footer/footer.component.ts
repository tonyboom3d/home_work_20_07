import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent  {
  createdBy: string = "Tony";
  copyYear: number = new Date().getFullYear();

  constructor() { }

}
