import Footer from '../../component/shared/Footer';
import Navbar from '../../component/shared/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Navbar></Navbar>
            {/* page body */}
<div className='min-h-[90vh]'>
<Outlet></Outlet>

</div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;