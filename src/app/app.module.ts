import { NgModule } from '@angular/core';  //
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';

import { FormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ComponentsComponent } from './components/components.component';
import { NavComponent } from './components/nav/nav.component';    //

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    ProductosComponent,
    ComponentsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
