// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// Documents
import juicePressingProduct from "./documents/juicePressing/juicePressingProduct"
import juicePressingCategory from "./documents/juicePressing/juicePressingCategory"
import specification from "./documents/specification"

// Objects
import specificationObject from "./objects/specificationObject"
import imageObject from "./objects/imageObject"

export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    //Objects
    specificationObject,
    imageObject,

    //Documents
    juicePressingProduct,
    juicePressingCategory,
    specification,
  ]),
})
