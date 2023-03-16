import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ViewprodadmComponent } from './viewprodadm/viewprodadm.component';
import { CreateprodComponent } from './createprod/createprod.component';
import { EditprodComponent } from './editprod/editprod.component';
import { ProductsadminComponent } from './productsadmin/productsadmin.component';
import { ProductuserComponent } from './productuser/productuser.component';
import { ViewproduserComponent } from './viewproduser/viewproduser.component';
import { ProfileComponent } from './profile/profile.component';
import { UserorderlistComponent } from './userorderlist/userorderlist.component';
import { OrderslistadminComponent } from './orderslistadmin/orderslistadmin.component';
import { CreateorderComponent } from './createorder/createorder.component';
import { EditorderuserComponent } from './editorderuser/editorderuser.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    UsersComponent,
    ViewComponent,
    EditComponent,
    HomeComponent,
    ViewprodadmComponent,
    CreateprodComponent,
    EditprodComponent,
    ProductsadminComponent,
    ProductuserComponent,
    ViewproduserComponent,
    ProfileComponent,
    UserorderlistComponent,
    OrderslistadminComponent,
    CreateorderComponent,
    EditorderuserComponent,
    EditprofileComponent,
    AboutusComponent,
    ContactComponent,
    PrivacypolicyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
