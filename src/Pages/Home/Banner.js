import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://img.freepik.com/free-vector/female-student-listening-webinar-online_74855-6461.jpg?w=740&t=st=1660960460~exp=1660961060~hmac=12ef1a86bca88afb9915aa07ca0128086b25e0dd96dd57563a7bfcdbf235537d" alt='' class="max-w-sm rounded-lg" />
                <div>
                    <h1 class="text-5xl font-bold">Welcome to Online School</h1>
                    <p class="py-6">The best online platform to learn tech skills.</p>
                    <Link to='/register' className='btn'>Join Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;