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
      media: "relatedProduct.tabs.gallery[0].image",
    },
  },
}
