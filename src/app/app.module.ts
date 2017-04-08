import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-key';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

import { AppComponent } from './app.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { AboutComponent } from './about/about.component';
import { RolePipe } from './role.pipe';
import { NewMemberComponent } from './new-member/new-member.component';
import { UpdateMemberComponent } from './update-member/update-member.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    MemberProfileComponent,
    AboutComponent,
    RolePipe,
    NewMemberComponent,
    UpdateMemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
