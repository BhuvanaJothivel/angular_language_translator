import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {marker as TRANSLATE_ME} from '@biesbjerg/ngx-translate-extract-marker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

  lang = ["en","fr","hi","ar"]

  ngOnInit(){
    const value = TRANSLATE_ME("title")
    console.log("Title from marker "+value)
  }

  constructor(private ts : TranslateService){
    this.ts.addLangs(this.lang)
    this.ts.setDefaultLang('en')

    const browserLang = this.ts.getBrowserLang()

    console.log("Browser language is "+ browserLang)

    if(this.lang.includes(browserLang)){
      this.ts.use(browserLang)
    }
  }

  useLang(ulang:string){
    console.log("User selected language is "+ulang)
    this.ts.use(ulang)
  }
}
