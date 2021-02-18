import Tabs from "sanity-plugin-tabs"

export default {
  type: "document",
  title: `Frontpage`,
  name: `frontpage`,
  fields: [
    {
      type: "object",
      name: "content",
      inputComponent: Tabs,

      fieldsets: [
        { name: "main", title: "Main", options: { sortOrder: 10 } },
        { name: "aside", title: "Aside", options: { sortOrder: 20 } },
        { name: "meta", title: "Meta", options: { sortOrder: 30 } },
      ],
      options: {
        // setting layout to object will group the tab content in an object fieldset border.
        // ... Useful for when your tab is in between other fields inside a document.
        layout: "object",
      },

      fields: [
        {
          type: "object",
          title: "Main Title",
          name: "mainTitle",
          fieldset: "main",

          fieldsets: [{ name: "ingress", title: "Ingress" }],

          fields: [
            {
              type: "string",
              title: "Header",
              name: "header",
            },
            {
              type: "string",
              title: "Text",
              name: "ingressText",
              fieldset: "ingress",
            },
          ],
        },
        {
          type: "string",
          title: "Information",
          name: "info",
          fieldset: "aside",
        },
        {
          type: "object",
          name: "aside",
          fieldset: "meta",
          inputComponent: Tabs,

          fieldsets: [
            { name: "tags", title: "Tags" },
            { name: "categories", title: "Categories" },
          ],

          fields: [
            {
              type: "string",
              title: "Content Type",
              name: "contentType",
              fieldset: "tags",
            },
            {
              type: "string",
              title: "Category",
              name: "category",
              fieldset: "categories",
            },
          ],
        },
      ],
    },
  ],
}
