import type { NextApiRequest, NextApiResponse } from 'next'

export interface IAllBestChannelsResponse {
  title: string;
  href: string;
  urlImage: string;
}

const data: IAllBestChannelsResponse[] = [
  {
    title: 'Music',
    href: '/channel/music',
    urlImage: 'https://yt3.ggpht.com/8siyrWVrP2JoHXw_o-rNk25TwzPPlclq9-4LkJ6LL7Irk0_ovqVjO2e1jVSb7iVcJDKj3TFDMk8=s88-c-k-c0x00ffffff-no-rj'
  },
  {
    title: 'Sports',
    href: '/channel/sports',
    urlImage: 'https://yt3.ggpht.com/uhzNRSSq4A8dfIaOjCBJSMRU5BFoWkBIYYA3iBdZvZxHYkWWFSG9deg-Stej4yQdFv0u9KxJ=s88-c-k-c0x00ffffff-no-rj'
  },
  {
    title: 'Gaming',
    href: '/channel/gaming',
    urlImage: 'https://yt3.ggpht.com/DPTcl8E8QEA8ceqrPBi1i4nm3ufq8at1ybHQWcEQ9hsAtZo70FmC7HB6Fl9iBhqAB76cxGRuGfg=s88-c-k-c0x00ffffff-no-rj'
  },
  {
    title: 'Movies',
    href: '/channel/movies',
    urlImage: 'https://yt3.ggpht.com/6lo97rUTO7xhIBXZqLiaW2kA_eMBIEmqc27EqlKLyE4nAY-yzcKBG0Hs0YdUka3gJ629HcwgyzQ=s88-c-k-c0x00ffffff-no-rj'
  },
  {
    title: 'News',
    href: '/channel/news',
    urlImage: 'https://yt3.ggpht.com/R71nRxVlLnQs7DnQICeIzoaNrpDXxmhjq2ULvHSNeStICjFD5ygqyFvKxKyUivjah6rUlAFWlQY=s88-c-k-c0x00ffffff-no-rj'
  },
  {
    title: 'Live',
    href: '/channel/live',
    urlImage: 'https://yt3.ggpht.com/8D6JlsnvwDZFMdcbjqVji82kggP3aXXbO-yBD0RFrKlp4G1zNt9wcqcVTSPnAI8GuUAbDYQwsg=s88-c-k-c0x00ffffff-no-r'
  },
  {
    title: 'Learning',
    href: '/channel/learning',
    urlImage: 'https://yt3.ggpht.com/FMILcplAW-7hgA6aVEh1UuKCUlUiaiCss3gexAM2wCRXNwd75mIlG68OmMT2FXohX57Hry9leQ=s88-c-k-c0x00ffffff-no-rj'
  },
  {
    title: 'Music',
    href: '/channel/Music',
    urlImage: 'https://yt3.ggpht.com/xezV7Q9aPgcmyx3fcFsbizYL-wvm6O4UpEubIDBZNqaQdfb8k6SBp1xu8s4WH_Q-FNfkhNGwVw=s88-c-k-c0x00ffffff-no-rj'
  },
  {
    title: '360° Video',
    href: '/channel/360video',
    urlImage: 'https://yt3.ggpht.com/s2c25ereHulZ53YGSi_KE7nRQNJM2xvW9A6ZzqIruWyivsWlllwPBGfot4buLLLZfOhCRKrfQw=s88-c-k-c0x00ffffff-no-rj'
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IAllBestChannelsResponse[] | { message: string }>
) {
  req.method === 'GET' ?
    res.status(200).json(data) :
    res.status(400).json({ message: 'invalid method request' });
}
