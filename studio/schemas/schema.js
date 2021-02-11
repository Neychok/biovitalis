// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// Documents
import juicePressingProduct from "./documents/juicePressingProduct"
import juicePressingCategory from "./documents/juicePressingCategory"

// Objects
import specification from "./objects/specification"

export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    //Documents
    juicePressingProduct,
    juicePressingCategory,
    specification,

    //Objects
  ]),
})
