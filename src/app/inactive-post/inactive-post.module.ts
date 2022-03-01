import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InactivePostsPage } from './inactive-posts.page';
import { RouterModule, Routes } from '@angular/router';
import { PostCardModule } from '../shared/post-card.module';
import { AuthGuard } from '../shared/auth.guard';

const routes: Routes = [
  { path: '', component:InactivePostsPage,canActivate: [AuthGuard]  }
];

@NgModule({
  declarations: [InactivePostsPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    PostCardModule
  ]
})
export class InactivePostModule { }
