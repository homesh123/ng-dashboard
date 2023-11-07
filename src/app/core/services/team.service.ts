import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TeamService {

    constructor(private httpClient: HttpClient) { }

    getData() {
        return this.httpClient.get<any>('https://1.api.fy23ey04.careers.ifelsecloud.com/api/endpoint');
    }
}