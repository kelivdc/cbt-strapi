import type { Schema, Attribute } from '@strapi/strapi';

export interface ListJawabanJawaban extends Schema.Component {
  collectionName: 'components_list_jawaban_jawabans';
  info: {
    displayName: 'Jawaban';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    jawaban_benar: Attribute.Boolean;
    gambar: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'list-jawaban.jawaban': ListJawabanJawaban;
    }
  }
}
