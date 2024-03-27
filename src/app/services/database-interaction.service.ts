import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee.module';

@Injectable({
  providedIn: 'root'
})
export class DatabaseInteractionService {

  constructor(private httpClient : HttpClient) { }

  getEmployee = (page : number, size : number) => {

    return this.httpClient.get<any>("http://127.0.0.1:8080/employees?page=" + page + "&size=" + size);
  }

  deleteEmployee = () => {

  }
}
