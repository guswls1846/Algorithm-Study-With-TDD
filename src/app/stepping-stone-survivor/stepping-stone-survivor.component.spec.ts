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

  it('징검다리 내구도 생성', () => {
    expect(component.stonDurability).toEqual([1, 2, 1, 4]);
  });

  it('징검다리를 건너야 할 강아지 4마리 생성', () => {
    const dogs: any = [
      {
        이름: '루비독',
        나이: '95년생',
        점프력: '3',
        몸무게: '4',
      },
      {
        이름: '피치독',
        나이: '95년생',
        점프력: '3',
        몸무게: '3',
      },
      {
        이름: '씨-독',
        나이: '72년생',
        점프력: '2',
        몸무게: '1',
      },
      {
        이름: '코볼독',
        나이: '59년생',
        점프력: '1',
        몸무게: '1',
      },
    ];
    expect(component.dogs).toEqual(dogs);
  });

  it('각 돌에 독들이 착지할 때 돌의 내구도는 몸무게만큼 줄어듭니다.', () => {
    // expect(component.steppingStone(component.dogs)).toBeLessThan(0);
  });
});
