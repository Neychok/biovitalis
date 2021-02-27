// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// Documents
import juicePressingProduct from "./documents/juicePressing/juicePressingProduct"
import juicePressingCategory from "./documents/juicePressing/juicePressingCategory"
import specification from "./documents/specification"

// Objects
import juicePressingProductsTabs from "./objects/juicePressingProductsTabs"
import specificationObject from "./objects/specificationObject"
import imageObject from "./objects/imageObject"
import relatedProductObject from "./objects/relatedProductObject"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    //Objects
    specificationObject,
    imageObject,
    relatedProductObject,
    juicePressingProductsTabs,

    //Documents
    juicePressingProduct,
    juicePressingCategory,
    specification,
  ]),
})
