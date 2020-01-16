import { Component ,  OnInit} from '@angular/core';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.scss'],

})
export class CreateformComponent implements OnInit  {

constructor() {

}

formObj = [{
 FieldName: '' ,
 DataType: '' ,
 children: []

}];

ngOnInit() {
console.log('formObj' , this.formObj);

}

onSubmit() {

}

}




