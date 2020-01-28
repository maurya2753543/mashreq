import { Component ,  OnInit} from '@angular/core';
import { SubmissionService } from 'src/app/submission.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.scss'],

})
export class CreateformComponent implements OnInit  {

constructor(private dataService: SubmissionService,
            private route: ActivatedRoute,
            private router: Router
           ) {

}
private indexname = this.route.snapshot.paramMap.get('name');
public action = this.route.snapshot.paramMap.get('action');


formObj = [{
 FieldName: '' ,
 DataType: '' ,
 children: []

}];

ngOnInit() {
console.log('formObj' , this.formObj);
this.loadData();
}

loadData() {
  if (this.action === 'view') {
    this.dataService.getData(`index/getmappings/${ this.indexname }`).subscribe((res) => {
      this.formObj = this.modifyFormData(res[this.indexname].mappings.properties);
    });
  }
}

modifyFormData(obj: any) {
  const dataObj = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      const fieldObj = {
        FieldName:  prop,
        DataType: obj[prop].type,
        children: []
      };
      if (obj[prop].type === 'nested') {
        fieldObj.children = this.modifyFormData(obj[prop].properties);
      }
      dataObj.push(fieldObj);
    }
  }
  return dataObj;
}


indexdata() {

  this.dataService.saveData( `index/insert/${ this.indexname }` , this.formObj ).subscribe((res) => {
    console.log(res);

  });
}


}




