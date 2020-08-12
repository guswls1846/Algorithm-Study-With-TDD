import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepping-stone-survivor',
  templateUrl: './stepping-stone-survivor.component.html',
  styleUrls: ['./stepping-stone-survivor.component.scss'],
})
export class SteppingStoneSurvivorComponent implements OnInit {
  // stonDurability = [1, 2, 1, 4];
  // dogs = [
  //   {
  //     이름: '루비독',
  //     나이: '95년생',
  //     점프력: '3',
  //     몸무게: '4',
  //   },
  //   {
  //     이름: '피치독',
  //     나이: '95년생',
  //     점프력: '3',
  //     몸무게: '3',
  //   },
  //   {
  //     이름: '씨-독',
  //     나이: '72년생',
  //     점프력: '2',
  //     몸무게: '1',
  //   },
  //   {
  //     이름: '코볼독',
  //     나이: '59년생',
  //     점프력: '1',
  //     몸무게: '1',
  //   },
  // ];
  stonDurability = [5, 3, 4, 1, 3, 8, 3];
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
  currentPosition = 0;
  servivor = [];

  dogPosition;
  endPoint;
  dogSaveCheck;
  constructor() {}

  ngOnInit(): void {}

  getPosition(점프력: string, stoneLength: number) {
    if (this.currentPosition < stoneLength) {
      this.currentPosition = this.currentPosition + parseInt(점프력, 10);
    }
    return this.currentPosition;
  }

  checkStonEndPoint(dogPosition: number, stoneLength: number) {
    // console.log(dogPosition, stoneLength);

    if (dogPosition - 1 >= stoneLength) {
      return true;
    } else {
      return false;
    }
  }

  stonDurabilityMinus(몸무게: string, dogPosition: number) {
    let weight = parseInt(몸무게, 10);
    this.stonDurability[dogPosition - 1] = this.stonDurability[dogPosition - 1] - weight;
    return this.stonDurability;
  }

  saveCheck(몸무게: string, currentPosition) {
    // console.log(몸무게, currentPosition);

    if (parseInt(몸무게, 10) <= this.stonDurability[currentPosition - 1] && this.stonDurability[currentPosition - 1] >= 0) {
      return true;
    } else {
      return false;
    }
  }

  stepedStone(dog: { 이름: string; 나이: string; 점프력: string; 몸무게: string }, stoneLength) {
    // this.stepProcess(dog, stoneLength);

    let endPoint = false;

    let dogSaveCheck = true;

    while (!endPoint) {
      let dogPosition = this.getPosition(dog.점프력, stoneLength);
      dogSaveCheck = this.saveCheck(dog.몸무게, dogPosition);
      endPoint = this.checkStonEndPoint(dogPosition, stoneLength);

      this.stonDurabilityMinus(dog.몸무게, dogPosition);
      if (!endPoint) {
        dogSaveCheck = this.saveCheck(dog.몸무게, dogPosition);
      }

      console.log(dogPosition - 1, endPoint, dogSaveCheck);
    }

    if (endPoint && dogSaveCheck) {
      this.servivor.push(dog.이름);
    }

    return this.servivor;
  }
}
