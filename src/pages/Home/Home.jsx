import React from 'react';
import Banner from '../../component/home/banner/Banner';
import WhichUse from '../../component/home/WhichUse/WhichUse';

const Home = () => {
    return (
        <div>
            {/* banner section */}
            <Banner></Banner>
            {/* which uses */}
            <WhichUse></WhichUse>
        </div>
    );
};

export default Home;