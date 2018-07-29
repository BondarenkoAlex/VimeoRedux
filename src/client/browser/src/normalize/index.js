/* eslint-disable prefer-template,prefer-const */
import { schema } from "normalizr";
import { lastSubPath } from "../utils/helpers";

// ///////////////////////////////////////////////////////////////////////////
const catSchema = new schema.Entity(
  "categories",
  {},
  {
    idAttribute: item => lastSubPath(item.uri) /* item.uri.split('/').pop() */,
    processStrategy: value => {
      const subpath = "/" + lastSubPath(value.uri);
      return {
        ...value,
        uriLocal: subpath,
      };
    },
  },
);
export const categoryListSchema = [catSchema];

// ///////////////////////////////////////////////////////////////////////////
const subcatSchema = new schema.Entity(
  "subcategories",
  {},
  {
    idAttribute: item => lastSubPath(item.uri),
    processStrategy: value => {
      // '/categories/animation/subcategories/2d' => '/animation/2d'
      let pathArray = value.uri.split("/").slice(-3);
      pathArray.splice(1, 1);
      const subpath = "/" + pathArray.join("/");
      return {
        ...value,
        uriLocal: subpath,
      };
    },
  },
);
export const subcategoryListSchema = [subcatSchema];
// export const categorySchema = new schema.Entity('category',
//   { subcategories: [subcatSchema] },
//   { idAttribute: item => lastSubPath(item.uri) /* item.uri.split('/').pop() */ },
// );

// ///////////////////////////////////////////////////////////////////////////
const user = new schema.Entity("users", undefined, {
  idAttribute: item => lastSubPath(item.uri),
});
// ///////////////////////////////////////////////////////////////////////////
export const videoSchema = new schema.Entity(
  "videos",
  { user },
  { idAttribute: item => lastSubPath(item.uri) },
);
export const videoListSchema = new schema.Entity(
  "videosByCategory",
  {
    data: [videoSchema],
  },
  { idAttribute: "page" },
);

// ///////////////////////////////////////////////////////////////////////////
