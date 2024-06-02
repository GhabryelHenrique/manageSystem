import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreComponentsModule } from './core/components/core-components.module';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./modules/produtos/produtos.module').then(m => m.ProdutosModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule)
  },
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreComponentsModule,
    RouterModule.forRoot(routes),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
