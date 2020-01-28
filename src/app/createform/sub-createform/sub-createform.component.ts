import { Component, OnInit , Input , OnDestroy } from '@angular/core';
import {Subscription, from} from 'rxjs';



@Component({
  selector: 'app-sub-createform',
  templateUrl: './sub-createform.component.html',
  styleUrls: ['./sub-createform.component.scss']
})
export class SubCreateformComponent implements OnInit {



      @Input() forms: any;

      @Input() action: string;

  constructor( ) {

  }

  typeList = [
    {key: 'integer' , value: 'Integer'},
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
    children: [],
    IsSearchable: false
  });
}

}

onNewField() {
  this.forms.push({
    FieldName: '',
    DataType: '',
    children: [],
    IsSearchable: false

  });

}
// I remove the pet at the given index.
public removeList( index: number ) {



  this.forms.splice( index, 1 );


}


}


