import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mermaid-sample';
  items = [
    {
      "Journey": "Covai",
      "Pages": "One",
      "UI": "Portal",
      "FrntEndAPI": "Blue",
      "FrntEndAPIResource": "Patch",
      "FrntEndAPISystem": "BW",
      "TechAPI": "Blue",
      "TechResource": "Patch",
      "TechSystem": "AB"
    },
    {
      "Journey": "Covai",
      "Pages": "One",
      "UI": "Portal",
      "FrntEndAPI": "Green",
      "FrntEndAPIResource": "Get",
      "FrntEndAPISystem": "BW",
      "TechAPI": "Green",
      "TechResource": "Get",
      "TechSystem": "AB"
    },
    {
      "Journey": "Covai",
      "Pages": "Two",
      "UI": "Portal",
      "FrntEndAPI": "Blue",
      "FrntEndAPIResource": "Get",
      "FrntEndAPISystem": "BW",
      "TechAPI": "Blue",
      "TechResource": "Get",
      "TechSystem": "AB"
    },
    {
      "Journey": "Salem",
      "Pages": "One",
      "UI": "Portal",
      "FrntEndAPI": "Blue",
      "FrntEndAPIResource": "Patch",
      "FrntEndAPISystem": "BW",
      "TechAPI": "Blue",
      "TechResource": "Patch",
      "TechSystem": "AB"
    },
    {
      "Journey": "Salem",
      "Pages": "Two",
      "UI": "Portal",
      "FrntEndAPI": "Green",
      "FrntEndAPIResource": "Get",
      "FrntEndAPISystem": "BW",
      "TechAPI": "Green",
      "TechResource": "Get",
      "TechSystem": "AB"
    },
    {
      "Journey": "Salem",
      "Pages": "Two",
      "UI": "Portal",
      "FrntEndAPI": "Blue",
      "FrntEndAPIResource": "Get",
      "FrntEndAPISystem": "BW",
      "TechAPI": "Blue",
      "TechResource": "Get",
      "TechSystem": "AB"
    }
  ];

  byPages = [];

  constructor(private http: HttpClient) {
    const a = this.groupBy(this.items.filter(x => x.Journey != "Journey"), 'Journey');
    const b = [];
    for (const key in a) {
      if (a.hasOwnProperty(key)) {
        b.push(a[key]);

      }
    }
    const bb = this.groupBy(b[0], 'Pages');
    for (const key in bb) {
      if (bb.hasOwnProperty(key)) {
        this.byPages.push(bb[key]);
      }
    }
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
}
