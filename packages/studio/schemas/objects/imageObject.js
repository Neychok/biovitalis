export default {
  type: "object",
  name: "imageObject",
  fields: [
    {
      type: "image",
      title: "Изображение",
      name: "image",
    },
  ],
  preview: {
    select: {
      media: "image",
    },
  },
}
