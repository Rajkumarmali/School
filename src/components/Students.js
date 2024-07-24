import React from 'react';

const extracurricularActivities = [
    { name: "Music" }, { name: "Dance" }, { name: "Drama" }, { name: "Art" }, { name: "Sports" }, { name: "Robotics" }, { name: "Debate Club" }, { name: "Science Club" }
];

const club_societies = [{ name: "Literary Society" }, { name: "Environmental Club" }, { name: "Astronomy Club" }, { name: "Coding Club" }]

const achievements = [
    {
        title: 'National Level Math Olympiad Winner',
        name: 'John Smith',
    },
    {
        title: 'Gold Medalist in State Swimming Championship',
        name: 'Sarah Lee',
    },
    {
        title: 'Winners of Inter-School Robotics Competition',
        name: 'Tech Innovators Club ',
    },
];

const studentCouncil = [
    { position: 'President', name: 'Amy Parker', grade: '12' },
    { position: 'Vice President', name: 'Rajiv Mehta', grade: '11' },
    { position: 'Secretary', name: 'Lisa Wong', grade: '10' },
];

export default function Students() {
    return (
        <div style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
            {/* Student Life Overview */}
            <section style={{ marginBottom: '40px' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Life at Springdale</h1>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <p style={{ fontSize: '1.2rem', color: '#666' }}>
                        At Springdale Public School, we offer a vibrant and engaging student life experience. Students are encouraged to participate in a variety of extracurricular activities that foster personal growth and help develop essential skills.
                    </p>
                </div>
            </section>

            {/* Extracurricular Activities */}
            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Extracurricular Activities:</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <ul>
                        {extracurricularActivities.map((activity, index) => (
                            <li key={index} style={{ marginBottom: '15px' }}>
                                <h3 style={{ fontSize: '1.5rem', color: '#333' }}>{activity.name}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>


            {/* Clubs and Societies */}
            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Clubs and Societies:</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <ul>
                        {club_societies.map((activity, index) => (
                            <li key={index} style={{ marginBottom: '15px' }}>
                                <h3 style={{ fontSize: '1.5rem', color: '#333' }}>{activity.name}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Achievements */}
            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Achievements</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f9f9f9' }}>
                                <th style={{ padding: '10px', borderBottom: '2px solid #ddd', textAlign: 'left' }}>Achievement Title</th>
                                <th style={{ padding: '10px', borderBottom: '2px solid #ddd', textAlign: 'left' }}>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {achievements.map((achievement, index) => (
                                <tr key={index}>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{achievement.title}</td>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{achievement.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Student Council*/}
            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Student Council</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f9f9f9' }}>
                                <th style={{ padding: '10px', borderBottom: '2px solid #ddd', textAlign: 'left' }}>Position</th>
                                <th style={{ padding: '10px', borderBottom: '2px solid #ddd', textAlign: 'left' }}>Name</th>
                                <th style={{ padding: '10px', borderBottom: '2px solid #ddd', textAlign: 'left' }}>Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentCouncil.map((member, index) => (
                                <tr key={index}>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{member.position}</td>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{member.name}</td>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{member.grade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

        </div>
    );
}
