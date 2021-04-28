import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SettingsComponent } from './settings/settings.component';
import { ActiveUserComponent } from './active-user/active-user.component';
import { HomeComponent } from './home/home.component';
import { SocketService } from './socket-service.service';

const config: SocketIoConfig = { url: 'https://3000-silver-bee-hbe8dgrb.ws-eu03.gitpod.io/', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ContactsComponent,
    SearchComponent,
    ProfileComponent,
    LoginComponent,
    SignUpComponent,
    SettingsComponent,
    ActiveUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
