import { Component, OnInit , Input , OnDestroy } from '@angular/core';
import {Subscription, from} from 'rxjs';



@Component({
  selector: 'app-sub-createform',
  templateUrl: './sub-createform.component.html',
  styleUrls: ['./sub-createform.component.scss']
})
export class SubCreateformComponent implements OnInit , OnDestroy {



      @Input() forms: any;

  constructor( ) {

  }

  typeList = [
    { key: 'int' , value: 'int'},
    {key: 'text' , value: 'Text'},
    {key: 'nested' , value: 'Nested'},
    {key: 'boolean'  , value : 'Boolean'},
    {key: 'binary'  , value : 'Binary'},
    {key: 'float'  , value : 'Float'},
    {key: 'double'  , value : 'Double'},
    {key: 'search'  , value : 'Search'}


  ];

ngOnInit() {
}
onTypeSelection(event: any , obj: any) {
if (event.value === 'nested') {
    obj.children.push({
    key: '',
    type: '',
    children: []
  });
}

}

onNewField() {
  this.forms.push({
    FieldName: '',
    DataType: '',
    children: []

  });

}
// I remove the pet at the given index.
public removeList( index: number ) {



  this.forms.splice( index, 1 );


}



ngOnDestroy(): void {
  throw new Error('Method not implemented.');
}


}


