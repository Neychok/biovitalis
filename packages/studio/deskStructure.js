import S from "@sanity/desk-tool/structure-builder"
// prettier-ignore
export default () => 
S.list()
    .title("Меню")
    .id("menu")
    .items([
        S.listItem()
        .title("Продукти")
        .id("products")
        .child(
            S.documentList()
            .title('Секции')
            .id("section")
            .schemaType('section')
            .filter('_type == "section"')
            .child( id =>
                S.documentList()
                .title('Категории')
                .id("juicePressingCategory")
                .schemaType('juicePressingCategory')
                .filter( '_type == "juicePressingCategory" && section._ref == $id' )
                .params({id})
                .child( id =>
                    S.documentList()
                    .title('Продукти')
                    .id("juicePressingProducts")
                    .filter('_type == "juicePressingProduct" && $id == category._ref')
                    .params({id})
                    .initialValueTemplates([
                        S.initialValueTemplateItem('product-by-category', {id})
                    ])
                )
            )           
        ),
        S.listItem()
            .title("Категории")
            .id("categories")
            .child(
                S.documentList()
                .title('Секции')
                .id("section")
                .schemaType('section')
                .filter('_type == "section"')
                .child( id =>
                    S.documentList()
                    .title("Редактиране на категории")
                    .id("juicePressingCategory_edit")
                    .filter('_type == "juicePressingCategory" && $id == section._ref')
                    .params({id})
                )
            ),
            S.listItem()
            .title("Секции")
            .id("sections")
            .child(
                S.documentTypeList('section')
                .title("Редактиране на Секции")
                .id("section_edit")
                ),
            S.listItem()
                .title("Характеристики")
                .id("specifications")
                .child(
                    S.documentTypeList('specification')
                    .title("Редактиране на характеристики")
                    .id("specification_edit")
                ),
        S.listItem()
            .title("Страници")
            .id("pages")
            .child(
                S.list()
                .title("Страници")
                .id("pages")
                .items([
                    S.listItem()
                    .id("contactsPage")
                    .title("Контакти")
                    .child(
                        S.document()
                        .schemaType('contactsPage')
                        .documentId('contactsPage')
                        .title("Контакти")
                        .id("contactsPage")
                    )
                ])
            )
    ])
