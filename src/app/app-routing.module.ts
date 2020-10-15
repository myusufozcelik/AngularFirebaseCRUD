import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'tutorials', pathMatch: 'full'},
  {path: 'tutorials', component: TutorialsListComponent},
  {path: 'add', component: AddTutorialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
