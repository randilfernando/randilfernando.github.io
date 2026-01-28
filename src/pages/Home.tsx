import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ContactCTA from '../components/ContactCTA';
import { Profile, Post } from '../types';

const Home: React.FC = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch('/profile.json')
            .then(res => res.json())
            .then(data => {
                setProfile(data);
                document.title = `${data.name} - ${data.headline}`;
            })
            .catch(err => console.error('Error fetching profile:', err));

        fetch('/posts.json')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.error('Error fetching posts:', err));
    }, []);

    if (!profile) return null; // Or a loading spinner

    return (
        <>
            <Hero profile={profile} />
            <Services services={profile.services} />

            {/* Writing Section */}
            <section id="blog" className="section container text-center">
                <h2 className="section-title">Writing</h2>

                {/* Reusing BlogList just for grid, passing false to showViewAll since we handle it above */}
                <div className="grid-3">
                    {posts.slice(0, 3).map(post => (
                        <article key={post.id} className="post-card">
                            <div className="post-image" style={{ backgroundImage: `url('${post.image}')` }}></div>
                            <div className="post-content">
                                <span className="post-area">{post.area}</span>
                                <h3>{post.name}</h3>
                                <p>{post.summary}</p>
                                <a href={post.link} className="read-more">Read Article →</a>
                            </div>
                        </article>
                    ))}
                </div>

                <div style={{ marginTop: '3rem' }}>
                    <a href="https://medium.com/@randilfernando" target="_blank" rel="noopener noreferrer" className="view-all">Read more on Medium →</a>
                </div>
            </section>

            <ContactCTA email={profile.email} />
        </>
    );
};

export default Home;
