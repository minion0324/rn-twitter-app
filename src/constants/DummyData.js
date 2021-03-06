import {
  Images,
} from 'src/constants';

const {
  AVATAR1,
  AVATAR2,
  AVATAR3,
  IMAGE1,
  IMAGE2,
  IMAGE3,
  ICON_PROFILE,
  ICON_LISTS,
  ICON_TOPICS,
  ICON_BOOKMARKS,
  ICON_MOMENTS,
} = Images;

const dummyNews = [
  {
    id: 0,
    avatar: AVATAR1,
    authorName: 'Overtime',
    authorId: '@overtime',
    isVerified: true,
    time: '1h',
    sphere: 'Football',
    contentText:
      'With the rise of online shopping, making the move to an online store has countless benefits.'
      + '\n\nBut the sheer quantity of options for launching a website can be overwhelming.',
    contentReplied: {
      avatar: AVATAR2,
      authorName: 'Ashok Swain',
      authorId: '@ashoswai',
      isVerified: true,
      time: '2h',
      contentText:
        'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.'
        + '\n\nWe provide information based on first-hand experience with website builders to help you make the best decision for your particular needs and get your store online in no time.',
      contentImage: IMAGE1,
    },
    countReply: '1',
    countRetweet: '321',
    countHeart: '214',
  },
  {
    id: 1,
    avatar: AVATAR2,
    authorName: 'Ashok Swain',
    authorId: '@ashoswai',
    isVerified: true,
    time: '2h',
    sphere: 'Books',
    contentText:
      'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.'
      + '\n\nWe provide information based on first-hand experience with website builders to help you make the best decision for your particular needs and get your store online in no time.',
    contentImage: IMAGE1,
    countReply: '102',
    countRetweet: '367',
    countHeart: '21.4k',
  },
  {
    id: 2,
    avatar: AVATAR3,
    authorName: 'We are all in this Together',
    authorId: '@weare',
    isVerified: true,
    time: '3h',
    contentText:
      'Before you dive in, make sure to think about the kind of website you’d like for your business.'
      + '\n\nDo you have a particular model in mind? Must-have features?'
      + '\n\nA designer theme or template? What can you do without?'
      + '\n\nOur reviews and analyses pick through all of the most important aspects of e-commerce website builders to make your choice as simple and stress-free as possible.',
    countReply: '603',
    countRetweet: '474',
    countHeart: '908',
  },
  {
    id: 3,
    authorName: 'Robert',
    authorId: '@robert',
    isVerified: false,
    time: '3h',
    contentImage: IMAGE2,
    countReply: '12',
    countRetweet: '23',
    countHeart: '10',
    aspectRatio: 1,
  },
];

const dummyFollows = [
  {
    id: 0,
    avatar: AVATAR1,
    authorName: 'Overtime',
    authorId: '@overtime',
    isVerified: true,
    sphere: 'Popular in United States',
    contentText:
      'With the rise of online shopping, making the move to an online store has countless benefits.'
      + '\n\nBut the sheer quantity of options for launching a website can be overwhelming.',
  },
  {
    id: 1,
    avatar: AVATAR2,
    authorName: 'Ashok Swain',
    authorId: '@ashoswai',
    isVerified: true,
  },
  {
    id: 2,
    avatar: AVATAR3,
    authorName: 'We are all in this Together',
    authorId: '@weare',
    isVerified: true,
    contentText:
      'Do you have a particular model in mind? Must-have features?',
  },
];

const dummyExpands = [
  'Drew Brees', 'Sports news', 'Handbags', 'Entertainment', 'Fast food',
];

const dummyTabs = [
  { key: 'first', title: 'For you' },
  { key: 'second', title: 'Trending' },
  { key: 'third', title: 'News' },
  { key: 'fourth', title: 'Sports' },
  { key: 'fifth', title: 'Fun' },
  { key: 'sixth', title: 'Entertainment' },
];

const dummySearch = {
  first: {
    title: {
      image: IMAGE3,
      title: 'With the rise of online shopping, making the move to an online store has countless benefits.',
      sphere: 'US news',
      time: 'LIVE',
      trending: '#dcprotest',
    },
    trendings: [
      {
        id: 0,
        title: 'COVID-19: Updates for the US',
        trending: '',
        authorInfo: {
          image: IMAGE1,
          id: 'COVID-19',
          time: 'Last night',
          avatar: AVATAR1,
          isVerified: false,
        },
        tweets: '',
      },
      {
        id: 1,
        title: 'A designer theme or template? What can you do without?',
        trending: 'United States',
        tweets: '38.4K',
      },
      {
        id: 2,
        title: 'Our reviews and analyses pick through all of the most important aspects of e-commerce website builders to make your choice as simple and stress-free as possible.',
        trending: 'United States',
        tweets: '37.7K',
      },
      {
        id: 3,
        title: 'Do you have a particular model in mind? Must-have features?',
        trending: 'Antifa',
        authorInfo: {
          image: IMAGE2,
          id: 'COVID-19',
          time: 'Yesterday',
          avatar: AVATAR1,
          isVerified: false,
        },
        tweets: '',
      },
      {
        id: 4,
        title: 'With the rise of online shopping, making the move to an online store has countless benefits.',
        trending: 'California',
        tweets: '29.4K',
      },
      {
        id: 5,
        title: 'But the sheer quantity of options for launching a website can be overwhelming.',
        trending: 'United States',
        tweets: '5,363',
      },
      {
        id: 6,
        title: 'Do you have a particular model in mind? Must-have features?',
        trending: 'Antifa',
        authorInfo: {
          image: IMAGE3,
          id: 'US news',
          time: 'May 30, 2020',
          avatar: AVATAR1,
          isVerified: true,
        },
        tweets: '',
      },
    ],
    followings: [
      {
        title: 'Football',
        news: dummyNews,
      },
      {
        title: 'Books',
        news: dummyNews,
      },
    ],
  },
  second: {
    trendings: [
      {
        id: 0,
        title: 'Designer',
        trendingNumber: 1,
        tweets: '12.4K',
      },
      {
        id: 1,
        title: 'Template',
        trendingNumber: 2,
        tweets: '27.9K',
      },
      {
        id: 2,
        title: 'Experience',
        trendingNumber: 3,
        tweets: '17.8K',
      },
      {
        id: 3,
        title: 'E-Commerce',
        trendingNumber: 4,
        tweets: '15.7K',
      },
      {
        id: 4,
        title: 'Together',
        trendingNumber: 5,
        tweets: '2.9K',
      },
      {
        id: 5,
        title: 'Designer',
        trendingNumber: 6,
        tweets: '12.4K',
      },
      {
        id: 6,
        title: 'Template',
        trendingNumber: 7,
        tweets: '27.9K',
      },
      {
        id: 7,
        title: 'Experience',
        trendingNumber: 8,
        tweets: '17.8K',
      },
      {
        id: 8,
        title: 'E-Commerce',
        trendingNumber: 9,
        tweets: '15.7K',
      },
      {
        id: 9,
        title: 'Together',
        trendingNumber: 10,
        tweets: '2.9K',
      },
    ],
  },
  third: {
    title: {
      image: IMAGE1,
      title: 'With the rise of online shopping, making the move to an online store has countless benefits.',
      sphere: 'US news',
      time: 'LIVE',
      badge: true,
      trending: '#dcprotest',
    },
    trendings: [
      {
        id: 0,
        title: 'Before you dive in, make sure to think about the kind of website you’d like for your business.',
        authorInfo: {
          image: IMAGE2,
          id: 'US news',
          time: '1h',
          avatar: AVATAR1,
          isVerified: false,
        },
      },
      {
        id: 1,
        title:
          'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.'
          + '\n\nWe provide information based on first-hand experience with website builders to help you make the best decision for your particular needs and get your store online in no time.',
        authorInfo: {
          image: IMAGE3,
          id: 'US news',
          time: 'Yesterday',
          avatar: AVATAR1,
          isVerified: true,
        },
      },
      {
        id: 2,
        title: 'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.',
        authorInfo: {
          image: IMAGE1,
          id: 'Elemental',
          time: 'Last night',
          avatar: AVATAR1,
          isVerified: false,
        },
      },
      {
        id: 3,
        title: 'Do you have a particular model in mind? Must-have features?',
        authorInfo: {
          image: IMAGE2,
          id: 'US news',
          time: 'May 30, 2020',
          avatar: AVATAR1,
          isVerified: true,
        },
      },
      {
        id: 4,
        title: 'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.',
        authorInfo: {
          image: IMAGE3,
          id: 'Elemental',
          time: 'Last night',
          avatar: AVATAR1,
          isVerified: false,
        },
      },
      {
        id: 5,
        title: 'Do you have a particular model in mind? Must-have features?',
        authorInfo: {
          image: IMAGE1,
          id: 'US news',
          time: 'May 30, 2020',
          avatar: AVATAR1,
          isVerified: true,
        },
      },
    ],
  },
  fourth: {
    title: {
      image: IMAGE2,
      title: 'Before you dive in, make sure to think about the kind of website you’d like for your business.',
      sphere: 'Football',
      time: 'This afternoon',
    },
    trendings: [
      {
        id: 0,
        title: 'Before you dive in, make sure to think about the kind of website you’d like for your business.',
        authorInfo: {
          image: IMAGE3,
          id: 'US news',
          time: '1h',
          avatar: AVATAR1,
          isVerified: false,
        },
      },
      {
        id: 1,
        title:
          'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.'
          + '\n\nWe provide information based on first-hand experience with website builders to help you make the best decision for your particular needs and get your store online in no time.',
        authorInfo: {
          image: IMAGE1,
          id: 'US news',
          time: 'Yesterday',
          avatar: AVATAR1,
          isVerified: true,
        },
      },
      {
        id: 2,
        title: 'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.',
        authorInfo: {
          image: IMAGE2,
          id: 'Elemental',
          time: 'Last night',
          avatar: AVATAR1,
          isVerified: false,
        },
      },
      {
        id: 3,
        title: 'Do you have a particular model in mind? Must-have features?',
        authorInfo: {
          image: IMAGE3,
          id: 'US news',
          time: 'May 30, 2020',
          avatar: AVATAR1,
          isVerified: true,
        },
      },
      {
        id: 4,
        title: 'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.',
        authorInfo: {
          image: IMAGE1,
          id: 'Elemental',
          time: 'Last night',
          avatar: AVATAR1,
          isVerified: false,
        },
      },
      {
        id: 5,
        title: 'Do you have a particular model in mind? Must-have features?',
        authorInfo: {
          image: IMAGE2,
          id: 'US news',
          time: 'May 30, 2020',
          avatar: AVATAR1,
          isVerified: true,
        },
      },
    ],
  },
  fifth: {
    title: {
      image: IMAGE3,
      title: 'Do you have a particular model in mind? Must-have features?',
      sphere: 'Animals',
      time: 'May 30, 2020',
    },
    trendings: [
      {
        id: 0,
        title: 'Before you dive in, make sure to think about the kind of website you’d like for your business.',
        authorInfo: {
          image: IMAGE1,
          id: 'US news',
          time: '1h',
          avatar: AVATAR1,
          isVerified: false,
        },
      },
      {
        id: 1,
        title:
          'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.'
          + '\n\nWe provide information based on first-hand experience with website builders to help you make the best decision for your particular needs and get your store online in no time.',
        authorInfo: {
          image: IMAGE2,
          id: 'US news',
          time: 'Yesterday',
          avatar: AVATAR1,
          isVerified: true,
        },
      },
      {
        id: 2,
        title: 'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.',
        authorInfo: {
          image: IMAGE3,
          id: 'Elemental',
          time: 'Last night',
          avatar: AVATAR1,
          isVerified: false,
        },
      },
      {
        id: 3,
        title: 'Do you have a particular model in mind? Must-have features?',
        authorInfo: {
          image: IMAGE1,
          id: 'US news',
          time: 'May 30, 2020',
          avatar: AVATAR1,
          isVerified: true,
        },
      },
      {
        id: 4,
        title: 'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.',
        authorInfo: {
          image: IMAGE2,
          id: 'Elemental',
          time: 'Last night',
          avatar: AVATAR1,
          isVerified: false,
        },
      },
      {
        id: 5,
        title: 'Do you have a particular model in mind? Must-have features?',
        authorInfo: {
          image: IMAGE3,
          id: 'US news',
          time: 'May 30, 2020',
          avatar: AVATAR1,
          isVerified: true,
        },
      },
    ],
  },
  sixth: {
    title: {
      image: IMAGE1,
      title: 'Do you have a particular model in mind? Must-have features?',
      sphere: 'Animals',
      time: 'May 30, 2020',
    },
    trendings: [
      {
        id: 0,
        title: 'Before you dive in, make sure to think about the kind of website you’d like for your business.',
        authorInfo: {
          image: IMAGE2,
          id: 'US news',
          time: '1h',
          avatar: AVATAR1,
          isVerified: false,
        },
      },
    ],
  },
};

const dummyMessages = [
  {
    avatar: AVATAR1,
    userName: 'Overtime',
    userId: '@overtime',
    isVerified: false,
    time: '1h',
    lastMessage: 'You: It\'s nice to meet you.',
  },
  {
    avatar: AVATAR2,
    userName: 'Ashok Swain',
    userId: '@ashoswai',
    isVerified: true,
    time: '3h',
    lastMessage: 'You: Thanks.',
  },
];

const dummyNotifications = {
  first: [
    {
      id: 0,
      avatars: [AVATAR1],
      title: 'Recent Tweet from SportsCenter',
      description: 'Before you dive in, make sure to think about the kind of website you’d like for your business.',
    },
    {
      id: 1,
      avatars: [AVATAR2, AVATAR3],
      title: 'Do you have a particular model in mind? Must-have features?',
      description: 'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.',
    },
    {
      id: 2,
      avatars: [AVATAR1],
      title: 'Recent Tweet from SportsCenter',
      description: 'We provide information based on first-hand experience with website builders to help you make the best decision for your particular needs and get your store online in no time.',
    },
    {
      id: 3,
      avatars: [AVATAR2],
      title: 'Before you dive in, make sure to think about the kind of website you’d like for your business.',
      description: 'We provide information based on first-hand experience with website builders to help you make the best decision for your particular needs and get your store online in no time.',
    },
  ],
  second: [

  ],
};

const dummyMenu = [
  {
    icon: ICON_PROFILE,
    title: 'Profile',
  },
  {
    icon: ICON_LISTS,
    title: 'Lists',
  },
  {
    icon: ICON_TOPICS,
    title: 'Topics',
  },
  {
    icon: ICON_BOOKMARKS,
    title: 'Bookmarks',
  },
  {
    icon: ICON_MOMENTS,
    title: 'Moments',
  },
];

const dummyHelp = [
  {
    title: 'Settings and Privacy',
  },
  {
    title: 'Help Center',
  },
];

export default {
  dummyNews,
  dummyFollows,
  dummyExpands,
  dummyTabs,
  dummySearch,
  dummyMessages,
  dummyNotifications,
  dummyMenu,
  dummyHelp,
};
