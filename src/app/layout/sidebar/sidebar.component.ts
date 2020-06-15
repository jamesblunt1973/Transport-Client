import { Component, OnInit } from '@angular/core';
import { menuItem } from './menuItem.model';
import { UiServiceService} from '../../core/ui-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItem: menuItem[] = [];

  constructor(private UiSevice: UiServiceService) { }

  ngOnInit(): void {
    this.menuItem = [{
      icon: 'business',
      title: 'Manage Companies',
      url: '/home'
    },
    {
      icon: 'supervisor_account',
      title: 'Manage Owners',
      url: '/users'
    },
    {
      icon: 'languege',
      title: 'Manage Countries and Cities',
      url: '/regions'
    }];
  }

  collapseSidebar(){
    this.UiSevice.changeSidebarStatus()
  }

}
