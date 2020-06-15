import { Component, OnInit} from '@angular/core';
import { ICompany } from 'src/app/shared/models/test.models';


// import { MatDialog } from '@angular/material/dialog';
// import { Subscription } from 'rxjs';
// import { DataService } from '../../core/data.service';
// import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';
// import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';



@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  companies :ICompany[] = [];

  selectCompany(company:ICompany){
    
  }
}
