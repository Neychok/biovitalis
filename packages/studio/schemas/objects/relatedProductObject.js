export default {
  type: "object",
  name: "relatedProductObject",
  title: "Свързан продукт",
  fields: [
    {
      type: "reference",
      name: "relatedProduct",
      to: [{ type: "juicePressingProduct" }],
    },
  ],
  preview: {
    select: {
      title: "relatedProduct.name",
      media: "relatedProduct.tabs.gallery[0].image",
    },
  },
}
