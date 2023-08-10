
 const post = {
    name: 'post',
    title: 'Головна',
    type: 'document',
    fields: [
      {
        name: 'meta_title',
        title: 'Заголовок',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'body_text',
        title: 'Текст публікації',
        type: 'string',
        validation: Rule => Rule.required(),

      },
      {
        name: 'publication_data',
        title: 'Дата публікації',
        type: 'date',
        validation: Rule => Rule.required(),

      },
    ]
  }

  export default post