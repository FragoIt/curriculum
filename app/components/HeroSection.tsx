'use client';

import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<div className="text-center">
				<div className="mb-6 sm:mb-8">
					<div className="relative w-32 h-32 mx-auto">
						<Image 
							src="/mf_me.jpeg" 
							alt="Profile Picture" 
							fill 
							className="rounded-full object-cover object-[0_25%] border-4 border-gray-700 shadow-lg" 
						/>
					</div>
				</div>
				<h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Santiago Fragozo Sepúlveda</h1>
				<p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">Software developer</p>
				<p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
We create high-quality web experiences that transform website visitors into leads, generating appointments, inquiries, and sales. We focus on developing memorable digital solutions for complex problems.				</p>
			</div>
		</section>
	);
}
