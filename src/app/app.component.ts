import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(param => {
      let route = param['p'];
      if (route) {
        window.history.replaceState({}, 'index', '/');
        this.router.navigateByUrl(route);
      }
    })
  }
}
