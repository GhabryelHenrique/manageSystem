import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div
      class="surface-ground w-100"
      style="    width: 100vw !important;
    min-height: 100vh !important;"
    >
      <div
        *ngIf="this.router.url === '/auth/login' || this.router.url === '/auth/register'"
      >
        <router-outlet></router-outlet>
      </div>
      <div class="d-flex flex-row" *ngIf="this.router.url != '/auth/login' && this.router.url != '/auth/register'">
        <app-sidebar></app-sidebar>
        <div class="w-100">
          <app-header></app-header>
          <div class="p-4">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'manageSystem';

  constructor(public router: Router) {}

  ngOnInit() {}
}
