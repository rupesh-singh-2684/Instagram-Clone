const post1 =
[
    {
      id: 1,
      user: {
        imageUri: "https://images.pexels.com/photos/1003792/pexels-photo-1003792.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Olivia Green"
      },
      imageUri: "https://images.pexels.com/photos/3831862/pexels-photo-3831862.jpeg?auto=compress&cs=tinysrgb&w=800",
      captions: "🌾🌿",
      likeCounts: '1.12k',
      postedAt: "25 minutes ago",
      comments: 
        {
          user: {
            icon: "https://images.pexels.com/photos/6579791/pexels-photo-6579791.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Emily",
            comments: "So peaceful!",
            time: "4h"
          }
        }
      ,
      videoUri: "https://videos.pexels.com/video-files/6831465/6831465-sd_360_640_25fps.mp4"
    },
    {
      id: 2,
      user: {
        imageUri: "https://images.pexels.com/photos/22776161/pexels-photo-22776161/free-photo-of-a-man-in-a-polo-shirt-and-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Lucas Hart"
      },
      imageUri: "https://images.pexels.com/photos/26926241/pexels-photo-26926241/free-photo-of-bird-of-prey-on-post-with-building-silhouette-behind.jpeg?auto=compress&cs=tinysrgb&w=800",
      captions: "🍃🌳",
      likeCounts: '9.8k',
      postedAt: "1 hour ago",
      comments: 
        {
          user: {
            icon: "https://images.pexels.com/photos/4028104/pexels-photo-4028104.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Ava",
            comments: "Breathtaking view!",
            time: "2h"
          }
        }
      ,
      videoUri: "https://videos.pexels.com/video-files/7206546/7206546-sd_360_640_25fps.mp4"
    },
    {
      id: 3,
      user: {
        imageUri: "https://images.pexels.com/photos/1003582/pexels-photo-1003582.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Ethan Brooks"
      },
      imageUri: "https://images.pexels.com/photos/2497438/pexels-photo-2497438.jpeg?auto=compress&cs=tinysrgb&w=800",
      captions: "🌅☀️",
      likeCounts: '7.6k',
      postedAt: "15 minutes ago",
      comments: 
        {
          user: {
            icon: "https://images.pexels.com/photos/6224126/pexels-photo-6224126.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Mia",
            comments: "The sunset is magical!",
            time: "5h"
          }
        }
      ,
      videoUri: "https://videos.pexels.com/video-files/7677191/7677191-sd_360_640_25fps.mp4"
    },
    {
      id: 4,
      user: {
        imageUri: "https://images.pexels.com/photos/18556807/pexels-photo-18556807/free-photo-of-dance-of-light-and-shadow.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Zoe Taylor"
      },
      imageUri: "https://images.pexels.com/photos/1970139/pexels-photo-1970139.jpeg?auto=compress&cs=tinysrgb&w=800",
      captions: "🌷🌺",
      likeCounts: '1.34k',
      postedAt: "40 minutes ago",
      comments: 
        {
          user: {
            icon: "https://images.pexels.com/photos/4106493/pexels-photo-4106493.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Olivia",
            comments: "Love the flowers!",
            time: "1h"
          }
        }
      ,
      videoUri: "https://videos.pexels.com/video-files/26964693/12037611_360_640_30fps.mp4"
    },
    {
      id: 5,
      user: {
        imageUri: "https://images.pexels.com/photos/5217850/pexels-photo-5217850.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Liam Clark"
      },
      imageUri: "https://images.pexels.com/photos/2882187/pexels-photo-2882187.jpeg?auto=compress&cs=tinysrgb&w=800",
      captions: "🌊🌅",
      likeCounts: '8k',
      postedAt: "2 hours ago",
      comments: 
        {
          user: {
            icon: "https://images.pexels.com/photos/12005/pexels-photo-12005.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Ella",
            comments: "The ocean looks serene.",
            time: "3h"
          }
        }
      ,
      videoUri: "https://videos.pexels.com/video-files/28637697/12437687_360_640_30fps.mp4"
    },
    {
      id: 6,
      user: {
        imageUri: "https://images.pexels.com/photos/3769737/pexels-photo-3769737.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Sophia Carter"
      },
      imageUri: "https://images.pexels.com/photos/2532003/pexels-photo-2532003.jpeg?auto=compress&cs=tinysrgb&w=800",
      captions: "🏞️🌄",
      likeCounts: '11.50k',
      postedAt: "3 hours ago",
      comments: 
        {
          user: {
            icon: "https://images.pexels.com/photos/4041497/pexels-photo-4041497.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Aiden",
            comments: "Such a beautiful view!",
            time: "2h"
          }
        }
      ,
      videoUri: "https://videos.pexels.com/video-files/26964355/12037349_360_640_30fps.mp4"
    },
    {
      id: 7,
      user: {
        imageUri: "https://images.pexels.com/photos/3787577/pexels-photo-3787577.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Isaac Freeman"
      },
      imageUri: "https://images.pexels.com/photos/5642024/pexels-photo-5642024.jpeg?auto=compress&cs=tinysrgb&w=800",
      captions: "🍂🍁",
      likeCounts: '9.50k',
      postedAt: "10 minutes ago",
      comments: 
        {
          user: {
            icon: "https://images.pexels.com/photos/3040140/pexels-photo-3040140.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Grace",
            comments: "Such lovely autumn colors!",
            time: "30m"
          }
        }
      ,
      videoUri: "https://videos.pexels.com/video-files/26964356/12037325_360_640_30fps.mp4"
    },
    {
      id: 8,
      user: {
        imageUri: "https://images.pexels.com/photos/4111683/pexels-photo-4111683.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Lucas Moore"
      },
      imageUri: "https://images.pexels.com/photos/2317952/pexels-photo-2317952.jpeg?auto=compress&cs=tinysrgb&w=800",
      captions: "🌈🌥️",
      likeCounts: '13.20k',
      postedAt: "55 minutes ago",
      comments: 
        {
          user: {
            icon: "https://images.pexels.com/photos/1443106/pexels-photo-1443106.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Charlotte",
            comments: "The rainbow is stunning!",
            time: "15m"
          }
        }
      ,
      videoUri: "https://videos.pexels.com/video-files/25460397/11901553_360_640_30fps.mp4"
    },
    {
      id: 9,
      user: {
        imageUri: "https://images.pexels.com/photos/6237360/pexels-photo-6237360.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Mason Johnson"
      },
      imageUri: "https://images.pexels.com/photos/1695455/pexels-photo-1695455.jpeg?auto=compress&cs=tinysrgb&w=800",
      captions: "🍍🍉",
      likeCounts: '11k',
      postedAt: "1 hour ago",
      comments: 
        {
          user: {
            icon: "https://images.pexels.com/photos/6502615/pexels-photo-6502615.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Lily",
            comments: "The fruits look so fresh!",
            time: "20m"
          }
        }
      ,
      videoUri: "https://videos.pexels.com/video-files/7234039/7234039-sd_360_640_30fps.mp4"
    },
    {
      id: 10,
      user: {
        imageUri: "https://images.pexels.com/photos/4855102/pexels-photo-4855102.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Lila Flores"
      },
      imageUri: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800",
      captions: "🌵🌵",
      likeCounts: '5.43k',
      postedAt: "6 minutes ago",
      comments: 
        {
          user: {
            icon: "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Ishita",
            comments: "Nice",
            time: "3h"
          }
        }
      ,
      videoUri: "https://videos.pexels.com/video-files/8419963/8419963-sd_360_640_30fps.mp4"
    },{
      id: 1,
      user: {
        imageUri: "https://images.pexels.com/photos/1003792/pexels-photo-1003792.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Olivia Green"
      },
      imageUri: "https://images.pexels.com/photos/3831862/pexels-photo-3831862.jpeg?auto=compress&cs=tinysrgb&w=800",
      captions: "🌾🌿",
      likeCounts: '1.12k',
      postedAt: "25 minutes ago",
      comments: 
        {
          user: {
            icon: "https://images.pexels.com/photos/6579791/pexels-photo-6579791.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Emily",
            comments: "So peaceful!",
            time: "4h"
          }
        }
      ,
      videoUri: "https://videos.pexels.com/video-files/6831465/6831465-sd_360_640_25fps.mp4"
    },
    {
      id: 2,
      user: {
        imageUri: "https://images.pexels.com/photos/22776161/pexels-photo-22776161/free-photo-of-a-man-in-a-polo-shirt-and-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Lucas Hart"
      },
      imageUri: "https://images.pexels.com/photos/26926241/pexels-photo-26926241/free-photo-of-bird-of-prey-on-post-with-building-silhouette-behind.jpeg?auto=compress&cs=tinysrgb&w=800",
      captions: "🍃🌳",
      likeCounts: '9.8k',
      postedAt: "1 hour ago",
      comments: 
        {
          user: {
            icon: "https://images.pexels.com/photos/4028104/pexels-photo-4028104.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Ava",
            comments: "Breathtaking view!",
            time: "2h"
          }
        }
      ,
      videoUri: "https://videos.pexels.com/video-files/7206546/7206546-sd_360_640_25fps.mp4"
    },
    {
      id: 3,
      user: {
        imageUri: "https://images.pexels.com/photos/1003582/pexels-photo-1003582.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Ethan Brooks"
      },
      imageUri: "https://images.pexels.com/photos/2497438/pexels-photo-2497438.jpeg?auto=compress&cs=tinysrgb&w=800",
      captions: "🌅☀️",
      likeCounts: '7.6k',
      postedAt: "15 minutes ago",
      comments: 
        {
          user: {
            icon: "https://images.pexels.com/photos/6224126/pexels-photo-6224126.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Mia",
            comments: "The sunset is magical!",
            time: "5h"
          }
        }
      ,
      videoUri: "https://videos.pexels.com/video-files/7677191/7677191-sd_360_640_25fps.mp4"
    },
    {
      id: 4,
      user: {
        imageUri: "https://images.pexels.com/photos/18556807/pexels-photo-18556807/free-photo-of-dance-of-light-and-shadow.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Zoe Taylor"
      },
      imageUri: "https://images.pexels.com/photos/1970139/pexels-photo-1970139.jpeg?auto=compress&cs=tinysrgb&w=800",
      captions: "🌷🌺",
      likeCounts: '1.34k',
      postedAt: "40 minutes ago",
      comments: 
        {
          user: {
            icon: "https://images.pexels.com/photos/4106493/pexels-photo-4106493.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Olivia",
            comments: "Love the flowers!",
            time: "1h"
          }
        }
      ,
      videoUri: "https://videos.pexels.com/video-files/26964693/12037611_360_640_30fps.mp4"
    },
    {
      id: 5,
      user: {
        imageUri: "https://images.pexels.com/photos/5217850/pexels-photo-5217850.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Liam Clark"
      },
      imageUri: "https://images.pexels.com/photos/2882187/pexels-photo-2882187.jpeg?auto=compress&cs=tinysrgb&w=800",
      captions: "🌊🌅",
      likeCounts: '8k',
      postedAt: "2 hours ago",
      comments: 
        {
          user: {
            icon: "https://images.pexels.com/photos/12005/pexels-photo-12005.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Ella",
            comments: "The ocean looks serene.",
            time: "3h"
          }
        }
      ,
      videoUri: "https://videos.pexels.com/video-files/28637697/12437687_360_640_30fps.mp4"
    },
    {
      id: 6,
      user: {
        imageUri: "https://images.pexels.com/photos/3769737/pexels-photo-3769737.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Sophia Carter"
      },
      imageUri: "https://images.pexels.com/photos/2532003/pexels-photo-2532003.jpeg?auto=compress&cs=tinysrgb&w=800",
      captions: "🏞️🌄",
      likeCounts: '11.50k',
      postedAt: "3 hours ago",
      comments: 
        {
          user: {
            icon: "https://images.pexels.com/photos/4041497/pexels-photo-4041497.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Aiden",
            comments: "Such a beautiful view!",
            time: "2h"
          }
        }
      ,
      videoUri: "https://videos.pexels.com/video-files/26964355/12037349_360_640_30fps.mp4"
    },
    {
      id: 7,
      user: {
        imageUri: "https://images.pexels.com/photos/3787577/pexels-photo-3787577.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Isaac Freeman"
      },
      imageUri: "https://images.pexels.com/photos/5642024/pexels-photo-5642024.jpeg?auto=compress&cs=tinysrgb&w=800",
      captions: "🍂🍁",
      likeCounts: '9.50k',
      postedAt: "10 minutes ago",
      comments: 
        {
          user: {
            icon: "https://images.pexels.com/photos/3040140/pexels-photo-3040140.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Grace",
            comments: "Such lovely autumn colors!",
            time: "30m"
          }
        }
      ,
      videoUri: "https://videos.pexels.com/video-files/26964356/12037325_360_640_30fps.mp4"
    },
    {
      id: 8,
      user: {
        imageUri: "https://images.pexels.com/photos/4111683/pexels-photo-4111683.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Lucas Moore"
      },
      imageUri: "https://images.pexels.com/photos/2317952/pexels-photo-2317952.jpeg?auto=compress&cs=tinysrgb&w=800",
      captions: "🌈🌥️",
      likeCounts: '13.20k',
      postedAt: "55 minutes ago",
      comments: 
        {
          user: {
            icon: "https://images.pexels.com/photos/1443106/pexels-photo-1443106.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Charlotte",
            comments: "The rainbow is stunning!",
            time: "15m"
          }
        }
      ,
      videoUri: "https://videos.pexels.com/video-files/25460397/11901553_360_640_30fps.mp4"
    },
    {
      id: 9,
      user: {
        imageUri: "https://images.pexels.com/photos/6237360/pexels-photo-6237360.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Mason Johnson"
      },
      imageUri: "https://images.pexels.com/photos/1695455/pexels-photo-1695455.jpeg?auto=compress&cs=tinysrgb&w=800",
      captions: "🍍🍉",
      likeCounts: '11k',
      postedAt: "1 hour ago",
      comments: 
        {
          user: {
            icon: "https://images.pexels.com/photos/6502615/pexels-photo-6502615.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Lily",
            comments: "The fruits look so fresh!",
            time: "20m"
          }
        }
      ,
      videoUri: "https://videos.pexels.com/video-files/7234039/7234039-sd_360_640_30fps.mp4"
    },
    {
      id: 10,
      user: {
        imageUri: "https://images.pexels.com/photos/4855102/pexels-photo-4855102.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Lila Flores"
      },
      imageUri: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800",
      captions: "🌵🌵",
      likeCounts: '5.43k',
      postedAt: "6 minutes ago",
      comments: 
        {
          user: {
            icon: "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Ishita",
            comments: "Nice",
            time: "3h"
          }
        }
      ,
      videoUri: "https://videos.pexels.com/video-files/8419963/8419963-sd_360_640_30fps.mp4"
    }
  ]

  export default post1