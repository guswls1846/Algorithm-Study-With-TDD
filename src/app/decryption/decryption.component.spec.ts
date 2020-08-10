import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecryptionComponent } from './decryption.component';

describe('DecryptionComponent', () => {
  let component: DecryptionComponent;
  let fixture: ComponentFixture<DecryptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DecryptionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('암호해독', () => {
    const binaryTest = ['1001010', '1000101', '1001010', '1010101'];
    const cryptogramToBinary = component.cryptogramToBinary(
      component.cryptogram
    );
    expect(cryptogramToBinary).toEqual(binaryTest);

    const decimalTest = [74, 69, 74, 85];
    const binaryToDecimal = component.binaryToDecimal(cryptogramToBinary);
    expect(binaryToDecimal).toEqual(decimalTest);

    const asciiTest = ['J', 'E', 'J', 'U'];
    const decimalToAscill = component.decimalToAscill(binaryToDecimal);
    expect(decimalToAscill).toEqual(asciiTest);

    const decryptionTest = 'JEJU';
    const resultData = component.result(decimalToAscill);
    expect(resultData).toEqual(decryptionTest);
  });
});
