import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';

const Root = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="max-w-[1240px] mx-auto md:min-h-[calc(100vh-100px)]">
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Root;