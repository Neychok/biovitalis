export default {
  type: "object",
  title: "Снимка",
  name: "imageObject",
  fields: [
    {
      type: "image",
      title: "Изображение",
      name: "image",
    },
    {
      type: "string",
      name: "alt",
    },
  ],
  preview: {
    select: {
      media: "image",
    },
  },
}
