import React from 'react';

export default function Admissions() {
    return (
        <div style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
            {/* Admission Process and Criteria */}
            <section style={{ marginBottom: '40px' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Admissions</h1>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h2>Admission Process</h2>
                    <p>
                        Admission forms are available for download. Submit the completed form along with required documents at the school office.
                    </p>
                    <h2>Admission Criteria</h2>
                    <p>
                        Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
                    </p>
                </div>
            </section>

            {/* Downloadable Admission Forms */}
            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Downloadable Admission Forms</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <p>Download the admission forms below and follow the instructions to complete your application:</p>
                    <ul>
                        <li><a href="/path-to-form/form.pdf" download style={{ color: '#007bff', textDecoration: 'none' }}>Application Form (PDF)</a></li>
                        <li><a href="/path-to-form/form.docx" download style={{ color: '#007bff', textDecoration: 'none' }}>Application Form (DOCX)</a></li>
                    </ul>
                </div>
            </section>

            {/* Important Dates and Deadlines */}
            <section>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Important Dates and Deadlines</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <ul>
                        <li><strong>Admission Form Availability : </strong> March 1st</li>
                        <li><strong>Last Date for Submission : </strong> March 31st</li>
                        <li><strong>Entrance Test :</strong> April 15th</li>
                        <li><strong>Announcement of Results : </strong> April 30th</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
