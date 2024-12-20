import React from 'react';
import './BlogSection.css';

const blogs = [
    { title: 'Top 10 Places to Visit in Morocco', image: 'https://mustvisitmorocco.com/wp-content/uploads/2023/03/Secret-Places-to-Visit-in-Morocco.jpg', link: '#' },

    { title: 'Top 10 Places to Visit in Morocco', image: 'https://mustvisitmorocco.com/wp-content/uploads/2023/03/Secret-Places-to-Visit-in-Morocco.jpg', link: '#' },
    { title: 'Best Time to Travel to the Sahara', image: 'https://thedesertsafari.com/wp-content/uploads/2023/04/weather-in-Dubai-1024x536.webp', link: '#' },
    { title: 'Cultural Highlights of Fes', image: 'https://www.moroccoworldnews.com/wp-content/uploads/2024/01/tripadvisor-ranks-fez-as-4th-best-cultural-destination-for-tourism-in-2024-800x450.jpeg', link: '#' },
    
];

const BlogSection = () => (
    <div className="blog-section">
        
        <h1 class="centered-title">Travel Blogs</h1>

        <div className="blog-list">
            {blogs.map((blog, index) => (
                <div key={index} className="blog-card">
                    <img src={blog.image} alt={blog.title} />
                    <h3>{blog.title}</h3>
                    <a href={blog.link} className="read-more">Read More</a>
                </div>
            ))}
        </div>
    </div>
);

export default BlogSection;
