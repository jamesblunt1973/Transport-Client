import { Component, OnInit } from '@angular/core';
import { UiServiceService } from '../../core/ui-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  menuStatus = '';
  userName = '';
  constructor(private uiService: UiServiceService) { }

  ngOnInit() {
    this.uiService.getMessage().subscribe(status => {
      this.menuStatus = status;
    })
  };

  changeMenuBtn() {
    this.uiService.changeSidebarStatus();
  }

}
