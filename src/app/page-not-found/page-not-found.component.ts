import { Component, OnInit } from '@angular/core';
import { SessionService } from '../core/services/session.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private session: SessionService) { 
    session.removeUser();
    session.logout();
  }

  ngOnInit(): void {
  }

}
