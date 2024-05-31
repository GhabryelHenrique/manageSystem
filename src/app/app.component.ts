import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div
      class="surface-ground d-flex flex-row w-100"
     style="    width: 100vw !important;
    min-height: 100vh !important;"
    >
      <app-sidebar></app-sidebar>
      <div class="w-100">
        <app-header></app-header>
      <div class="p-4">
        <router-outlet></router-outlet>
      </div>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'manageSystem';
}
