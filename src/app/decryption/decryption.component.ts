import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decryption',
  templateUrl: './decryption.component.html',
  styleUrls: ['./decryption.component.scss'],
})
export class DecryptionComponent implements OnInit {
  cryptogram = [
    '   + -- + - + -   ',
    '   + --- + - +   ',
    '   + -- + - + -   ',
    '   + - + - + - +   ',
  ];

  decryption;
  constructor() {}

  ngOnInit(): void {
    let binary = this.cryptogramToBinary(this.cryptogram);
    let decimal = this.binaryToDecimal(binary);
    let ascill = this.decimalToAscill(decimal);
    this.decryption = this.result(ascill);
  }

  cryptogramToBinary(cryptogram: string[]): any {
    let data = [];
    for (const cryp of cryptogram) {
      data.push(
        cryp.replace(/\s/g, '').replace(/\+/g, '1').replace(/\-/g, '0')
      );
    }
    this.cryptogram = data;
    return this.cryptogram;
  }

  binaryToDecimal(cryptogramToBinary: any) {
    let binaryToDecimal = [];
    for (const cryp of cryptogramToBinary) {
      binaryToDecimal.push(parseInt(cryp, 2));
    }
    return binaryToDecimal;
  }

  decimalToAscill(decimals: any[]) {
    let decimalToAscii = [];
    for (const cryp of decimals) {
      decimalToAscii.push(String.fromCharCode(cryp));
    }
    return decimalToAscii;
  }

  result(dataArray) {
    let result = '';
    for (const data of dataArray) {
      result += data;
    }
    return result;
  }
}
