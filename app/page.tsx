import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Skills from './_components/Skills';
import ProjectList from './_components/ProjectList';
import Education from './_components/Education';
import Certificates from './_components/Certificates';

export default function Home() {
    return (
        <div className="page-home min-h-screen">
            <Banner />
            <AboutMe />
            <Skills />
            <Education />
            <Certificates />
            <ProjectList />
        </div>
    );
}
