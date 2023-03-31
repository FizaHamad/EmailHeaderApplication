import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Headers, Http, Response, HttpModule, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  fromAdd: string = "";
  showDetail: boolean = false;
  EmailRes: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    
  }

  submit() {
    this.get_Data(this.fromAdd).then(r => {
      console.log(r);
      this.EmailRes = r;
      this.showDetail = true;
    }).catch(err => {
      console.log(err);
    });
  }

  get_Data(fromAdd: any) : Promise<any> {
    const headers = new HttpHeaders();
    headers.set("Content-Type", "application/json");
    headers.set('Accept', 'application/json');
    const url5 = `https://api.kickbox.com/v2/verify?email=${fromAdd}&apikey=live_bdfcd9a3b22cbf2872e73e54cf5cfc3ee2b28ad0f9f76c763862ba11b32e2348`;
    return this.http.get(url5, {headers}).toPromise();
  }

  /*
  async check() {
    try {
      let ret = await checkEmailExists("toEmail@gmail.com");
      return JSON.parse(ret);
    } catch (error) {
      console.log(error);
    }
  }
  */


}
