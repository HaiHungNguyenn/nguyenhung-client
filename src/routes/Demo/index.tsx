import { useState } from 'react'

import Banner from '/Header/header-banner.png'
import KohserImage from '/Certificate/kosher.png'
import IfsFoodImage from '/Certificate/ifs-food.png'
import IsoImage from '/Certificate/iso.png'
import FcdSidImage from '/Certificate/fce-sid.png'
import SafeImage from '/Certificate/safe.png'
import FactoryImage from '/Introduction/factory.png'
import TunaBread from '/Recipe/tuna-bread.png'
import TunaSalad from '/Recipe/tuna-salad.png'
import TunaSpaghetti from '/Recipe/tuna-spaghetti.png'
import TunaSoup from '/Recipe/canh-gia-ca-ngu.png'


import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"


interface productItem {
    image: string,
    name: string,
    id: string,
    description: string
}

interface recipeItem {
    image: string,
    name: string,
    duration: string,
    portion: number
}

const products: productItem[] = [
    {
        image: "",
        name: "Cá Ngừ Xé",
        id: "",
        description: "Được chế biến từ thịt cá ngừ tươi ngon, được xé nhỏ và đóng vào hộp hoặc lon, tiện lợi để thưởng thức mọi lúc mọi nơi.",
    },
    {
        image: "",
        name: "Cá Ngừ Xé",
        id: "",
        description: "Được chế biến từ thịt cá ngừ tươi ngon, được xé nhỏ và đóng vào hộp hoặc lon, tiện lợi để thưởng thức mọi lúc mọi nơi.",
    },
    {
        image: "",
        name: "Cá Ngừ Xé",
        id: "",
        description: "Được chế biến từ thịt cá ngừ tươi ngon, được xé nhỏ và đóng vào hộp hoặc lon, tiện lợi để thưởng thức mọi lúc mọi nơi.",
    },
    {
        image: "",
        name: "Cá Ngừ Xé",
        id: "",
        description: "Được chế biến từ thịt cá ngừ tươi ngon, được xé nhỏ và đóng vào hộp hoặc lon, tiện lợi để thưởng thức mọi lúc mọi nơi.",
    },
    {
        image: "",
        name: "Cá Ngừ Xé",
        id: "",
        description: "Được chế biến từ thịt cá ngừ tươi ngon, được xé nhỏ và đóng vào hộp hoặc lon, tiện lợi để thưởng thức mọi lúc mọi nơi.",
    },
    {
        image: "",
        name: "Cá Ngừ Xé",
        id: "",
        description: "Được chế biến từ thịt cá ngừ tươi ngon, được xé nhỏ và đóng vào hộp hoặc lon, tiện lợi để thưởng thức mọi lúc mọi nơi.",
    },
]

const recipes: recipeItem[] = [
    {
        image: TunaSoup,
        name: "Canh Giá Cá Ngừ",
        duration: "20'",
        portion: 2
    },
    {
        image: TunaSalad,
        name: "Salad Cá Ngừ",
        duration: "10'",
        portion: 1
    },
    {
        image: TunaBread,
        name: "Bánh Mì Cá Ngừ",
        duration: "10'",
        portion: 1
    },
    {
        image: TunaSpaghetti,
        name: "Spaghetti Cá Ngừ Sốt Phô Mai",
        duration: "20'",
        portion: 2
    },
]


function Demo() {
    const [hoveredIndex, setHoveredIndex] =  useState<number | null>(null);


    return (
        <main className="bg-primary h-auto flex flex-col">
            <div className='h-full w-full'>
                <img className="h-full w-full" src={Banner} alt="" />
            </div>
            <div className='w-full h-60 bg-background border-t-2 border-b-4 border-primary py-6 flex justify-evenly items-center px-52'>
                <img className="h-full" src={KohserImage} alt="" />
                <img className="h-full" src={SafeImage} alt="" />
                <img className="h-full" src={IfsFoodImage} alt="" />
                <img className="h-full" src={IsoImage} alt="" />
                <img className="h-full" src={FcdSidImage} alt="" />
            </div>
            <div className='w-full h-fit bg-white flex flex-col items-center border-b-4 border-primary'>
                <div className='flex items-center flex-row gap-10  w-full justify-center h-fit mt-8'>
                    <div className='w-[70px] h-[2px] bg-primary'></div>
                    <h1 className=' text-[70px] text-accent font-bold drop-shadow-[0_3px_1.2px_rgba(1,1,1,1)]'>GIỚI THIỆU</h1>
                    <div className='w-[70px] h-[2px] bg-primary'></div>
                </div>
                <div className='w-1/3'>
                    <img className='w-full' src={FactoryImage} alt="" />
                </div>
                <div className='w-1/2'>
                    <h3 className='text-3xl text-center tracking-widest'>
                        Công ty TNHH Nguyễn Hưng vào những thập niên 90, Nguyễn Hưng chỉ là cơ sở thu mua nguyên liệu thủy hải sản các loại khai thác đánh bắt tự nhiên. Sơ chế thành bán thành phẩm để cung cấp cho các nhà máy chế biến thủy sản trên toàn quốc.
                    </h3>
                </div>
                <button className='px-20 py-10 border-[3px] border-black my-16 hover:bg-accent hover:text-background hover:cursor-pointer hover:transition-colors hover:duration-300'>
                    <p className='font-bold text-4xl'>TÌM HIỂU THÊM</p>
                </button>
            </div>
            <div className='w-full h-fit bg-white flex flex-col items-center border-b-2 border-primary px-5'>
                <div className='flex items-center flex-row gap-10  border-t-2  border-primary mt-1 w-full justify-center h-fit pt-8'>
                    <div className='w-[70px] h-[2px] bg-primary'></div>
                    <h1 className=' text-[70px] text-accent font-bold drop-shadow-[0_3px_1.2px_rgba(1,1,1,1)]'>SẢN PHẨM</h1>
                    <div className='w-[70px] h-[2px] bg-primary'></div>
                </div>

                <Carousel className='w-5/6 h-[500px] flex flex-row justify-between'>
                    <CarouselContent className='h-full '>
                        {
                            products.map((item, idx) => (
                                <CarouselItem className='basis-1/4 flex flex-row' key={idx}>
                                    <div className='flex flex-col justify-evenly h-full mx-4'>
                                        <div className='w-full h-52 bg-slate-400'>
                                        </div>
                                        <div className=''>
                                            <h1 className='text-3xl font-bold text-secondary  text-center py-8' >
                                                {item.name}
                                            </h1>
                                            <p className='text-2xl text-center items-center '>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`h-full w-3  ${idx !== products.length - 1 ? 'border-dashed border-primary border-r-2' : ''} `}>
                                    </div>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                </Carousel>
                <button className='px-20 py-10 border-[3px] border-black my-16 hover:bg-accent hover:text-background hover:cursor-pointer hover:transition-colors hover:duration-300'>
                    <p className='font-bold text-4xl'>TÌM HIỂU THÊM</p>
                </button>
            </div>
            <div className='w-full h-fit bg-white flex flex-col items-center border-b-2 border-primary px-5'>
                <div className='flex items-center flex-row gap-10  border-t-2  border-primary mt-1 w-full justify-center h-fit pt-8 mb-16'>
                    <div className='w-[70px] h-[2px] bg-primary'></div>
                    <h1 className=' text-[70px] text-accent font-bold drop-shadow-[0_3px_1.2px_rgba(1,1,1,1)]'>CÔNG THỨC CHẾ BIẾN</h1>
                    <div className='w-[70px] h-[2px] bg-primary'></div>
                </div>

                <Carousel className='w-5/6 h-[250px] flex flex-row justify-between my-8'>
                    <CarouselContent className='h-full '>
                        {
                            recipes.map((item, idx) => (
                                <CarouselItem className='basis-1/4 flex flex-row' key={idx}>
                                    <div className='w-auto h-full relative mx-4 hover:cursor-pointer' onMouseEnter = {() => {setHoveredIndex(idx)}} onMouseLeave={() => {setHoveredIndex(null)}}>
                                        <div className='w-auto object-contain h-auto'>
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full pl-10 bg-white py-4 bg-opacity-80 
                                            ${
                                                hoveredIndex === idx ? '' : 'hidden'}
                                        `}>
                                            <h1 className='text-3xl font-bold text-secondary text-start'>{item.name}</h1>
                                            <p className='text-2xl'>Thời gian nấu: {item.duration}</p>
                                            <p className='text-2xl'>Khẩu phần: {item.portion} người</p>
                                        </div>
                                        
                                    </div>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                </Carousel>
                <button className='px-20 py-10 border-[3px] border-black my-16 hover:bg-accent hover:text-background hover:cursor-pointer hover:transition-colors hover:duration-300'>
                    <p className='font-bold text-4xl'>TÌM HIỂU THÊM</p>
                </button>
            </div>


        </main>
    )
}

export default Demo;
