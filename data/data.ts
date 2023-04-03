import { TArticle } from '@/entities/Article/models'

const dataArticles: TArticle[] = []
for (let i = 1; i <= 100; i++) {
    dataArticles.push({
        id: i,
        title: `Статья ${i}`,
        image: './assets/images/default-image.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        likes: Math.round(Math.random() * 50)
    })
}

export default dataArticles
