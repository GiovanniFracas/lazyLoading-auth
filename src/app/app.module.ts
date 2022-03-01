import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';

import { InactivePostsPage } from './inactive-post/inactive-posts.page';
import { MaiuscoloPipe } from './pipes/maiuscolo.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { PostDetailsPage } from './activePost/post-details.page';
import { UsersPage } from './pages/users.page';
import { UsersDetailsPage } from './pages/users-details.page';
import { HomeModule } from './home/home.module';
import { ActivePostModule } from './activePost/active-post.module';
import { InactivePostModule } from './inactive-post/inactive-post.module';
import { AuthGuard } from './shared/auth.guard';


const routes: Route[] = [
  {
    path: "",
    loadChildren: () => import('./home/home.module').then(m =>
      m.HomeModule)
  },
   {
    path: "active-posts",
    loadChildren: () => import('./activePost/active-post.module').then(m =>
      m.ActivePostModule),

  },
   {
    path: "inactive-posts",
    loadChildren: () => import('./inactive-post/inactive-post.module').then(m =>
      m.InactivePostModule),
  },
    {
    path: "active-posts/:id",
    component: PostDetailsPage,
    canActivate:[AuthGuard]
  },
  {
    path: "inactive-posts/:id",
    component: PostDetailsPage
  },
  {
    path: "users",
    component: UsersPage,
    children: [
      {
        path: ":id",
        component: UsersDetailsPage
      }
    ]
  },
  {
    path: "**",
    redirectTo: ""
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaiuscoloPipe,
    HighlightDirective,
    PostDetailsPage,
    UsersPage,
    UsersDetailsPage,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HomeModule,
    ActivePostModule,
    InactivePostModule

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
