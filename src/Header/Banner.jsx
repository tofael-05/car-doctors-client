import banner from '../assets/images/banner/5.jpg'
const Banner = () => {
    return (
        <div>
            <div>
                <div className="relative before:content-[''] before:absolute before:bg-[#000000a1] before:top-0 before:right-0 before:left-0 before:bottom-0">
                    <img className="w-full h-[720px] rounded-md" src={banner} alt="" />
                </div>
                <div className="absolute top-60 text-white left-[450px]">
                    <h1 className="text-7xl font-extrabold my-5">Affordable <br /> Price For Car <br /> Servicing</h1>
                    <p className="my-10">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className="flex gap-4 font-semibold">
                        <button className="bg-red-600 p-3 rounded-md">Discover More</button>
                        <button className="border p-3 rounded-md">Latest Project</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;