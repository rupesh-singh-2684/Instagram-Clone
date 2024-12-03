import { Videos } from ".."
const post = [
    {
        id: '1',
        user: {
            imageUri: 'https://images.unsplash.com/photo-1671566412876-8e2564eb701d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
            name: 'Peter'
        },
        imageUri: 'https://images.pexels.com/photos/3617531/pexels-photo-3617531.jpeg?auto=compress&cs=tinysrgb&w=800',
        captions: '🌵🌵 Noice #beach',
        likeCounts: 641,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://media.istockphoto.com/id/2148975617/photo/woman-jumping-high-after-successful-job-interview.webp?a=1&b=1&s=612x612&w=0&k=20&c=vFesyxJfWN7RYXIyjfJynkaXZhbnw3NykpI26ijiijE=',
                name: 'Kareena',
                comments: 'Amazing',
                time: '1h'
            },
        }
        ,
        videoUri:'https://videos.pexels.com/video-files/25254348/11900272_360_640_30fps.mp4'
    },
    {
        id: '2',
        user: {
            imageUri: 'https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
            name: 'John'
        },
        imageUri: 'https://plus.unsplash.com/premium_photo-1726862996228-8c1c6dc7136d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D',
        captions: '🌵🌵',
        likeCounts: 793,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Om',
                comments: 'noice',
                time: '2h'
            }
        }
        ,
        videoUri:'https://marketplace.canva.com/EAFKym5vld8/1/document_450w/canva-BeXvExHk7r8.mp4'
    },
    {
        id: '3',
        user: {
            imageUri: 'https://plus.unsplash.com/premium_photo-1664478383014-e8bc930be7c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Alex'
        },
        imageUri: 'https://images.unsplash.com/photo-1727088269392-486a739fcd53?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Taimur',
                comments: 'Good',
                time: '1h'
            }
        }
        ,
        captions: '🌵🌵',
        likeCounts: 383,
        postedAt: '6 minutes ago',
        videoUri:'https://marketplace.canva.com/EAFh_hMDOh4/2/document_450w/canva-NEHcZJe3Sn8.mp4'
    }, {
        id: '4',
        user: {
            imageUri: 'https://media.istockphoto.com/id/2148975617/photo/woman-jumping-high-after-successful-job-interview.webp?a=1&b=1&s=612x612&w=0&k=20&c=vFesyxJfWN7RYXIyjfJynkaXZhbnw3NykpI26ijiijE=',
            name: 'Null'
        },
        imageUri: 'https://media.istockphoto.com/id/954012438/photo/lonely-journey-on-summit-of-mountain.webp?a=1&b=1&s=612x612&w=0&k=20&c=61KGmmwDT0PqBFRD0gANu2LVef0s1yShLu5W0WoZYXw=',
        captions: '🌵🌵',
        likeCounts: 870,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Saif',
                comments: 'Lovely',
                time: '2h'
            }
        }
        ,
        videoUri:'https://marketplace.canva.com/EAFKnUkHnpg/1/document_450w/canva-pSRK3roe6pM.mp4'
    },
    {
        id: '5',
        user: {
            imageUri: 'https://images.unsplash.com/photo-1671566412876-8e2564eb701d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
            name: 'Peter'
        },
        imageUri: 'https://images.unsplash.com/photo-1730758267175-cd6b2e3f169d?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        captions: '🌵🌵',
        likeCounts: 323,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Kajol',
                comments: 'BeautyFull',
                time: '4h'
            }
        }
        ,
        videoUri:'https://videos.pexels.com/video-files/8086298/8086298-sd_360_640_24fps.mp4'

    },
    {
        id: '6',
        user: {
            imageUri: 'https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
            name: 'John'
        },
        imageUri: 'https://plus.unsplash.com/premium_photo-1726862996228-8c1c6dc7136d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D',
        captions: '🌵🌵',
        likeCounts: 543,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Ishita',
                comments: 'Nice',
                time: '3h'
            }
        }
        ,
        videoUri:'https://videos.pexels.com/video-files/9300025/9300025-sd_506_960_25fps.mp4'

    },
    {
        id: '7',
        user: {
            imageUri: 'https://plus.unsplash.com/premium_photo-1664478383014-e8bc930be7c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Alex'
        },
        imageUri: 'https://images.unsplash.com/photo-1727088269392-486a739fcd53?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D',
        captions: '🌵🌵',
        likeCounts: 443,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Esha',
                comments: 'pretty 😍',
                time: '9h'
            }
        }
        ,
        videoUri:'https://videos.pexels.com/video-files/6660934/6660934-sd_506_960_25fps.mp4'

    }, {
        id: '8',
        user: {
            imageUri: 'https://media.istockphoto.com/id/2148975617/photo/woman-jumping-high-after-successful-job-interview.webp?a=1&b=1&s=612x612&w=0&k=20&c=vFesyxJfWN7RYXIyjfJynkaXZhbnw3NykpI26ijiijE=',
            name: 'Null'
        },
        imageUri: 'https://media.istockphoto.com/id/954012438/photo/lonely-journey-on-summit-of-mountain.webp?a=1&b=1&s=612x612&w=0&k=20&c=61KGmmwDT0PqBFRD0gANu2LVef0s1yShLu5W0WoZYXw=',
        captions: '🌵🌵',
        likeCounts: 178,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Parth',
                comments: 'amazing',
                time: '9h'
            }
        }
        ,
        videoUri:'https://videos.pexels.com/video-files/8447667/8447667-sd_506_960_25fps.mp4'

    },{
        id: '1',
        user: {
            imageUri: 'https://images.unsplash.com/photo-1671566412876-8e2564eb701d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
            name: 'Peter'
        },
        imageUri: 'https://images.unsplash.com/photo-1730758267175-cd6b2e3f169d?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        captions: '🌵🌵 Noice #beach',
        likeCounts: 641,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://media.istockphoto.com/id/2148975617/photo/woman-jumping-high-after-successful-job-interview.webp?a=1&b=1&s=612x612&w=0&k=20&c=vFesyxJfWN7RYXIyjfJynkaXZhbnw3NykpI26ijiijE=',
                name: 'Kareena',
                comments: 'Amazing',
                time: '1h'
            }
        }
        ,
        videoUri:'https://videos.pexels.com/video-files/6831203/6831203-sd_360_640_25fps.mp4'
    },
    {
        id: '2',
        user: {
            imageUri: 'https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
            name: 'John'
        },
        videoUri: 'https://videos.pexels.com/video-files/5896379/5896379-sd_360_640_24fps.mp4',
        imageUri: 'https://plus.unsplash.com/premium_photo-1726862996228-8c1c6dc7136d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D',
        captions: '🌵🌵',
        likeCounts: 793,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Om',
                comments: 'noice',
                time: '2h'
            }
        }
        ,
        videoUri:'https://videos.pexels.com/video-files/8084901/8084901-sd_360_640_24fps.mp4'

    },
    {
        id: '3',
        user: {
            imageUri: 'https://plus.unsplash.com/premium_photo-1664478383014-e8bc930be7c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Alex'
        },
        imageUri: 'https://images.unsplash.com/photo-1727088269392-486a739fcd53?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Taimur',
                comments: 'Good',
                time: '1h'
            }
        }
        ,
        captions: '🌵🌵',
        likeCounts: 383,
        postedAt: '6 minutes ago',
        videoUri:'https://videos.pexels.com/video-files/7438539/7438539-sd_360_640_30fps.mp4'

    }, {
        id: '4',
        user: {
            imageUri: 'https://media.istockphoto.com/id/2148975617/photo/woman-jumping-high-after-successful-job-interview.webp?a=1&b=1&s=612x612&w=0&k=20&c=vFesyxJfWN7RYXIyjfJynkaXZhbnw3NykpI26ijiijE=',
            name: 'Null'
        },
        imageUri: 'https://media.istockphoto.com/id/954012438/photo/lonely-journey-on-summit-of-mountain.webp?a=1&b=1&s=612x612&w=0&k=20&c=61KGmmwDT0PqBFRD0gANu2LVef0s1yShLu5W0WoZYXw=',
        captions: '🌵🌵',
        likeCounts: 870,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Saif',
                comments: 'Lovely',
                time: '2h'
            }
        }
        ,
        videoUri:'https://videos.pexels.com/video-files/26964351/12037333_360_640_30fps.mp4'

    },
    {
        id: '5',
        user: {
            imageUri: 'https://images.unsplash.com/photo-1671566412876-8e2564eb701d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
            name: 'Peter'
        },
        imageUri: 'https://images.unsplash.com/photo-1730758267175-cd6b2e3f169d?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        captions: '🌵🌵',
        likeCounts: 323,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Kajol',
                comments: 'BeautyFull',
                time: '4h'
            }
        }
        ,
        videoUri:'https://videos.pexels.com/video-files/26964519/12037516_360_640_30fps.mp4'

    },
    {
        id: '6',
        user: {
            imageUri: 'https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
            name: 'John'
        },
        imageUri: 'https://plus.unsplash.com/premium_photo-1726862996228-8c1c6dc7136d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D',
        captions: '🌵🌵',
        likeCounts: 543,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Ishita',
                comments: 'Nice',
                time: '3h'
            }
        }
        ,
        videoUri:'https://videos.pexels.com/video-files/25534040/11902019_360_640_30fps.mp4'

    },
    {
        id: '7',
        user: {
            imageUri: 'https://plus.unsplash.com/premium_photo-1664478383014-e8bc930be7c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Alex'
        },
        imageUri: 'https://images.unsplash.com/photo-1727088269392-486a739fcd53?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D',
        captions: '🌵🌵',
        likeCounts: 443,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Esha',
                comments: 'pretty 😍',
                time: '9h'
            }
        }
        ,
        videoUri:'https://videos.pexels.com/video-files/25534040/11902019_360_640_30fps.mp4'

    }, {
        id: '8',
        user: {
            imageUri: 'https://media.istockphoto.com/id/2148975617/photo/woman-jumping-high-after-successful-job-interview.webp?a=1&b=1&s=612x612&w=0&k=20&c=vFesyxJfWN7RYXIyjfJynkaXZhbnw3NykpI26ijiijE=',
            name: 'Null'
        },
        imageUri: 'https://media.istockphoto.com/id/954012438/photo/lonely-journey-on-summit-of-mountain.webp?a=1&b=1&s=612x612&w=0&k=20&c=61KGmmwDT0PqBFRD0gANu2LVef0s1yShLu5W0WoZYXw=',
        captions: '🌵🌵',
        likeCounts: 178,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Prarthana',
                comments: 'amazing',
                time: '9h'
            }
        }
        ,
        videoUri:'https://marketplace.canva.com/EAFKym5vld8/1/document_450w/canva-BeXvExHk7r8.mp4'
    },    {
        id: '1',
        user: {
            imageUri: 'https://images.unsplash.com/photo-1671566412876-8e2564eb701d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
            name: 'Peter'
        },
        imageUri: 'https://images.pexels.com/photos/3617531/pexels-photo-3617531.jpeg?auto=compress&cs=tinysrgb&w=800',
        captions: '🌵🌵 Noice #beach',
        likeCounts: 641,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://media.istockphoto.com/id/2148975617/photo/woman-jumping-high-after-successful-job-interview.webp?a=1&b=1&s=612x612&w=0&k=20&c=vFesyxJfWN7RYXIyjfJynkaXZhbnw3NykpI26ijiijE=',
                name: 'Kareena',
                comments: 'Amazing',
                time: '1h'
            }
        }
        ,
        videoUri:'https://videos.pexels.com/video-files/25254348/11900272_360_640_30fps.mp4'
    },
    {
        id: '2',
        user: {
            imageUri: 'https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
            name: 'John'
        },
        imageUri: 'https://plus.unsplash.com/premium_photo-1726862996228-8c1c6dc7136d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D',
        captions: '🌵🌵',
        likeCounts: 793,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Om',
                comments: 'noice',
                time: '2h'
            }
        }
        ,
        videoUri:'https://marketplace.canva.com/EAFKym5vld8/1/document_450w/canva-BeXvExHk7r8.mp4'
    },
    {
        id: '3',
        user: {
            imageUri: 'https://plus.unsplash.com/premium_photo-1664478383014-e8bc930be7c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Alex'
        },
        imageUri: 'https://images.unsplash.com/photo-1727088269392-486a739fcd53?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Taimur',
                comments: 'Good',
                time: '1h'
            }
        }
        ,
        captions: '🌵🌵',
        likeCounts: 383,
        postedAt: '6 minutes ago',
        videoUri:'https://marketplace.canva.com/EAFh_hMDOh4/2/document_450w/canva-NEHcZJe3Sn8.mp4'
    }, {
        id: '4',
        user: {
            imageUri: 'https://media.istockphoto.com/id/2148975617/photo/woman-jumping-high-after-successful-job-interview.webp?a=1&b=1&s=612x612&w=0&k=20&c=vFesyxJfWN7RYXIyjfJynkaXZhbnw3NykpI26ijiijE=',
            name: 'Null'
        },
        imageUri: 'https://media.istockphoto.com/id/954012438/photo/lonely-journey-on-summit-of-mountain.webp?a=1&b=1&s=612x612&w=0&k=20&c=61KGmmwDT0PqBFRD0gANu2LVef0s1yShLu5W0WoZYXw=',
        captions: '🌵🌵',
        likeCounts: 870,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Saif',
                comments: 'Lovely',
                time: '2h'
            }
        }
        ,
        videoUri:'https://marketplace.canva.com/EAFKnUkHnpg/1/document_450w/canva-pSRK3roe6pM.mp4'
    },
    {
        id: '5',
        user: {
            imageUri: 'https://images.unsplash.com/photo-1671566412876-8e2564eb701d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
            name: 'Peter'
        },
        imageUri: 'https://images.unsplash.com/photo-1730758267175-cd6b2e3f169d?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        captions: '🌵🌵',
        likeCounts: 323,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Kajol',
                comments: 'BeautyFull',
                time: '4h'
            }
        }
        ,
        videoUri:'https://marketplace.canva.com/EAFKnUkHnpg/1/document_450w/canva-pSRK3roe6pM.mp4'

    },
    {
        id: '6',
        user: {
            imageUri: 'https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
            name: 'John'
        },
        imageUri: 'https://plus.unsplash.com/premium_photo-1726862996228-8c1c6dc7136d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D',
        captions: '🌵🌵',
        likeCounts: 543,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Ishita',
                comments: 'Nice',
                time: '3h'
            }
        }
        ,
        videoUri:'https://marketplace.canva.com/EAFKnUkHnpg/1/document_450w/canva-pSRK3roe6pM.mp4'
    },
    {
        id: '7',
        user: {
            imageUri: 'https://plus.unsplash.com/premium_photo-1664478383014-e8bc930be7c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Alex'
        },
        imageUri: 'https://images.unsplash.com/photo-1727088269392-486a739fcd53?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D',
        captions: '🌵🌵',
        likeCounts: 443,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Esha',
                comments: 'pretty 😍',
                time: '9h'
            }
        }
        ,
        videoUri:'https://videos.pexels.com/video-files/6660934/6660934-sd_506_960_25fps.mp4'

    }, {
        id: '8',
        user: {
            imageUri: 'https://media.istockphoto.com/id/2148975617/photo/woman-jumping-high-after-successful-job-interview.webp?a=1&b=1&s=612x612&w=0&k=20&c=vFesyxJfWN7RYXIyjfJynkaXZhbnw3NykpI26ijiijE=',
            name: 'Null'
        },
        imageUri: 'https://media.istockphoto.com/id/954012438/photo/lonely-journey-on-summit-of-mountain.webp?a=1&b=1&s=612x612&w=0&k=20&c=61KGmmwDT0PqBFRD0gANu2LVef0s1yShLu5W0WoZYXw=',
        captions: '🌵🌵',
        likeCounts: 178,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Parth',
                comments: 'amazing',
                time: '9h'
            }
        }
        ,
        videoUri:'https://marketplace.canva.com/EAFKnUkHnpg/1/document_450w/canva-pSRK3roe6pM.mp4'
    },    {
        id: '1',
        user: {
            imageUri: 'https://images.unsplash.com/photo-1671566412876-8e2564eb701d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
            name: 'Peter'
        },
        imageUri: 'https://images.pexels.com/photos/3617531/pexels-photo-3617531.jpeg?auto=compress&cs=tinysrgb&w=800',
        captions: '🌵🌵 Noice #beach',
        likeCounts: 641,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://media.istockphoto.com/id/2148975617/photo/woman-jumping-high-after-successful-job-interview.webp?a=1&b=1&s=612x612&w=0&k=20&c=vFesyxJfWN7RYXIyjfJynkaXZhbnw3NykpI26ijiijE=',
                name: 'Kareena',
                comments: 'Amazing',
                time: '1h'
            }
        }
        ,
        videoUri:'https://videos.pexels.com/video-files/25254348/11900272_360_640_30fps.mp4'
    },
    {
        id: '2',
        user: {
            imageUri: 'https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
            name: 'John'
        },
        imageUri: 'https://plus.unsplash.com/premium_photo-1726862996228-8c1c6dc7136d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D',
        captions: '🌵🌵',
        likeCounts: 793,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Om',
                comments: 'noice',
                time: '2h'
            }
        }
        ,
        videoUri:'https://marketplace.canva.com/EAFKym5vld8/1/document_450w/canva-BeXvExHk7r8.mp4'
    },
    {
        id: '3',
        user: {
            imageUri: 'https://plus.unsplash.com/premium_photo-1664478383014-e8bc930be7c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Alex'
        },
        imageUri: 'https://images.unsplash.com/photo-1727088269392-486a739fcd53?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Taimur',
                comments: 'Good',
                time: '1h'
            }
        }
        ,
        captions: '🌵🌵',
        likeCounts: 383,
        postedAt: '6 minutes ago',
        videoUri:'https://marketplace.canva.com/EAFh_hMDOh4/2/document_450w/canva-NEHcZJe3Sn8.mp4'
    }, {
        id: '4',
        user: {
            imageUri: 'https://media.istockphoto.com/id/2148975617/photo/woman-jumping-high-after-successful-job-interview.webp?a=1&b=1&s=612x612&w=0&k=20&c=vFesyxJfWN7RYXIyjfJynkaXZhbnw3NykpI26ijiijE=',
            name: 'Null'
        },
        imageUri: 'https://media.istockphoto.com/id/954012438/photo/lonely-journey-on-summit-of-mountain.webp?a=1&b=1&s=612x612&w=0&k=20&c=61KGmmwDT0PqBFRD0gANu2LVef0s1yShLu5W0WoZYXw=',
        captions: '🌵🌵',
        likeCounts: 870,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Saif',
                comments: 'Lovely',
                time: '2h'
            }
        }
        ,
        videoUri:'https://marketplace.canva.com/EAFKnUkHnpg/1/document_450w/canva-pSRK3roe6pM.mp4'
    },
    {
        id: '5',
        user: {
            imageUri: 'https://images.unsplash.com/photo-1671566412876-8e2564eb701d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
            name: 'Peter'
        },
        imageUri: 'https://images.unsplash.com/photo-1730758267175-cd6b2e3f169d?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        captions: '🌵🌵',
        likeCounts: 323,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Kajol',
                comments: 'BeautyFull',
                time: '4h'
            }
        }
        ,
        videoUri:'https://marketplace.canva.com/EAFKnUkHnpg/1/document_450w/canva-pSRK3roe6pM.mp4'
    },
    {
        id: '6',
        user: {
            imageUri: 'https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
            name: 'John'
        },
        imageUri: 'https://plus.unsplash.com/premium_photo-1726862996228-8c1c6dc7136d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D',
        captions: '🌵🌵',
        likeCounts: 543,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Ishita',
                comments: 'Nice',
                time: '3h'
            }
        }
        ,
        videoUri:'https://marketplace.canva.com/EAFKnUkHnpg/1/document_450w/canva-pSRK3roe6pM.mp4'
    },
    {
        id: '7',
        user: {
            imageUri: 'https://plus.unsplash.com/premium_photo-1664478383014-e8bc930be7c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Alex'
        },
        imageUri: 'https://images.unsplash.com/photo-1727088269392-486a739fcd53?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D',
        captions: '🌵🌵',
        likeCounts: 443,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Esha',
                comments: 'pretty 😍',
                time: '9h'
            }
        }
        ,
        videoUri:'https://videos.pexels.com/video-files/6660934/6660934-sd_506_960_25fps.mp4'

    }, {
        id: '8',
        user: {
            imageUri: 'https://media.istockphoto.com/id/2148975617/photo/woman-jumping-high-after-successful-job-interview.webp?a=1&b=1&s=612x612&w=0&k=20&c=vFesyxJfWN7RYXIyjfJynkaXZhbnw3NykpI26ijiijE=',
            name: 'Null'
        },
        imageUri: 'https://media.istockphoto.com/id/954012438/photo/lonely-journey-on-summit-of-mountain.webp?a=1&b=1&s=612x612&w=0&k=20&c=61KGmmwDT0PqBFRD0gANu2LVef0s1yShLu5W0WoZYXw=',
        captions: '🌵🌵',
        likeCounts: 178,
        postedAt: '6 minutes ago',
        comments:
        {
            user: {
                icon: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=800',
                name: 'Parth',
                comments: 'amazing',
                time: '9h'
            }
        }
        ,
        videoUri:'https://marketplace.canva.com/EAFKnUkHnpg/1/document_450w/canva-pSRK3roe6pM.mp4'
    },
]

export default post