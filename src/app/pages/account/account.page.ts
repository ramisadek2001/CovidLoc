import { Component, OnInit } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { File } from "@ionic-native/file/ngx";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ToastController } from '@ionic/angular';
import { QrcodeService, Qr } from "../../qrcode.service";
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  qrData = "https://covax.moph.gov.lb/impactmobile/vaccine/certificate?code=7NGGPMU4NY";
  scannedCode = null;
  elementType: 'url' | 'canvas' |'img' = 'url';
  constructor(private document: DocumentViewer,private file:File, private trasfer: FileTransfer,private router:Router,private barcodeScanner: BarcodeScanner, private base64ToGallery: Base64ToGallery, privatetoastCtrl: ToastController,private service: QrcodeService ) { 
   
  }
qr: Qr[];
  scanCode(){

    this.barcodeScanner.scan().then(
      barcodeData =>{
        this.scannedCode = barcodeData;
      }
    );
  }

  downloadQR(){

  }

  logout(){
    this.router.navigate(['login']);
  }
  openPDF(){
    const options: DocumentViewerOptions ={
      title: 'My PDF'
    }
    this.document.viewDocument('../../../assets/vac.pdf','application/pdf',options)
  }

  ngOnInit() {
    this.service.getQr().subscribe( Response =>{
      this.qr = Response;
      console.log("data:",this.qr);
    });
  }

}

   