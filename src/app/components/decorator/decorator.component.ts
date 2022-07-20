import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: []
})
export class DecoratorComponent  {

@Input() text: string = 'hello il';

}
