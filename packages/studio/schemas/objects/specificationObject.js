import sanityClient from "part:@sanity/base/client"
const client = sanityClient.withConfig({ apiVersion: "2019-05-28" })
export default {
  type: "object",
  name: "specificationObject",
  title: "Характеристика",
  fields: [
    {
      type: "reference",
      title: "Име",
      name: "spec_name",
      to: [{ type: "specification" }],
      options: {
        filter: async function (document) {
          document = document.document
          if (!document.category) {
            return {
              filter: "show_all == true",
            }
          }
          let section_ref
          await client
            .fetch(
              `*[_type == "juicePressingCategory" && _id == "${document.category._ref}"]{
              section
            }`
            )
            .then(response => {
              section_ref = response[0].section._ref
            })
          return {
            filter: "section._ref == $section || show_all == true",
            params: { section: section_ref },
          }
        },
      },
      validation: Rule => Rule.required().error("Избери име на характеристика"),
    },
    {
      title: "Стойност",
      name: "spec_value",
      type: "string",
      validation: Rule => Rule.required().warning("Липсва стойност"),
    },
  ],
  preview: {
    select: {
      title: "spec_name.spec_name",
      subtitle: "spec_value",
    },
  },
}
