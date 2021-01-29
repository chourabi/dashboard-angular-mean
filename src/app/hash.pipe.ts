import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hash'
})
export class HashPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    
    console.log(value);

    var v2 = value+"";
    var r="";

    r+=v2[0];
    r+=v2[1];
    r+="****";
    r+=v2[6];
    r+=v2[7];
    
    


    return r;
  }

}
