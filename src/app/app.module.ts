import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter/counter.reducer';
import { CounterComponent } from './components/counter/counter.component';
import { TopNavComponent } from './components/layouts/top-nav/top-nav.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeReducer } from './state/employee/employee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { userReducer } from './state/user/user.reducer';
import { UserEffects } from './state/user/user.effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TopNavComponent,
    EmployeeComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({counter: counterReducer, employees: EmployeeReducer, userState: userReducer}),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
