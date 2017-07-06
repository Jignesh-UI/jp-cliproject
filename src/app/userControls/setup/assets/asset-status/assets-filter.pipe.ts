import { Pipe, PipeTransform } from '@angular/core';
import { AssetsInterface } from './assets-interface';

@Pipe({
  name: 'assetsFilter'
})

export class AssetsFilterPipe implements PipeTransform {

  transform(value: AssetsInterface[], filterBy: string): AssetsInterface[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((product: AssetsInterface) =>
      product.assetsStatus.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;

  }

}
