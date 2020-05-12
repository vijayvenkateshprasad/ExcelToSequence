import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mermaid-sample';
  items = [];

  byPages = [];

  constructor(private http: HttpClient) {
    this.http.get("app/sample.json").subscribe((x: any) => {
      this.items = x.Sheet1; 
      this.processDataByPages();
    });
  }

  private processDataByPages() {
    const a = this.groupBy(this.items.filter(x => x.Journey != "Journey"), 'Journey');
    const b = [];
    for (const key in a) {
      if (a.hasOwnProperty(key)) {
        b.push(a[key]);
      }
    }
    
    b.forEach(i => {
      let bb = this.groupBy(i, 'Pages');
      for (const key in bb) {
        if (bb.hasOwnProperty(key)) {
          this.byPages.push(bb[key]);
        }
      }
    });
  }

  groupBy(data, property) {
    return data.reduce((acc, obj) => {
      const key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }

  formDescription(items: any[]): string {
    let response = '';
    items.forEach(item => response = response + `${item.UI} -> ${item.FrntEndAPISystem}:${item.FrntEndAPI}${item.FrntEndAPIResource};
    ${item.FrntEndAPISystem}-->> ${item.TechSystem}:${item.TechAPI}${item.TechResource}`);
    return response;
  }
}
