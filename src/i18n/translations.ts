export type Language = 'en' | 'ru';

export interface Translations {
  nav: {
    memorial: string;
    gallery: string;
  };
  landing: {
    name: string;
    dates: string;
  };
  memorial: {
    title: string;
    paragraphs: string[];
  };
  video: {
    title: string;
    iframeTitle: string;
  };
  gallery: {
    title: string;
    viewFull: string;
    download: string;
    close: string;
    previous: string;
    next: string;
  };
  footer: {
    madeBy: string;
    link: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      memorial: 'In Memoriam',
      gallery: 'Gallery',
    },
    landing: {
      name: 'Susan Kravstov',
      dates: 'November 27, 1935 – March 23, 2026',
    },
    memorial: {
      title: 'In Memoriam',
      paragraphs: [
        'Susan Kravstov was a woman of grace, elegance, and boundless love. Her passion for the finer things in life—music, dance, and the beauty of flowers—touched everyone who knew her.',
        'She had an extraordinary gift for bringing joy to those around her. Whether through her singing, her warm presence at gatherings, or her impeccable sense of style, Susan made every moment special.',
        'Her love for high society was matched only by her devotion to family. She created a home filled with warmth, laughter, and the kind of love that transcends generations.',
        'Susan\'s legacy lives on in the hearts of all who knew her. Her spirit, her grace, and her unwavering love will be remembered and cherished forever.',
        'She will be deeply missed but never forgotten.',
      ],
    },
    video: {
      title: 'In remembrance',
      iframeTitle: 'Memorial video — Susan Kravstov',
    },
    gallery: {
      title: 'Gallery',
      viewFull: 'View Full Gallery',
      download: 'Download',
      close: 'Close',
      previous: 'Previous',
      next: 'Next',
    },
    footer: {
      madeBy: 'Made with love by Susan\'s Grandson,',
      link: 'Josh',
    },
  },
  ru: {
    nav: {
      memorial: 'Памяти',
      gallery: 'Галерея',
    },
    landing: {
      name: 'Сузанна Кравцова',
      dates: '27 ноября 1935 – 23 марта 2026',
    },
    memorial: {
      title: 'Памяти',
      paragraphs: [
        'Сьюзан Кравстов была женщиной грации, элегантности и безграничной любви. Её страсть к прекрасному — музыке, танцам и красоте цветов — трогала всех, кто её знал.',
        'У неё был необыкновенный дар приносить радость окружающим. Будь то через пение, тёплое присутствие на встречах или безупречное чувство стиля, Сьюзан делала каждый момент особенным.',
        'Её любовь к высшему обществу была сопоставима лишь с её преданностью семье. Она создала дом, наполненный теплом, смехом и той любовью, которая выходит за пределы поколений.',
        'Наследие Сьюзан живёт в сердцах всех, кто её знал. Её дух, её грация и её непоколебимая любовь будут помниться и цениться вечно.',
        'Её будет очень не хватать, но она никогда не будет забыта.',
      ],
    },
    video: {
      title: 'В память',
      iframeTitle: 'Видео памяти — Сьюзан Кравстова',
    },
    gallery: {
      title: 'Галерея',
      viewFull: 'Смотреть всю галерею',
      download: 'Скачать',
      close: 'Закрыть',
      previous: 'Назад',
      next: 'Вперёд',
    },
    footer: {
      madeBy: 'Сделано с любовью внуком Сьюзан,',
      link: 'Джош',
    },
  },
};
