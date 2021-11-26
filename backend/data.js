import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name: "Victor",
            email:'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
            isSeller: true,
            seller: {
                name: 'Viccy',
                logo:'/images/p1.jpg',
                description: 'best seller',
                rating:4.5,
                numReviews: 120,
            }
        },
        {
            name: "James",
            email:"user@example.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
    ],
    products: [
        {
            name:'PS5',
            category:'Console',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 3.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name:'Pad1',
            category:'Pad',
            image: '/images/p1.jpg',
            price: 60,
            countInStock: 20,
            brand: 'Nike',
            rating: 2,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name:'Pad2',
            category:'Pad',
            image: '/images/p1.jpg',
            price: 60,
            countInStock: 0,
            brand: 'Nike',
            rating: 5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name:'Cord',
            category:'Gadet',
            image: '/images/p1.jpg',
            price: 10,
            countInStock: 0,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name:'PS4',
            category:'console',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 100,
            brand: 'Nike',
            rating: 1,
            numReviews: 10,
            description: 'high quality product',
        },
    ],
};

export default data;