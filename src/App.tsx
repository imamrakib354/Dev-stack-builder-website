import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Technologies from "./components/Technologies";
import type { TechnologyType } from "./Technology";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

const technologiesPromies = async (): Promise<TechnologyType[]> => {
    const res = await fetch(
        "https://my-json-server.typicode.com/imamrakib354/dev-stack-data/technologies"
    );

    const data: TechnologyType[] = await res.json();

    return data;
};

function App() {
    return (
        <>
            <Nav />
            <Banner />

            <div className="container mx-auto px-6 py-2">
                <h1 className="inter text-[28px] font-extrabold">
                    Explore <span className="bg-[linear-gradient(90deg,#EC4899_0%,#8B5CF6_100%)] bg-clip-text text-transparent">Technologies</span>
                </h1>

                <p>
                    Pick one technology category to build your ideal stack
                </p>
            </div>

            <Suspense
                fallback={
                    <div className="container mx-auto px-8">
                        <p className="text-gray-400 text-lg text-center">
                            Technologies Stack Loading...
                        </p>
                    </div>
                }
            >
                <Technologies
                    technologiesPromies={technologiesPromies()}
                />
            </Suspense>

            <Footer />

            <ToastContainer
                position="bottom-right"
                autoClose={3000}
            />
        </>
    );
}

export default App;