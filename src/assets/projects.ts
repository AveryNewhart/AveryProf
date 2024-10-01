export type ProjectItem = {
    photo: string;
    title: string;
    skills: string[];
    description: string;
    github: string;
    liveSite?: string;
};

export const projectItems: ProjectItem[] = [
    {
        photo: '/images/myMusic.png',
        title: 'MY MUSIC',
        skills: ['React', 'TypeScript', 'Material-UI'],
        description: 'Are you ready for a music experience like no other? With My Music, you can search up your favorite artists and dive deep into their album data. Save albums to your listened or wanna listen categories, then you can share your thoughts with the world by posting your reviews on our vibrant feed. Connect with fellow music lovers by exploring their profiles and hit that follow button! Get ready to unleash your passion for music with My Music.',
        github: 'https://github.com/AveryNewhart/my-music',
        liveSite: 'https://my-music-4e69cad2a89f.herokuapp.com/',
    },
    {
        photo: '/images/golfSite.png',
        title: 'GOLF LANCASTER',
        skills: ['JavaScript', 'CSS', 'HTML'],
        description: 'I got tired of looking up every golf course and trying to find their rates so I had an idea on how to fix that. Here you can, find all the golf courses and their rates in Lancaster County, Pennsylvania... all in one place.',
        github: 'https://github.com/AveryNewhart/golf-lancaster',
        liveSite: 'https://averynewhart.github.io/golf-lancaster/',
    },
    {
        photo: '/images/pocketWidgetsPhoto.jpg',
        title: 'POCKET WIDGETS',
        skills: ['Vite', 'Vue', 'TypeScript', 'Tailwind'],
        description: 'A useful website I made when I was tired of using the apps on my phone or computer. I wanted to use a timer and countdown that I made. These sites were the first that I built using Vue!',
        github: 'https://github.com/AveryNewhart/pocket-widgets',
        liveSite: 'https://averynewhart.github.io/pocket-widgets/',
    },
    {
        photo: '/images/yourMovies.png',
        title: 'YOUR MOVIES',
        skills: ['JavaScript', 'Bootstrap'],
        description: 'Are you a movie buff looking for an exciting new way to keep track of your favorite films? Look no further than YOUR MOVIES, the ultimate movie website! And the best part? By creating an account, you can quickly search for any movie you want and add it to your watched or watchlist. Plus, there is the option to write reviews on the movies you have seen. Say goodbye to disorganized movie lists and hello to YOUR MOVIES!',
        github: 'https://github.com/AveryNewhart/YOUR-MOVIES',
        liveSite: 'https://yourmovies.herokuapp.com/',
    },
    {
        photo: '/images/codingbackend.webp',
        title: 'BACKEND PROJECTS',
        skills: ['JavaScript'],
        description: 'Showcasing my backend projects. These projects demonstrate my expertise in backend development. One link is for a social media application backend and the other link is the backend for an E-Commerce site. Check out the GitHub repositories below for the code, and walkthrough videos!',
        github: '',  // No need to add GitHub here since individual projects will be listed
        liveSite: '', // Leave blank since there's no live site
    }
    
];
