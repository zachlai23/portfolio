import { Stack } from 'react-bootstrap';
import React from 'react';

function AboutMe() {
    return (
        <>
        {/* Centered */}
        <h1 className="text-center">About me</h1>
        <p className="text-center">I am currently pursuing my Bachelor's degree in Computer Science at UC Irvine.</p>

        {/* Left side, with icons for school, first row is school/degree, second row in smaller font is time */}
        <Stack gap={2} className="mt4">
            <p><strong>UC Irvine</strong>: B.S. Computer Science</p>
            <p>September 2024 - June 2026</p>
            <p><strong>Las Positas/Chabot Community College</strong>: A.S. Computer Science</p>
            <p> August 2021 - June 2024</p>
        </Stack>

        {/* Vertical bar in middle */}

        {/* Right side, little cards with skills, expand when cursor is over them */}
        <Stack className="text-end" gap={2}>
            <p>Languages: C++, C, Python, Swift, JavaScript, HTML, CSS</p>
            <p>Technologies/Frameworks: scikit-learn, NumPy, pandas, React, Flask, Git</p>
        </Stack>


        </>
    );
}

export default AboutMe;