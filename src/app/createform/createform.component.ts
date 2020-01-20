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
            private router: Router) {

}
private indexname = this.route.snapshot.paramMap.get('name');
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

loadData() {

  this.dataService.saveData( `index/insert${this.indexname}` , this.formObj ).subscribe((res) => {
    console.log(res);

  });
}

}




