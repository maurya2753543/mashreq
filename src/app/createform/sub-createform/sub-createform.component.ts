import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-sub-createform',
  templateUrl: './sub-createform.component.html',
  styleUrls: ['./sub-createform.component.scss']
})
export class SubCreateformComponent implements OnInit {
  @Input() forms: any;

  typeList = [
    { key: 'int' , value: 'int'},
    {key: 'string' , value: 'String'},
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
public removeList( index: number ): void {

  this.forms.splice( index, 1 );

}




}


