import { Injectable } from '@angular/core';

@Injectable()
export class MyService {

    username: string;
    count = 0;
    constructor() {

    }

    authenticate() {
        this.username = 'vinay';
    }
    login() {
        return this.username == 'vinay';

    }
    checkIn(): number {
        this.count += 1;
        return this.count;

    }
    checkOut(): number {
        this.count -= 1;
        return this.count;

    }

}