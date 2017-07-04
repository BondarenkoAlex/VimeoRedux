import { normalize, schema } from 'normalizr';

//const categorySchema = new schema.Entity('categories', {}, { idAttribute: 'resource_key' });
const nameSchema = new schema.Entity('names', {}, { idAttribute: 'name' });
export const categoryListSchema = [nameSchema];
