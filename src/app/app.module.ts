import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from "@ionic-native/base64-to-gallery/ngx";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { File } from "@ionic-native/file/ngx";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { DocumentViewer } from "@ionic-native/document-viewer/ngx";
import { LoginService } from './login.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [
    File,
    BarcodeScanner,
    FileTransfer,
    Base64ToGallery,
    DocumentViewer,
    LoginService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
