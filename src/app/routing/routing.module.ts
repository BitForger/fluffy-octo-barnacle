import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }        from '../components/routes/home/home.component';
import { AboutComponent }       from '../components/routes/about/about.component';
import { ProjectsComponent }    from '../components/routes/projects/projects.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
