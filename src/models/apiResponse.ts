import {Pokemon} from './Pokemon';

export class ApiResponse {
  public count: number;
  public data: Pokemon[];
  public page: number;
  public pageSize: number;
  public totalCount: number;


  constructor(count: number,
              data: Pokemon[],
              page: number,
              pageSize: number,
              totalCount: number,
  ) {
    this.count = count;
    this.data = data;
    this.page = page;
    this.pageSize = pageSize;
    this.totalCount = totalCount;
  }
}


