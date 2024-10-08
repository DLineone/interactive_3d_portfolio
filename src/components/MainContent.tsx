
import ContactSection from './ContactSection';
export default function MainContent() {
    return (
        <div className="h-full w-full flex flex-col gap-4 p-4">
            <h1 className='text-4xl font-mono font-extrabold'>Interactive 3D Portfolio</h1>
            <p className='text-justify'>This project showcases my skills in building dynamic, interactive web experiences using Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP, and AR.js. It features animations, 3D interactions, and augmented reality, all deployed in a live demo to highlight my abilities in creating immersive, modern web applications.</p>
            <div className='w-full aspect-square bg-slate-300 rounded-md flex justify-center items-center'>
                <p>3d staf</p>
            </div>
            <ContactSection></ContactSection>
        </div>
    )
}