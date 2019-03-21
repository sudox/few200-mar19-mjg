import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommunicationsComponent } from './features/communications/communications.component';
import { ReduxDemoComponent } from './components/redux-demo/redux-demo.component';
import { TodolistComponent } from './features/todolist/todolist.component';
import { BookcollectionComponent } from './features/bookcollection/bookcollection.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'communications',
    component: CommunicationsComponent
  },
  {
    path: 'redux-demo',
    component: ReduxDemoComponent
  },
  {
    path: 'todo-list',
    component: TodolistComponent
  },
  {
    path: 'book-collection',
    component: BookcollectionComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
