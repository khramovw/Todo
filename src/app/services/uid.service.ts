import { Injectable } from '@angular/core';

@Injectable()
export class UidService {

  constructor() { }


  generate() {

    return 'xxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : ( r & 0x3 | 0x8 );
      console.log(this.v);
      return v.toString(16);
    });

  }

}
