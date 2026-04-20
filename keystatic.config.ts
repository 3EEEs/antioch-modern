import { config, fields, singleton, collection } from '@keystatic/core';

export default config({
  storage: { 
    kind: 'cloud',
    project: '3EEEs/antioch-modern' // Paste the exact project name from Keystatic Cloud here
  },
  singletons: {
    homePage: singleton({
      label: 'Home Page',
      path: 'src/content/pages/home',
      schema: {
        heroTitle: fields.text({ label: 'Hero Title', defaultValue: 'Brotherhood' }),
        heroDescription: fields.text({ label: 'Hero Description', multiline: true }),
        heroImage: fields.image({ label: 'Hero Background', directory: 'public/images', publicPath: '/images/' }),
        carouselImages: fields.array(
          fields.image({ label: 'Image', directory: 'public/images/carousel', publicPath: '/images/carousel/' }),
          { label: 'Carousel Images', itemLabel: props => 'Slide' }
        ),
      },
    }),
    applyPage: singleton({
      label: 'Application Info',
      path: 'src/content/pages/apply',
      schema: {
        formUrl: fields.url({ label: 'Google Form or Typeform URL' }),
      }
    })
  },
  collections: {
    faqs: collection({
      label: 'FAQs',
      slugField: 'question',
      path: 'src/content/faqs/*',
      schema: {
        question: fields.text({ label: 'Question' }),
        answer: fields.text({ label: 'Answer', multiline: true }),
      },
    }),
    socialGallery: collection({
      label: 'Instagram Gallery',
      slugField: 'title',
      path: 'src/content/gallery/*',
      schema: {
        title: fields.text({ label: 'Photo Title' }),
        image: fields.image({ label: 'Photo', directory: 'public/images/gallery', publicPath: '/images/gallery/' }),
        link: fields.url({ label: 'Link to Instagram (Optional)' }),
      }
    }),
    historyTimeline: collection({
      label: 'House History Timeline',
      slugField: 'year',
      path: 'src/content/history/*',
      schema: {
        year: fields.text({ label: 'Year (e.g., 2009)' }),
        title: fields.text({ label: 'Event Title' }),
        description: fields.text({ label: 'Description', multiline: true }),
      }
    }),
    leadership: collection({
      label: 'Leadership Team',
      slugField: 'name',
      path: 'src/content/leadership/*',
      schema: {
        name: fields.text({ label: 'Name' }),
        role: fields.text({ label: 'Role (e.g., President)' }),
        email: fields.text({ label: 'Email Address' }),
        image: fields.image({ label: 'Profile Photo', directory: 'public/images/leadership', publicPath: '/images/leadership/' }),
      }
    })
  },
});