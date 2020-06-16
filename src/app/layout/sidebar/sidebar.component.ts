import { Component, OnInit } from '@angular/core';
import { menuItem } from './menuItem.model';
import { UiServiceService } from '../../core/ui-service.service';

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
      title: 'مدیریت شرکت ها',
      url: '/home'
    },
    {
      icon: 'supervisor_account',
      title: 'مدیریت مالکان',
      url: '/users'
    },
    {
      icon: 'language',
      title: 'مدیریت شهرها و کشورها',
      url: '/regions'
    }];
  }

  collapseSidebar() {
    this.UiSevice.changeSidebarStatus()
  }

}
