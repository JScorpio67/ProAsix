import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage',
  standalone: true
})
export class NoimagePipe implements PipeTransform {

  transform(images:any[]): any{
    // return null;
    if (!images){
      return 'assets/img/no.jpg';
    } 

    if(images.length > 0){
      return images [0].url;
    } 
    
    else{
      return 'assets/img/no.jpg';
    } 
  }

}
