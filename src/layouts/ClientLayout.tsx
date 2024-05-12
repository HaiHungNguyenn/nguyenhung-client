import { Outlet } from 'react-router-dom';
import Header from '@/components/Header'
import Footer from '@/components/Footer';

function ClientLayout(){
    return (
        <div className='flex flex-col h-screen justify-between'>
        <Header className='fixed w-screen z-10'/>
        <Outlet />
        <Footer className=''/>
        </div>
    )
}
export default ClientLayout;