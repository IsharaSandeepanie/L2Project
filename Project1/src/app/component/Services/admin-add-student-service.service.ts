import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AdminAddStudentServiceService {

  constructor(private http : HttpClient) { }

  /*sends get request and returns its response data */ 
  getStudentData(formdata:NgForm){
    return this
              .http
              .post('//localhost:3000/todos',
              {
                "text" : formdata.value.uname,
                "psw" : formdata.value.psw             
              }
            );
            
  }
}

