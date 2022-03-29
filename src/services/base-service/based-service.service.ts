import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AxiosResponse, AxiosRequestConfig } from "axios";

type ConfigRequest = AxiosRequestConfig<{ [key:string]:string | number | object }>

@Injectable()
export class BaseService {

    constructor(
        private readonly httpService: HttpService,
    ) {}

    public get<T>(url: string, config?: ConfigRequest): Observable<T> {
        return this.httpService.get<T>(url, config).pipe(
            map((res: AxiosResponse<T>) => res.data)
        );
    }

    public post<R, V>(url:string, body: V, config?: ConfigRequest): Observable<R> {
        return this.httpService.post<R>(url, body, config).pipe(
            map((res: AxiosResponse<R>) => res.data),
        );
    }
}
