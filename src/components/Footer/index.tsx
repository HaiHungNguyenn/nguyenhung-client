import { cn } from "@/lib/utils"
import FooterImage from "/Footer/footer-banner.png"
import GoogleMap from "../GoogleMap"

interface FooterProps{
    className?: string
}
function Footer({className}:FooterProps){
    return(
        <footer  className={cn("relative",className)}>
            <div className="w-full h-[375px] absolute -z-10">
                <img className="h-full w-full object-cover" src={FooterImage} alt="" />
            </div>
            <div className="grid grid-cols-3 px-32 pt-12">
                <div>
                    <h3 className="text-3xl font-bold text-accent mb-9">ĐỊA CHỈ</h3>
                    <p className="text-2xl text-background">
                        Xuân Hải, Tx.Sông Cầu,
                    </p>
                    <p className="text-2xl text-background">
                    Phú Yên, Việt Nam
                    </p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-accent mb-9">MAP</h3>
                    <GoogleMap/>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-accent mb-9">LIÊN HỆ</h3>
                    <p className="text-2xl text-background">
                        nguyenhungseafood@yahoo.com
                    </p>
                    <p className="text-2xl text-background">
                        0855 117 711 - 0257 2472 777
                    </p>
                </div>
            </div>
            <p className="text-center text-background text-xl mt-10">Copyright NguyenHung. All Rights Reserved.</p>
        </footer>
    )
}
export default Footer