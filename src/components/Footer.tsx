import Logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className="container mx-auto px-6 py-16">
            
            <div className="flex justify-between items-start">

                <div className="max-w-sm">

                    <img
                        className="mb-4"
                        src={Logo}
                        alt="Dev Stack"
                    />

                    <p className="text-gray-500">
                        Curated tools, technologies, and resources for
                        developers building modern software.
                    </p>

                    <ul className="flex gap-4 mt-6">
                        <li className="font-semibold">GitHub</li>
                        <li className="font-semibold">Twitter</li>
                        <li className="font-semibold">LinkedIn</li>
                    </ul>

                </div>

                <div className='hidden lg:block'>
                    <h3 className="font-bold mb-4">
                        PRODUCT
                    </h3>

                    <ul className="space-y-2 text-gray-500">
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                    </ul>
                </div>

                <div className='hidden lg:block'>
                    <h3 className="font-bold mb-4">
                        COMPANY
                    </h3>

                    <ul className="space-y-2 text-gray-500">
                        <li>About</li>
                        <li>Contact</li>
                        <li>Careers</li>
                    </ul>
                </div>

                <div className='hidden lg:block'>
                    <h3 className="font-bold mb-4">
                        LEGAL
                    </h3>

                    <ul className="space-y-2 text-gray-500">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>

            </div>

            <div className="border-t border-gray-200 mt-12 pt-6 flex justify-between">

                <p className="text-gray-400 text-[14px] lg:text-[16px]">
                    © 2026 Dev Stack. All rights reserved.
                </p>

                <div className="flex gap-6 text-gray-400 text-[14px] lg:text-[16px]">
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>

            </div>

        </footer>
    );
};

export default Footer;