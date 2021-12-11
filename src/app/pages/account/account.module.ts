import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './account.page';
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { Base64ToGallery } from "@ionic-native/base64-to-gallery/ngx";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule,
    NgxQRCodeModule,
    
    
  ],
  
  declarations: [AccountPage,BarcodeScanner,Base64ToGallery],
  exports:[
  BarcodeScanner,
  Base64ToGallery
  ]
})
export class AccountPageModule {}
