import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivePostsPage } from './active-posts.page';
import { RouterModule, Routes } from '@angular/router';
import { PostCardModule } from '../shared/post-card.module';



const routes: Routes = [
  { path: '', component:ActivePostsPage}
];
@NgModule({
  declarations: [ActivePostsPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    PostCardModule
  ]

})
export class ActivePostModule { }

