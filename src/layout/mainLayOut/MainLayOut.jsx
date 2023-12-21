import Navbar from '../../component/shared/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Navbar></Navbar>
            {/* page body */}
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;