import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';


@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(input: Member[], byRole) {
    var output: Member[] = [];
    if(byRole === "cutters") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role === 'cutters') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (byRole === "breakers") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role === "breakers") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
