import { rootUrl } from './constants';
import { Collection } from './models/Collection';

const collection = new Collection(rootUrl);

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
