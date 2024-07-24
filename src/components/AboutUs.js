import React from 'react';

export default function AboutUs() {
    return (
        <div style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
            {/* School History, Vision, Mission, and Values */}
            <section style={{ marginBottom: '40px' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>About S.S.S.S Senior Secondary School</h1>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h2>Our History</h2>
                    <p>
                        Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students
                    </p>
                    <h2>Vision</h2>
                    <p>
                        To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
                    </p>
                    <h2>Mission</h2>
                    <p>
                        To empower students with the knowledge, skills, and values needed to thrive in a dynamic world
                    </p>
                </div>
            </section>

            {/* Message from the Principal */}
            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Message from the Principal</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s"
                        alt="Principal"
                        style={{ borderRadius: '50%', width: '150px', height: '150px', float: 'left', marginRight: '20px' }}
                    />
                    <p>
                        Dear Parents, Students, and Staff,
                    </p>
                    <p>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
                    <p>
                        Sincerely
                    </p>
                    <p>
                        N.K
                    </p>
                </div>
            </section>

            {/* Infrastructure and Facilities */}
            <section>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Infrastructure and Facilities</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h3>Infrastructure and Facilities</h3>
                    <ul>
                        <li>State-of-the-art science and computer labs</li>
                        <li>Spacious and well-equipped classrooms</li>
                        <li>Library with a vast collection of books and digital resources</li>
                        <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
