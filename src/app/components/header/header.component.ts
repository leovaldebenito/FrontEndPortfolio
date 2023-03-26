import { Component } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title:string = 'Portfolio Leonardo Valdebenito';

  showAddTask:boolean = true;
  subscription?: Subscription;

  constructor(
    private UiService: UiService,
    private router: Router
  ) {
    this.subscription = this.UiService.onToggle().subscribe(value => this.showAddTask = value )
  }

  toggleAddTask(){
    console.log("toggleAddTask!");
  }

  hasRoute(route:string){
    return this.router.url === route
  }
}
