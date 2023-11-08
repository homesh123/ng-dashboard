import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intialCase',
  standalone: true
})
export class IntialCasePipe implements PipeTransform {

  transform(name: string): string {
    if (!name) {
      return '';
    }
    return name.charAt(0).toUpperCase();
  }
}
