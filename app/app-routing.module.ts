import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
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



const routes: Routes = [
{path :'',redirectTo:'home',pathMatch:'full'},
{path :'Login',component:LoginComponent},
{path :'signup',component:SignupComponent},
{path :'users',component:UsersComponent},
{path :'home',component:HomeComponent},
{path :'users/:userId/view',component:ViewComponent},
{path :'users/:userId/edit',component:EditComponent},
{path :'productsuser',component:ProductuserComponent},
{path :'productsuser/:productId/view',component:ViewproduserComponent},

{path :'productsadmin',component:ProductsadminComponent},
{path :'productsadmin/create',component:CreateprodComponent},
{path :'productsadmin/:productId/view',component:ViewprodadmComponent},
{path :'productsadmin/:productId/edit',component:EditprodComponent},
{path :'profile',component:ProfileComponent},
{path :'aboutus',component:AboutusComponent},
{path :'contact',component:ContactComponent},
{path :'privacy',component:PrivacypolicyComponent},

{path :'usersorderlist',component:UserorderlistComponent},
{path :'adminorderlist',component:OrderslistadminComponent},
{path :'productsuser/:productId/createorder',component:CreateorderComponent},
{path :'editorder',component: EditorderuserComponent},
{path :'editprofile',component: EditprofileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
