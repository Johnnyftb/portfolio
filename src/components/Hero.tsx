import React from 'react';
import Image from "next/image";
import HeroImage from '/public/assets/myphoto.jpg';

function Hero() {
    return (
        <div>
            <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-start text-md lg:text-lg text-light text-body text-center">
                <Image src={HeroImage} width={200} height={200} alt={"Hero Image"} className="rounded-full border border-light shadow-2xl" />
                <h1 className="text-3xl lg:text-5xl font-display text-primary mt-8">Hey, I'm John Pioc 👋🏽</h1>
                <p className="mt-4 text-xl lg:text-2xl text-white">Software Engineer | Freelancer</p>
                <p className="mt-12 w-[65ch]">I'm a Computer Science Student @ University of Queensland and aspiring Machine Learning Engineer. My studies are tailored around software engineering, mathematics & statistics.</p>
                <p className="mt-8 w-[65ch]">Outside of University I love taking on freelance work, specialising in web design and development for small & local businesses in Brisbane.</p>
            </div>
        </div>
    );
}

export default Hero;