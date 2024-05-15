import { useState } from "react";
interface productItems {
    id: string,
    name: string,
    image: '',
    description: string,
    category: string
}

const products: productItems[] = [
    {
        id: '1',
        name: 'Cá Ngừ Xé',
        image: '',
        description: 'Được chế biến từ thịt cá ngừ tươi ngon, được xé nhỏ và đóng vào hộp hoặc lon, tiện lợi để thưởng thức mọi lúc mọi nơi.',
        category: 'Cá Ngừ'
    },
    {
        id: '2',
        name: 'Cá Ngừ Xé',
        image: '',
        description: 'Được chế biến từ thịt cá ngừ tươi ngon, được xé nhỏ và đóng vào hộp hoặc lon, tiện lợi để thưởng thức mọi lúc mọi nơi.',
        category: 'Cá Ngừ'
    },
    {
        id: '3',
        name: 'Cá Ngừ Xé',
        image: '',
        description: 'Được chế biến từ thịt cá ngừ tươi ngon, được xé nhỏ và đóng vào hộp hoặc lon, tiện lợi để thưởng thức mọi lúc mọi nơi.',
        category: 'Cá Ngừ'
    },
    {
        id: '4',
        name: 'Cá Ngừ Xé',
        image: '',
        description: 'Được chế biến từ thịt cá ngừ tươi ngon, được xé nhỏ và đóng vào hộp hoặc lon, tiện lợi để thưởng thức mọi lúc mọi nơi.',
        category: 'Cá Ngừ'
    },
    {
        id: '5',
        name: 'Cá Nục',
        image: '', description: 'Được chế biến từ thịt cá ngừ tươi ngon, được xé nhỏ và đóng vào hộp hoặc lon, tiện lợi để thưởng thức mọi lúc mọi nơi.',
        category: 'Cá Nục'
    },
    {
        id: '6',
        name: 'Cá Heo',
        image: '',
        description: 'Được chế biến từ thịt cá ngừ tươi ngon, được xé nhỏ và đóng vào hộp hoặc lon, tiện lợi để thưởng thức mọi lúc mọi nơi.',
        category: 'Cá Heo'
    },
    {
        id: '7',
        name: 'Cá Ngừ Xé',
        image: '',
        description: 'Được chế biến từ thịt cá ngừ tươi ngon, được xé nhỏ và đóng vào hộp hoặc lon, tiện lợi để thưởng thức mọi lúc mọi nơi.',
        category: 'Cá Ngừ'
    },

]

const categories = new Set<string>();
products.forEach(p => categories.add(p.category))


function Product() {
    const textStyle : React.CSSProperties = {
        WebkitTextStroke : '2px black'
    };
    

    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <main className="mt-40 w-full h-fit flex flex-col  ">
            {Array.from(categories).map((category, index) => (
                <div key={index} className="w-full h-fit flex flex-col items-center">
                    <div className={`${index == 0 ? 'border-t-2 border-primary' : ''} pt-24 font-bold text-center w-2/3 h-fit pb-8 flex flex-col-row justify-center items-center gap-16`}>
                        <div className='w-[70px] h-[2px] bg-primary'></div>
                        <h1 className="text-6xl text-accent" style={textStyle}>{category}</h1>
                        <div className='w-[70px] h-[2px] bg-primary'></div>
                    </div>

                    <div className="w-2/3 min-w-[400px] h-fit  flex flex-row flex-wrap justify-start ">
                        {products.filter(product => product.category === category).map((product, index) => (
                            <div key={index} className="w-1/4 min-w-[360px] h-fit mb-8 relative mr-6" onMouseEnter={() => { setHoveredId(product.id) }} onMouseLeave={() => { setHoveredId(null) }}>
                                <div className="w-full h-36 bg-primary"></div>
                                <h1 className="text-3xl text-center text-secondary py-2 font-semibold">{product.name}</h1>
                                <p className="text-xl text-center">{product.description}</p>

                                <div className={`w-full h-full absolute top-[-100%] bg-white bg-opacity-60 flex flex-col  justify-center transition-transform duration-500 ${hoveredId === product.id ? 'translate-y-full opacity-100' : 'translate-y-0 opacity-0 pointer-events-none'}`}>
                                </div>

                                <button className={`w-full h-20 bg-accent border-2 border-black absolute top-1/2 transition-opacity duration-700  ${hoveredId === product.id ? 'opacity-100' : 'opacity-0 '}`}>
                                    <p className="text-background text-4xl tracking-widest font-bold" >XEM</p>
                                </button>

                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </main>
    )
}
export default Product