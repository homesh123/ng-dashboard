import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: true,
    imports: [
        NgClass,
        NgIf,
        RouterLink,
    ],
})
export class SidebarComponent implements OnInit {

  constructor(public menuService: MenuService) {}
  ngOnInit(): void {}

}
