import { Link } from "react-router-dom"
import Logo from "../Logo"
import { cn } from "@/lib/utils"

interface NavItem{
    path: string
    text: string
}
interface HeaderProps{
    className: string
}
const leftNavItems: NavItem[] = [
    {
        path:"/",
        text:"Trang chủ"
    },
    {
        path:"/about",
        text:"Giới thiệu"
    },
    {
        path:"",
        text:"Sản phẩm"
    },
]
const rightNavItems: NavItem[] = [
    {
        path:"",
        text:"Công thức"
    },
    {
        path:"",
        text:"Blog"
    },
    {
        path:"",
        text:"Liên hệ"
    },
]
function Header ({className} : HeaderProps){
    return (
        <header className={cn("bg-transparent hover:bg-white hover:bg-opacity-80 flex justify-center gap-16 items-center relative ",className)}>
            <nav className="w-[600px]">
                <menu className="flex justify-end items-center gap-16 text-3xl font-semibold text-secondary">
                    {
                        leftNavItems.map((item,idx) => (
                            <li key={idx} className="hover:text-accent hover:cursor-pointer transition-colors duration-300 hover:underline underline-offset-8 decoration-primary">
                                <Link to={item.path}>{item.text}</Link>
                            </li>    

                        ))
                    }
                </menu>    
            </nav> 
            <Logo width={216} height={156}/>
            <nav className="w-[600px]">
                <menu className="flex justify-start items-center gap-16 text-3xl font-semibold text-secondary">
                {
                        rightNavItems.map((item,idx) => (
                            <li key={idx} className="hover:text-accent hover:cursor-pointer transition-colors duration-300 hover:underline underline-offset-8 decoration-primary">
                                <Link to={item.path}>{item.text}</Link>
                            </li>    

                        ))
                    }
                </menu>    
            </nav> 
            <div className="absolute top-50% right-24 text-3xl flex items-center gap-2 text-accent ">
                <p>VN</p>
                <div className="w-[3px] h-[24px] bg-primary "></div>
                <p>EN</p>
            </div>
        </header>
        
    )
}
export default Header