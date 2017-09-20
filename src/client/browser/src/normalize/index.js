import { schema } from 'normalizr';

// ///////////////////////////////////////////////////////////////////////////
const catSchema = new schema.Entity('categories', {},
  { idAttribute: item => item.uri.split('/').pop() },
);
export const categoryListSchema = [catSchema];

// ///////////////////////////////////////////////////////////////////////////
const subcatSchema = new schema.Entity('subcategories', {},
  { idAttribute: item => item.uri.split('/').pop() },
);
export const categorySchema = new schema.Entity('category',
  { subcategories: [subcatSchema] },
  { idAttribute: item => item.uri.split('/').pop() },
);

// ///////////////////////////////////////////////////////////////////////////
export const videoSchema = new schema.Entity('videos', {},
  { idAttribute: item => item.uri.split('/').pop() },
);
export const videoListSchema = new schema.Entity('videosByCategory',
  { data: [videoSchema] },
  { idAttribute: 'page' },
);

// ///////////////////////////////////////////////////////////////////////////
