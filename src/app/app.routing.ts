import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { AboutComponent } from './about/about.component';
import { NewMemberComponent } from './new-member/new-member.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MemberListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'member/:id',
    component: MemberProfileComponent
  },
  {
    path: 'admin',
    component: MemberListComponent
  },
  {
    path: 'admin/new-member',
    component: NewMemberComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
