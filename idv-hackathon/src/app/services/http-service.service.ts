import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  apiUrl = "https://weu-api.au10tixservicesstaging.com/cm/v2/documentprocessingrequests";
  header: any = {
    "Authorization": "Bearer eyJraWQiOiI0OW56OENVQXlhandMV1UwNHlLLTF6azE5Z2lYQVZWSmp3WWdsbVhxSXBZIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULjllUzNOOEt4MlowWkdDRDJ3UHJVV2NTQTB0QVZBbkR4MEVDdUJaZjhxOVUiLCJpc3MiOiJodHRwczovL2xvZ2luLmF1MTB0aXguY29tL29hdXRoMi9hdXMzbWx0czVzYmU5V0Q4VjM1NyIsImF1ZCI6ImF1MTB0aXgiLCJpYXQiOjE2MjMwNzIxOTQsImV4cCI6MTYyMzE1ODU5NCwiY2lkIjoiMG9hOXZpMGFhY3Z6cHVYOEkzNTciLCJzY3AiOlsic2VjdXJlLm1lOnJlcXVlc3QiXSwic3ViIjoiMG9hOXZpMGFhY3Z6cHVYOEkzNTciLCJhcGlVcmwiOiJodHRwczovL3dldS1hcGkuYXUxMHRpeHNlcnZpY2Vzc3RhZ2luZy5jb20iLCJib3NVcmwiOiJodHRwczovL2Jvcy13ZXUtd2ViLmF1MTB0aXhzZXJ2aWNlc3N0YWdpbmcuY29tIiwiY2xpZW50T3JnYW5pemF0aW9uTmFtZSI6ImFtZG9jcyIsImNsaWVudE9yZ2FuaXphdGlvbklkIjozNTN9.ZqdaDGECh-FTi6PaafFD8VMfhfeERiObz4A9xKjTPRiL4rHwkQIDvlJEOv3L3SHxgu2HVGSRlfvb4tR0bZG-V8OUurXdBNxj8zBnOfnabQyihbDz_eb3X3qVFTds2cIwZN6bZLEneoUkymU_blF72WQ9o8u2SLoSwXtCeCW4Oy187ZUniheOmd5DSvsuWb24AUeGlxf5VftzWDI3cU-XN60MgrDdu8Sma9nQ4xLLrcQRj6ALduW0RLMbxBXX9w58Rn89wsJsPr2QLHVWgSmdQA7KcmOp5Np4gxiPEdtdRrzm9zg1aRh7f8yjIhMMtCz9kw3iDozQ2SgLX-_B1A-yUA",
    "Content-Type": "application/json",
    "Cookie": "JSESSIONID=098C75409F4F10BD6AD508698E1F91AD"
  };
  constructor(private http: HttpClient) {
  }

  authenticate(data): Observable<any> {
    return this.http.post(this.apiUrl,data,{headers:this.header});
  }
}
