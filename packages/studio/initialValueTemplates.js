import T from "@sanity/base/initial-value-template-builder"

export default [
  ...T.defaults(),

  T.template({
    id: "product-by-category",
    title: "Продукт",
    description: "Product by a specific category",
    schemaType: "juicePressingProduct",
    parameters: [{ name: "id", type: "string" }],
    value: params => ({
      category: { _type: "reference", _ref: params.id },
    }),
  }),
]
