import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userName!: string;

  constructor() { }

  public setUserName(name: string): void {
    this.userName = name;
  }

  public getUserName(): string {
    return this.userName;
  }
}