import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>('../../assets/data/categories.json');
  }
  getCertifications(): Observable<any[]> {
    return this.http.get<any[]>('../../assets/data/certifications.json');
  }
  getCurriculums(): Observable<any[]> {
    return this.http.get<any[]>('../../assets/data/curriculum.json');
  }
  getImages(): Observable<any[]> {
    return this.http.get<any[]>('../../assets/data/images.json');
  }
  getSkills(): Observable<any[]> {
    return this.http.get<any[]>('../../assets/data/skills.json');
  }
  getStacks(): Observable<any[]> {
    return this.http.get<any[]>('../../assets/data/stacks.json');
  }
  getWorksStacks(): Observable<any[]> {
    return this.http.get<any[]>('../../assets/data/works_stacks.json');
  }
  getWorks(): Observable<any[]> {
    return this.http.get<any[]>('../../assets/data/works.json');
  }
}
