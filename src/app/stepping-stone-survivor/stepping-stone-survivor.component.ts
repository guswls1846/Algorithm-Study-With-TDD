import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepping-stone-survivor',
  templateUrl: './stepping-stone-survivor.component.html',
  styleUrls: ['./stepping-stone-survivor.component.scss'],
})
export class SteppingStoneSurvivorComponent implements OnInit {
  stonDurability = [1, 2, 1, 4];
  dogs = [
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

  constructor() {}

  ngOnInit(): void {}

  steppingStone(dogs): any {
    throw new Error('Method not implemented.');
  }
}
