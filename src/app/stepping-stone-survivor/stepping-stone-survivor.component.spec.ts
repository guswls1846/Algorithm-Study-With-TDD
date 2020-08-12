import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppingStoneSurvivorComponent } from './stepping-stone-survivor.component';

describe('SteppingStoneSurvivorComponent', () => {
  let component: SteppingStoneSurvivorComponent;
  let fixture: ComponentFixture<SteppingStoneSurvivorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SteppingStoneSurvivorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteppingStoneSurvivorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('독 들의 점프력에 따른 현재 위치', () => {
  //   const stoneLength = component.stonDurability.length;
  //   const currentPosition = component.getPosition(component.dogs[0].점프력, stoneLength);
  //   expect(currentPosition).toEqual(2);
  // });

  // it('징검다리 끝에 도착했는지 체크', () => {
  //   const stoneLength = component.stonDurability.length;
  //   let currentPosition = component.getPosition(component.dogs[0].점프력, stoneLength);
  //   let checkPoint = component.checkStonEndPoint(currentPosition, stoneLength);
  //   expect(checkPoint).toBeFalse();

  //   currentPosition = component.getPosition(component.dogs[0].점프력, stoneLength);
  //   checkPoint = component.checkStonEndPoint(currentPosition, stoneLength);
  //   expect(checkPoint).toBeTrue();
  // });

  // it('독 들의 무게에 따른 바위 내구성 감소', () => {
  //   const stoneLength = component.stonDurability.length;
  //   const stonDurabilityTest = [1, 2, -3, 4];
  //   const rubidogPosition = component.getPosition(component.dogs[0].점프력, stoneLength);
  //   const stonDurability = component.stonDurabilityMinus(component.dogs[0].몸무게, rubidogPosition);
  //   expect(stonDurability).toEqual(stonDurabilityTest);

  //   const stonDurabilityTest2 = [1, 2, -6, 4];
  //   component.currentPosition = 0;
  //   const rubidogPosition2 = component.getPosition(component.dogs[1].점프력, stoneLength);
  //   const stonDurability2 = component.stonDurabilityMinus(component.dogs[1].몸무게, rubidogPosition2);
  //   expect(stonDurability2).toEqual(stonDurabilityTest2);

  //   const stonDurabilityTest3 = [1, 1, -6, 4];
  //   component.currentPosition = 0;
  //   const rubidogPosition3 = component.getPosition(component.dogs[2].점프력, stoneLength);
  //   const stonDurability3 = component.stonDurabilityMinus(component.dogs[2].몸무게, rubidogPosition3);
  //   expect(stonDurability3).toEqual(stonDurabilityTest3);

  //   const stonDurabilityTest4 = [0, 1, -6, 4];
  //   component.currentPosition = 0;
  //   const rubidogPosition4 = component.getPosition(component.dogs[3].점프력, stoneLength);
  //   const stonDurability4 = component.stonDurabilityMinus(component.dogs[3].몸무게, rubidogPosition4);
  //   expect(stonDurability4).toEqual(stonDurabilityTest4);
  // });

  // it('독들이 점프한 위치가 바위의 내구성보다 독의 무게가 크면 아웃', () => {
  //   const stoneLength = component.stonDurability.length;
  //   const rubidogPosition = component.getPosition(component.dogs[0].점프력, stoneLength);
  //   component.stonDurabilityMinus(component.dogs[0].몸무게, rubidogPosition);
  //   const rubidogSaveCheck = component.saveCheck(component.dogs[0].몸무게, rubidogPosition);
  //   expect(rubidogSaveCheck).toBeFalse();

  //   component.currentPosition = 0;
  //   const pichdogPosition = component.getPosition(component.dogs[1].점프력, stoneLength);
  //   component.stonDurabilityMinus(component.dogs[1].몸무게, pichdogPosition);
  //   const pichdogSaveCheck = component.saveCheck(component.dogs[1].몸무게, pichdogPosition);
  //   expect(pichdogSaveCheck).toBeFalse();

  //   component.currentPosition = 0;
  //   const cdogPosition = component.getPosition(component.dogs[2].점프력, stoneLength);
  //   component.stonDurabilityMinus(component.dogs[2].몸무게, cdogPosition);
  //   const cdogSaveCheck = component.saveCheck(component.dogs[2].몸무게, cdogPosition);
  //   // expect(cdogSaveCheck).toBeFalse();
  //   expect(cdogSaveCheck).toBeTrue();

  //   component.currentPosition = 0;
  //   const covuldogPosition = component.getPosition(component.dogs[3].점프력, stoneLength);
  //   component.stonDurabilityMinus(component.dogs[3].몸무게, covuldogPosition);
  //   const covuldogSaveCheck = component.saveCheck(component.dogs[3].몸무게, covuldogPosition);
  //   expect(covuldogSaveCheck).toBeFalse();
  // });

  it('징검다리 끝에 도착하면 생존자 배열에 넣기', () => {
    const stoneLength = component.stonDurability.length;
    const servivorTest = ['씨-독'];
    let servivor = component.stepedStone(component.dogs[0], stoneLength);
    expect(servivor).toEqual(['루비독']);

    component.currentPosition = 0;
    servivor = component.stepedStone(component.dogs[1], stoneLength);
    expect(servivor).toEqual([]);

    component.currentPosition = 0;
    servivor = component.stepedStone(component.dogs[2], stoneLength);
    expect(servivor).toEqual(['루비독', '씨-독']);
  });
});
