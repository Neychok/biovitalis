import React from "react"
const Title1 = props => (
  <span
    style={{
      marginBottom: "0.75rem",
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
    }}
  >
    {props.children}
  </span>
)

const Title2 = props => (
  <span
    style={{
      marginBottom: "0.5rem",
      fontSize: "1.5rem",
      lineHeight: "2rem",
    }}
  >
    {props.children}
  </span>
)
const Title3 = props => (
  <span
    style={{
      marginBottom: "0.5rem",
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
    }}
  >
    {props.children}
  </span>
)
const Paragraph = props => (
  <span
    style={{
      marginBottom: "0.25rem",
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
    }}
  >
    {props.children}
  </span>
)
const Center = props => (
  <p
    style={{
      textAlign: "center",
    }}
  >
    {props.children}
  </p>
)
export default {
  title: "Portable Text",
  name: "portableText",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",

      styles: [
        {
          title: "Параграф",
          value: "normal",
          blockEditor: {
            render: Paragraph,
          },
        },
        {
          title: "Заглавие 1",
          value: "h1",
          blockEditor: {
            render: Title1,
          },
        },
        {
          title: "Заглавие 2",
          value: "h2",
          blockEditor: {
            render: Title2,
          },
        },
        {
          title: "Заглавие 3",
          value: "h3",
          blockEditor: {
            render: Title3,
          },
        },
      ],
      marks: {
        decorators: [
          { title: "Удебеляване", value: "strong" },
          { title: "Курсив", value: "em" },
          { title: "Подчертване", value: "underline" },
          {
            title: "Центриране",
            value: "center",
            blockEditor: {
              icon: () => "C",
              render: Center,
            },
          },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    },
  ],
}
