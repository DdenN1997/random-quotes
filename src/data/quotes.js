const quotes = [
  {
    id: '714a4a01',
    text: 'Мальчик даёт обещания. Мужчина их забывает',
    author: 'Стив Бушеми',
    isFavorite: false,
  },
  { id: '87f481ae', text: 'Я лох', author: 'Лох', isFavorite: false },
  {
    id: '8506eee6',
    text: 'Не бойся того, кто знает 1000 приёмов, бойся травмата',
    author: 'Джеки Чан',
    isFavorite: false,
  },
  {
    id: '04cb6e0c',
    text: 'Если тебя ебут в жопу, значит ты впереди',
    author: 'Вожак Стаев',
    isFavorite: false,
  },
  {
    id: 'e8c970d1',
    text: 'Тяжело в учении - легко в армии',
    author: 'Лейтенант',
    isFavorite: false,
  },
  {
    id: '5d568f62',
    text: 'Не важно сколько раз ты падал. Важно - сколько два.',
    author: 'Сократ',
    isFavorite: false,
  },
  {
    id: '5fd739d4',
    text: 'Волк слишком энергичен чтобы работать',
    author: 'Волк',
    isFavorite: false,
  },
  {
    id: 'd02bd3a4',
    text: 'Упал вставай, встал упай, упай чокопай, дабуди-дабудай',
    author: 'Автор',
    isFavorite: false,
  },
  {
    id: '672441d1',
    text: 'Взял нож - режь, взял дошик - ешь.',
    author: 'Джейсон Стетхэм',
    isFavorite: false,
  },
  {
    id: '115b334c',
    text: 'Запомни: всего одна ошибка – и ты ошибся.',
    author: 'Джейсон Стетхэм',
    isFavorite: false,
  },
  {
    id: '2aa210b9',
    text: 'Женщины любят цветы, а настоящие мужчины — плитку для гаража',
    author: 'Анжело Кросс',
    isFavorite: false,
  },
  {
    id: '89f05f63',
    text: 'Когда ты идёшь на работу, но у тебя нет работы, значит ты не идёшь на работу',
    author: 'Тони Сопрано',
    isFavorite: false,
  },
  {
    id: '99247874',
    text: 'Если тебе нужен веник, значит пылесос ты уже сломал',
    author: 'Фридрих Ницше',
    isFavorite: false,
  },
  {
    id: '0f5db03f',
    text: 'Не держи банан в холодильнике, иначе он потеряет свою сущность',
    author: 'Конфуций',
    isFavorite: false,
  },
  {
    id: '121a9108',
    text: 'Ломай правила, но не пульт от телевизора',
    author: 'Сильвестр Сталлоне',
    isFavorite: false,
  },
  {
    id: '52e9d49f',
    text: 'Чтобы стать успешным, начни каждое утро с пива — и мир тебя услышит',
    author: 'Уинстон Черчилль',
    isFavorite: false,
  },
  {
    id: '1fff08bd',
    text: 'Истинная свобода — это гулять босиком и не думать о том, что носки украли',
    author: 'Ганди',
    isFavorite: false,
  },
  {
    id: '0d6aa680',
    text: 'Если не знаешь, чего хочешь — значит, хочешь картошку',
    author: 'Киану Ривз',
    isFavorite: false,
  },
  {
    id: '98dadf14',
    text: 'Быть в хорошей форме — это когда можешь дышать и жевать одновременно',
    author: 'Джейсон Стетхэм',
    isFavorite: false,
  },
  {
    id: 'bf905653',
    text: 'Если дверь закрыта, значит постучи, если не помогло - это стена',
    author: 'Аль Пачино',
    isFavorite: false,
  },
  {
    id: 'c7237fc0',
    text: 'Если ты видишь дно, значит начал трезветь',
    author: 'Николас Кейдж',
    isFavorite: false,
  },
  {
    id: 'faa40503',
    text: 'Если чайник вскипел, значит его кто-то довёл',
    author: 'Киану Ривз',
    isFavorite: false,
  },
  {
    id: 'b4c5df11',
    text: 'Не бойся того, кто носит часы, бойся того, у кто носит твои часы',
    author: 'Джонни Депп',
    isFavorite: false,
  },
  {
    id: 'bfa12fe2',
    text: 'Делай, как надо. Как не надо, не делай.',
    author: 'Винни П.',
    isFavorite: false,
  },
  {
    id: '30116276',
    text: 'Слово - не воробей. Вообще ничто не воробей, кроме самого воробья',
    author: 'Андрей',
    isFavorite: false,
  },
  {
    id: '5c5933a7',
    text: 'Тот, кто не боится пятницы, просто напился в четверг',
    author: 'Скарлетт Йоханссон',
    isFavorite: false,
  },
  {
    id: '9ac557ec',
    text: 'Лучше ром в усах, чем говно в кровать',
    author: 'Джонни Депп',
    isFavorite: false,
  },
  {
    id: '92f5aca8',
    text: 'Лучше получать деньги, чем их зарабатывать',
    author: 'Стив Бушеми',
    isFavorite: false,
  },
  {
    id: '9d938f2a',
    text: 'Все дамы прекрасные, кроме тех, что стрёмные',
    author: 'Стив Бушеми',
    isFavorite: false,
  },
  {
    id: 'e63a4bd1',
    text: 'Любой порядочный мужчина должен иметь свою семью',
    author: 'Мадс Миккельсен (осуждаем)',
    isFavorite: false,
  },
  {
    id: '16cbeada',
    text: 'Если женщина знает себе цену, то я знаю ее профессию',
    author: 'Михаил Круг',
    isFavorite: false,
  },
  {
    id: '4612056d',
    text: 'Когда жизнь даёт тебе лимоны, сделай из них лимонное пиво, продай его, и купи нормальное пиво',
    author: 'Хоакин Феникс',
    isFavorite: false,
  },
  {
    id: '44fe3a28',
    text: 'Лучше слушать зов сердца, чем женщину',
    author: 'Роберт Де Ниро',
    isFavorite: false,
  },
  {
    id: '19401037',
    text: 'Я не знаю, что там в конце радуги, но я точно знаю, что в конце бутылки пива - счастье',
    author: 'Лесли Нильсен',
    isFavorite: false,
  },
  {
    id: '0ebca4a5',
    text: 'Надо любить пиво больше, чем его вкус',
    author: 'Ф. М. Достоевский',
    isFavorite: false,
  },
  {
    id: '44a27ea6',
    text: 'Пью пиво - следовательно, существую',
    author: 'Рене Декарт',
    isFavorite: false,
  },
  {
    id: '27d0d6db',
    text: 'У фальшивых мужчин есть имидж, который нужно поддерживать. У настоящих мужчин есть пузо, которое нужно втягивать',
    author: 'Дэниел Крейг',
    isFavorite: false,
  },
  {
    id: '5c96587f',
    text: 'Я занимаюсь войной и политикой, чтобы мои дети занимались хуйней и пили пиво',
    author: 'Адам Смит',
    isFavorite: false,
  },
  {
    id: '4a069462',
    text: 'Неважно в какой жопе ты находишься, но важно, чтоб в твоей жопе никто не оказался',
    author: 'Уиллем Дефо',
    isFavorite: false,
  },
  {
    id: '6668e2e1',
    text: 'Стой на месте, и твоё государство всегда догонит тебя сзади',
    author: 'Джеймс Мэдисон (Не стример)',
    isFavorite: false,
  },
  {
    id: '85a81553',
    text: '"Сколько не стряхивай, а всё равно последняя капля - в трусы"',
    author: 'Сунь-Вынь',
    isFavorite: false,
  },
];

export default quotes;
