import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _baseUrl=environment.httpUrl+"users"

  constructor(
    private http:HttpClient,
    
  ) { }
  createData(data: any){
    return this.http.post<any>(this._baseUrl,data)
  }
  getData(){
    return this.http.get<any>(this._baseUrl)
  }
  
  getSingleData(id:any){
    return this.http.get<any>(this._baseUrl + '/' + id)
  }
  updateData(data: any){
    return this.http.put<any>(this._baseUrl,data)
  }
}
