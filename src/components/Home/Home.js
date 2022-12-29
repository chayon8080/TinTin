import React from 'react';
import Post from '../../components/Posts/Post';
const posts = [
    {
        "id": 1,
        "img": "https://sgp1.digitaloceanspaces.com/cosmosgroup/video_album/4416084_jpeg.webp",
        "title": "News",
        "body": "I am posting todays news"
    },
    {
        "id": 2,
        "img": "https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/19/6f540cf4259192e24c1d728709ed5d60a5036.jpg?impolicy=abp_cdn&imwidth=650",
        "title": "Sports",
        "body": "Argentina win fifa world cup 2022"
    },
    {
        "id": 3,
        "img": "https://i.ytimg.com/vi/Dxti80nQRIQ/maxresdefault.jpg",
        "title": "Education",
        "body": "My final examination result pulblish today"
    },
    {
        "id": 4,
        "img": "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/02/bodyHappenFever-1006577818-770x553-650x428.jpg",
        "title": "Health",
        "body": "I am suffering from fever"
    }]
const Home = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 overflow-hidden mt-5 justify-items-center'>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Home;