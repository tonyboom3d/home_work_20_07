import { Component, Input } from '@angular/core';

@Component({
  selector: 'nav-link-top',
  templateUrl: './nav-link-top.component.html',
  styleUrls: []
})
export class NavLinkTopComponent{

   @Input() to: string = 'www.click2buy.shop';
    @Input() text: string = 'test';



}
