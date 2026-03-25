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
      name: 'Susan Kravtsov',
      dates: 'November 27, 1935 – March 23, 2026',
    },
    memorial: {
      title: 'In Memoriam',
      paragraphs: [
        'Our mother, baba, and friend was a woman of grace, elegance, and boundless love. Her passion for the finer things in life—music, dance, and the beauty of flowers—touched everyone who knew her.',
        'She had an extraordinary gift for bringing joy to those around her. Whether through her singing, her warm presence at gatherings, or her impeccable sense of style, Mom made every moment special.',
        'Her love for high society was matched only by her devotion to family. She created a home filled with warmth, laughter, good food, and the kind of love that transcends generations.',
        'Susan\'s legacy lives on in the hearts of all who knew her. Her spirit, her grace, and her unwavering love will be remembered and cherished forever.',
        'Her life was not an easy one, as a young child she fell ill after a visit from a friend with scarlet fever. Afterwhich, her illness progressed to meningitis. She was left paralyzed on her left side, but over the years recovered and managed to become a nurse, bookbinder, entrepreneur, photo refinisher, a seamstress, and the most important job, a mother and grandmother.',
        'At the start of the war, her father, Solomon, who was assiting Stalin with writing the language Esperanto, was arrested and killed. Her mother insisted on looking for him and was arrested as an enemy of the state and sent to a labour camp. Her and her brother, Michael, were left with their grandmother and taken to the internat in Siberia.',
        'She worked in a very exclusive club in Moscow, where she met a reporter who asked her, "Do you honestly believe it will get better here?". This put an idea in her head to move to away from Moscow and start a new life.',
        'Mom convinced Dad to move to Canada, where they started their new life together with their children, Sam and Yana.',
        'Mom and Dad always had a full house. No matter who walked through the door, they were always welcome. The house was constantly filled with laughter, love, and lots of good food... and cognac.',
        'After Dad passed away, Mom stopped singing, she was sad and missed him greatly. She later discovered a Jewish choir and started singing again. She loved to read and even learned how to use the computer at 80 years old.',
        'Mom will be deeply missed but never forgotten.',
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
        'Наша мама, бабушка и подруга была женщиной, отличавшейся изяществом, элегантностью и безграничной любовью. Её страсть к прекрасным сторонам жизни — музыке, танцу и красоте цветов — трогала каждого, кто её знал',
        'У неё был необыкновенный дар дарить радость окружающим. Будь то её пение, тёплое присутствие на вечеринках или безупречный стиль, мама делала каждый момент особенным',
        'Ее любовь к высшему обществу могла сравниться разве что с ее преданностью семье. Она создала дом, наполненный теплом, смехом, вкусной едой и той любовью, которая превосходит поколения',
        'Наследие Сьюзан живет в сердцах всех, кто ее знал. Ее дух, ее изящество и ее непоколебимая любовь будут помниться и цениться вечно',
        'Ее жизнь была нелегкой: в раннем детстве она заболела после визита друга, больного скарлатиной. Впоследствии болезнь перешла в менингит. Она осталась парализованной с левой стороны, но с годами выздоровела и сумела стать медсестрой, переплетчицей, предпринимателем, фоторетушером, швеей и, что самое важное, матерью и бабушкой',
        'В начале войны ее отец Соломон, который помогал Сталину в разработке языка эсперанто, был арестован и убит. Ее мать настаивала на том, чтобы искать его, и была арестована как враг народа и отправлена в трудовой лагерь. Ее и ее брата Майкла оставили с бабушкой и увезли в интернат в Сибири',
        'Она работала в одном из самых престижных клубов Москвы, где познакомилась с журналистом, который спросил её: „Ты действительно веришь, что здесь станет лучше?“. Это натолкнуло её на мысль уехать из Москвы и начать новую жизнь',
        'Мама убедила папу переехать в Канаду, где они начали новую жизнь вместе со своими детьми, Сэмом и Яной',
        'У мамы с папой всегда был полный дом. Кто бы ни переступал порог, ему всегда рады. Дом постоянно наполняли смех, любовь и много вкусной еды... и коньяка.',
        'После того как папа умер, мама перестала петь, она была грустна и очень скучала по нему. Позже она открыла для себя еврейский хор и снова начала петь. Она любила читать и даже научилась пользоваться компьютером в 80 лет.',
        'Мы будем очень скучать по маме, но никогда её не забудем.',
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
