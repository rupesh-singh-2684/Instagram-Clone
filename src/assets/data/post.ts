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
        videoUri: 'https://videos.pexels.com/video-files/25913866/11920767_360_640_30fps.mp4'
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
        videoUri: 'https://marketplace.canva.com/EAFKym5vld8/1/document_450w/canva-BeXvExHk7r8.mp4'
    },
    {
        id: '3',
        user: {
            imageUri: 'https://plus.unsplash.com/premium_photo-1664478383014-e8bc930be7c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Alex'
        },
        imageUri: 'https://images.pexels.com/photos/2727424/pexels-photo-2727424.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://marketplace.canva.com/EAFh_hMDOh4/2/document_450w/canva-NEHcZJe3Sn8.mp4'
    }, {
        id: '4',
        user: {
            imageUri: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Rowan Pierce'
        },
        imageUri: 'https://images.pexels.com/photos/2422497/pexels-photo-2422497.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://marketplace.canva.com/EAFKnUkHnpg/1/document_450w/canva-pSRK3roe6pM.mp4'
    },
    {
        id: '5',
        user: {
            imageUri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Lila Camden'
        },
        imageUri: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/8086298/8086298-sd_360_640_24fps.mp4'

    },
    {
        id: '6',
        user: {
            imageUri: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Jace Donovan'
        },
        imageUri: 'https://images.pexels.com/photos/8088373/pexels-photo-8088373.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=2',
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
        videoUri: 'https://videos.pexels.com/video-files/9300025/9300025-sd_506_960_25fps.mp4'

    },
    {
        id: '7',
        user: {
            imageUri: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Nora Kingsley'
        },
        imageUri: 'https://images.pexels.com/photos/2332586/pexels-photo-2332586.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/6660934/6660934-sd_506_960_25fps.mp4'

    }, {
        id: '8',
        user: {
            imageUri: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Felix Adler'
        },
        imageUri: 'https://images.pexels.com/photos/29614398/pexels-photo-29614398/free-photo-of-retro-photo-booth-bus-in-tbilisi-street-art.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/8447667/8447667-sd_506_960_25fps.mp4'

    }, {
        id: '9',
        user: {
            imageUri: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Clara Wells'
        },
        imageUri: 'https://images.pexels.com/photos/1581711/pexels-photo-1581711.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/6831203/6831203-sd_360_640_25fps.mp4'
    },
    {
        id: '10',
        user: {
            imageUri: 'https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Ethan Ford'
        },
        videoUri: 'https://videos.pexels.com/video-files/5896379/5896379-sd_360_640_24fps.mp4',
        imageUri: 'https://images.pexels.com/photos/4066761/pexels-photo-4066761.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/8084901/8084901-sd_360_640_24fps.mp4'

    },
    {
        id: '11',
        user: {
            imageUri: 'https://images.pexels.com/photos/1918246/pexels-photo-1918246.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Mia Carlisle'
        },
        imageUri: 'https://images.pexels.com/photos/7015065/pexels-photo-7015065.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/7438539/7438539-sd_360_640_30fps.mp4'

    }, {
        id: '12',
        user: {
            imageUri: 'https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Xavier Holt'
        },
        imageUri: 'https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/26964351/12037333_360_640_30fps.mp4'

    },
    {
        id: '13',
        user: {
            imageUri: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Sophie Bennett'
        },
        imageUri: 'https://images.pexels.com/photos/207353/pexels-photo-207353.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/26964519/12037516_360_640_30fps.mp4'

    },
    {
        id: '14',
        user: {
            imageUri: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Gideon Blake'
        },
        imageUri: 'https://images.pexels.com/photos/276092/pexels-photo-276092.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/25534040/11902019_360_640_30fps.mp4'

    },
    {
        id: '15',
        user: {
            imageUri: 'https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Ava Sinclair'
        },
        imageUri: 'https://images.pexels.com/photos/1590549/pexels-photo-1590549.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/6867627/6867627-sd_506_960_25fps.mp4'

    }, {
        id: '16',
        user: {
            imageUri: 'https://images.pexels.com/photos/3785186/pexels-photo-3785186.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Declan Rivers'
        },
        imageUri: 'https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/29393168/12660814_360_640_60fps.mp4'
    }, {
        id: '17',
        user: {
            imageUri: 'https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Rosa Chan'
        },
        imageUri: 'https://images.pexels.com/photos/459277/pexels-photo-459277.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/27776045/12221985_360_640_24fps.mp4'
    },
    {
        id: '18',
        user: {
            imageUri: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Mara Olsen'
        },
        imageUri: 'https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/4830364/4830364-sd_506_960_25fps.mp4'
    },
    {
        id: '19',
        user: {
            imageUri: 'https://images.pexels.com/photos/4067753/pexels-photo-4067753.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Bear Boyd'
        },
        imageUri: 'https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/25537958/11902061_360_640_60fps.mp4'
    }, {
        id: '20',
        user: {
            imageUri: 'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Gia Clarke'
        },
        imageUri: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/4830314/4830314-sd_506_960_25fps.mp4'
    },
    {
        id: '21',
        user: {
            imageUri: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Uriel Tran'
        },
        imageUri: 'https://images.pexels.com/photos/845405/pexels-photo-845405.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/7205325/7205325-sd_360_640_25fps.mp4'

    },
    {
        id: '22',
        user: {
            imageUri: 'https://images.pexels.com/photos/3916455/pexels-photo-3916455.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Elle Walsh'
        },
        imageUri: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/29209658/12610309_640_360_24fps.mp4'
    },
    {
        id: '23',
        user: {
            imageUri: 'https://images.pexels.com/photos/1572878/pexels-photo-1572878.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Pierce Vega'
        },
        imageUri: 'https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/28828145/12487863_360_640_60fps.mp4'

    }, {
        id: '24',
        user: {
            imageUri: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg?auto=compress&cs=tinysrgb&w=800',
            name: 'Boston Trejo'
        },
        imageUri: 'https://images.pexels.com/photos/1039083/pexels-photo-1039083.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/20563430/20563430-sd_360_640_30fps.mp4'
    }, {
        id: '25',
        user: {
            imageUri: 'https://images.pexels.com/photos/1559193/pexels-photo-1559193.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Tate Glass'
        },
        imageUri: 'https://images.pexels.com/photos/858076/pexels-photo-858076.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/19891724/19891724-sd_360_640_30fps.mp4'
    },
    {
        id: '26',
        user: {
            imageUri: 'https://images.pexels.com/photos/17839074/pexels-photo-17839074/free-photo-of-a-woman-in-black-pants-and-a-black-top-leaning-against-a-wall.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Seth Garcia'
        },
        imageUri: 'https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/20619815/20619815-sd_360_640_29fps.mp4'
    },
    {
        id: '27',
        user: {
            imageUri: 'https://images.pexels.com/photos/17839085/pexels-photo-17839085/free-photo-of-a-woman-in-a-black-suit-and-white-sneakers-sitting-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Julien Soto'
        },
        imageUri: 'https://images.pexels.com/photos/355872/pexels-photo-355872.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/20509688/20509688-sd_360_640_30fps.mp4'
    }, {
        id: '28',
        user: {
            imageUri: 'https://images.pexels.com/photos/3460134/pexels-photo-3460134.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Wes Burns'
        },
        imageUri: 'https://images.pexels.com/photos/4937197/pexels-photo-4937197.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/27776010/12221928_360_640_24fps.mp4'
    },
    {
        id: '29',
        user: {
            imageUri: 'https://images.pexels.com/photos/32976/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
            name: 'Ainhoa Neal'
        },
        imageUri: 'https://images.pexels.com/photos/819372/pexels-photo-819372.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/20509691/20509691-sd_360_640_30fps.mp4'
    },
    {
        id: '30',
        user: {
            imageUri: 'https://images.pexels.com/photos/5199158/pexels-photo-5199158.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Lila Flores'
        },
        imageUri: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/8419963/8419963-sd_360_640_30fps.mp4'
    },
    {
        id: '31',
        user: {
            imageUri: 'https://images.pexels.com/photos/17839072/pexels-photo-17839072/free-photo-of-a-woman-in-a-suit-leaning-against-a-wall.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Lucia Reese'
        },
        imageUri: 'https://images.pexels.com/photos/722432/pexels-photo-722432.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        videoUri: 'https://videos.pexels.com/video-files/16291442/16291442-sd_360_640_30fps.mp4'
    }, {
        id: '32',
        user: {
            imageUri: 'https://images.pexels.com/photos/2691608/pexels-photo-2691608.jpeg?auto=compress&cs=tinysrgb&w=800',
            name: 'Lea Young'
        },
        imageUri: 'https://images.pexels.com/photos/22794/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
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
        },
        videoUri: 'https://marketplace.canva.com/EAFKnUkHnpg/1/document_450w/canva-pSRK3roe6pM.mp4'
    },
]

export default post