import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

private companieUrl = environment.apiUrl + 'companies';
private countriesUrl = environment.apiUrl + 'countries';
private citiesUrl = environment.apiUrl + 'cities';
private usersUrl = environment.apiUrl + 'users';



}


