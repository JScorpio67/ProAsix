import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'linkseguro',
  standalone: true
})
export class LinkseguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer){
    
  }

  transform(value:string): any {
    let url = "https://open.spotify.com/embed?uri=";
    //bypass... nos quitara los scripts malignos
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}

