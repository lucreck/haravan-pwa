import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CollectionService extends HttpService {

  constructor(
    public http: HttpClient
  ) {
    super(http);
  }

  getCollectionByHandle(handle, page = 1, sortType = "newest") {
    return this.get(`/collections/${handle}?view=suplo.json&page=${page}&sort_by=${sortType}`)
  }

}
