import { Component, OnInit } from '@angular/core';
import { UiServiceService } from '../../core/ui-service.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(private UiService: UiServiceService) { }
  sidebarStatus = false;
  ngOnInit() {
    this.UiService.getMessage().subscribe(status => {
      this.sidebarStatus = status === 'open'
    });
  }
  onSidebarClosing() {
    this.UiService.changeSidebarStatus();
  }
}
