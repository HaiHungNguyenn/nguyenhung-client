import { useParams } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import TunaFishImage from '/Fish/tuna.png';
import EyeImage from '/Fish/eye.png'


import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const textStyle: React.CSSProperties = {
    WebkitTextStroke: '1px black'
};

interface Benefit {
    title: string,
    description: string
}
interface Nutrient {
    name: string,
    weight: number,
    portion: number
}
interface Details {
    subIngredients: string[],
    nutrients: Nutrient[],
    benefits: Benefit[]
}

interface Product {
    id: string,
    name: string,
    description: string,
    details: Details,
    image: string

}

const tuna: Product = {
    id: "1",
    name: "Cá Ngừ Xé",
    description: "Cá ngừ đóng hộp được làm từ thịt của những chú cá ngừ tươi ngon nên giữ trọn được thành phần dinh dưỡng có trong con cá, chẳng hạn như: chất béo, omega 3, vitamin B12, vitamin B6, magie, selen, phốt pho, DHA, protein, đây đều là những thành phần dinh dưỡng rất cần thiết và tốt cho sức khỏe con người.",
    details: {
        subIngredients: ["Dầu", "Sua chua", "Dầu"],
        nutrients: [
            { name: "Chất đạm", weight: 3, portion: 10 },
            { name: "Chất béo", weight: 3, portion: 10 },
            { name: "Chất béo", weight: 30, portion: 200 },
        ],
        benefits: [
            {
                title: "Tốt Cho Mắt",
                description: "Cá ngừ có chứa nhiều DHA đây là thành phần chính của dây thần kinh não, cụ thể hơn là võng mạc của mắt."
            },
            {
                title: "Tốt Cho Tim",
                description: "Cá ngừ chứa lượng omega 3 dồi dào thành phần giúp ngăn ngừa tổn thương mạch máu giúp phòng ngừa bệnh tim và đột quỵ."
            },
            {
                title: "Giảm Nguy Cơ Ung Thư",
                description: "Cá ngừ có chứa selenium, chất có nhiệm vụ chống hình thành các gốc tự do, giảm nguy cơ mắc bệnh ung thư."
            }
        ]
    },
    image: TunaFishImage
};


function ProductDetail() {

    const { id } = useParams();


    return (
        <main className="mt-40 px-36    ">
            <Breadcrumb >
                <BreadcrumbList className="text-xl">
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/products">Sản phẩm</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/products">Cá Ngừ</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Cá Ngừ Xé</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-secondary text-3xl font-bold my-6 tracking-wider ">{tuna.name}</h1>
            <div className="flex flex-row h-fit">
                <div className="w-1/3  px-10 flex flex-col justify-start items-center gap-10">
                    <div className="w-full  h-64 bg-primary ">
                        <img src="" alt="" />
                    </div>
                    <button className="py-4 w-1/2 border-2 border-primary bg-background font-semibold text-2xl hover:bg-accent hover:text-background">MUA</button>
                </div>
                <div className="w-2/3 h-fit pl-5 ">
                    <div className="flex flex-row items-center gap-5">
                        <h1 className="text-5xl text-accent font-bold" style={textStyle}>{tuna.name}</h1>
                        <HiOutlineChevronLeft className=" text-5xl text-primary opacity-50  border-2 border-primary rounded-full" />
                        <HiOutlineChevronRight className="text-5xl text-primary hover:bg-accent border-2 border-primary rounded-full hover:cursor-pointer" />
                    </div>
                    <div className="mt-5">
                        <h1 className="text-xl tracking-wider">
                            {tuna.description}
                        </h1>
                    </div>

                    <div className="w-full h-fit bg-[#71A0B5] mt-12 ">
                        <div className="flex flex-row py-8 w-full h-fit">
                            <div className="w-2/5 h-60 relative">
                                <img className="w-full h-full" src={TunaFishImage} alt="" />
                                <div className="w-2/3 h-16 bg-accent absolute -bottom-12 -left-5 flex justify-center items-center">
                                    <h1 className="text-2xl text-black font-semibold px-2 text-center">LÀM TỪ CÁ NGỪ MẮT TO</h1>
                                </div>
                            </div>
                            <div className="px-5 w-3/5">
                                <div>
                                    <h1 className="text-3xl text-accent font-semibold tracking-wider">Thành Phần Phụ</h1>
                                    <div className="w-full h-24 flex flex-wrap flex-col">
                                        {
                                            tuna.details.subIngredients.map((item, index) => (
                                                <h3 className="text-3xl text-background">{item}</h3>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h1 className="text-3xl text-accent font-semibold tracking-wider">Dinh Dưỡng</h1>
                                    <div className="w-full h-48 flex flex-col">
                                        {
                                            tuna.details.nutrients.map((item, idx) => (
                                                <div className=" flex flex-row justify-between py-2 w-full">
                                                    <h1 className="text-3xl text-background w-2/3 ">{item.name}</h1>
                                                    <div className="text-3xl flex flex-row  w-1/3 pr-8 justify-end gap-5  text-background">
                                                        <h2 className="w-1/3 text-end">{item.weight}g</h2>
                                                        <div className="w-[3px] h-full bg-primary "></div>
                                                        <h2 className="w-1/3 text-start">{item.portion}%</h2>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row py-8 w-full h-fit pl-4 justify-evenly pb-24">
                            {
                                tuna.details.benefits.map((item, idx) => (
                                    <div className={`flex flex-col justify-start w-96 h-80 ${idx < tuna.details.benefits.length - 1 ? 'border-r-4 border-dashed' : ''} px-8 pb-8`}>
                                        <img className="w-24 h-24" src={EyeImage} alt="" />
                                        <h1 className="text-3xl text-background pb-4">{item.title}</h1>
                                        <p className="tracking-widest text-2xl">{item.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-24 w-full h-fit mb-24 flex flex-col">
                <h1 className="text-secondary text-3xl font-bold my-6 tracking-wider ">Sản phẩm tương tự</h1>
                <div className="w-full">
                    <div className='w-full h-fit bg-white flex flex-col items-center px-5'>
                        <Carousel className='w-full h-[250px] flex flex-row justify-between my-8 border-2 '>
                            <CarouselContent>
                                    <CarouselItem className='basis-1/4 flex flex-row'>
                                        
                                    </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    
                    </div>
                </div>
            </div>
        </main>
    )
}
export default ProductDetail;