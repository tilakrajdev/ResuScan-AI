import React from 'react'
import {Link} from 'react-router';

interface ResumeCardProps {
  resume: Resume;
}

const ResumeCard = ({ resume }: {resume:Resume}) => {
  return (
    <Link to={`/resume/${resume.id}`} className='resume-card animate-in fade-in duration-1000'>
    </Link>
  )
}

export default ResumeCard
