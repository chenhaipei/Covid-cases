import React from "react";
import AllRegions from "../components/AllRegions";

const Dashboard = () => {
    return (
        <div className='mx-auto font-source-sans bg-lavender2'>
            <section id='regional-data' className='bg-lavender2'>
                <div className='px-10  mx-auto'>
                    <AllRegions/>
                </div>
            </section>
        </div>
    );
};
export default Dashboard;
