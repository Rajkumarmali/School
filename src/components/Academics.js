import React from 'react';

export default function Academics() {
    return (
        <div style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>


            {/* Subjects Taught */}
            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Subjects Offered</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h3>Primary Level</h3>
                    <ul>
                        <li>English</li>
                        <li>Mathematics</li>
                        <li>Science</li>
                        <li>Social Studies</li>
                        <li>Art</li>
                        <li>Physical Education</li>
                    </ul>
                    <h3>Secondary Level</h3>
                    <ul>
                        <li>English</li>
                        <li>Mathematics</li>
                        <li>Science</li>
                        <li>Social Studies</li>
                        <li>Art</li>
                        <li>Computer Science</li>
                        <li>Physical Education</li>
                    </ul>
                    <h3>Senior Secondary Level</h3>
                    <h4>Science Stream : </h4>
                    <ul>
                        <li>Physics</li>
                        <li>Chemistry</li>
                        <li>Biology</li>
                        <li>Mathematics</li>
                        <li>Computer Science</li>
                        <li>English</li>
                    </ul>
                    <h4>Commerce Stream:</h4>
                    <ul>
                        <li>Accountancy</li>
                        <li>Business Studies</li>
                        <li>Economics</li>
                        <li>Mathematics</li>
                        <li>English</li>
                    </ul>
                </div>
            </section>

            {/* Teaching Methodologies and Educational Resources */}
            <section>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Teaching Methodologies and Educational Resources</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h3>Teaching Methodologies</h3>
                    <p>
                        We use a blend of traditional and modern teaching techniques to cater to different learning styles.
                    </p>
                    <h3>Educational Resources</h3>
                    <p>
                        Digital classrooms, interactive learning modules, and access to online educational platforms
                    </p>

                </div>
            </section>
        </div>
    );
}
