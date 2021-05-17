import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Angular Library Supabase';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
