import WallPaper from '/Introduction/wallpaper.png';
import CatchImage from '/Introduction/catch.png'
import InspectionImage from '/Introduction/inspection.png'
import SeasonImage from '/Introduction/seasoning.png'
import ToCustomerImage from '/Introduction/to-customer.png'
import Image1 from '/Introduction/image1.png'
import Image2 from '/Introduction/image2.png'
import Image3 from '/Introduction/image3.png'
import Image4 from '/Introduction/image4.png'
import Image5 from '/Introduction/image5.png'

interface progressItems {
    image: string,
    description: string
}

const progresses: progressItems[] = [
    { image: CatchImage, description: "Đánh Bắt Tự Nhiên" },
    { image: InspectionImage, description: "Giám Nghiệm Kỹ Càng" },
    { image: SeasonImage, description: "Chế Biến Đóng Gói Theo Tiêu Chuẩn" },
    { image: ToCustomerImage, description: "Đưa Đến Tay Người Dùng" },

]

function Introduction() {
    return (
        <main className='mt-40 w-full h-fit flex flex-col '>
            <div className='w-full h-fit relative '>
                <img className="w-full" src={WallPaper} alt="" />
                <div className='absolute top-0 w-full h-[2000px]  flex flex-col items-center justify-start'>
                    <h1 className='text-[40px] text-accent w-fit font-bold drop-shadow-[0_3px_1.2px_rgba(1,1,1,1)] py-16 px-48 text-center border-t-2 border-primary'>HÀNH TRÌNH PHÁT TRIỂN CHẤT LƯỢNG VÀ HIỆN ĐẠI</h1>
                    <div className='w-2/3 h-[300px] flex flex-row '>
                        <div className='w-1/3 h-full bg-primary'>

                        </div>
                        <div className='w-2/3 h-full pl-12 pr-12 tracking-widest'>
                            <h1 className='text-4xl py-8 font-bold text-primary'>1900s</h1>
                            <h2 className='text-3xl font-bold text-primary'>BẮT ĐẦU VÀ PHÁT TRIỂN</h2>
                            <p className='text-2xl font-semibold text-primary'>Trong những năm 90, Công ty TNHH Nguyễn Hưng ra đời như một cơ sở thu mua nguyên liệu thủy hải sản từ các hoạt động đánh bắt tự nhiên. Ban đầu chỉ là một điểm thu mua nhỏ, nhưng với sự phát triển của ngành thủy sản, Nguyễn Hưng quyết định mở rộng và chuyển đổi thành Công ty TNHH với trụ sở chính tại Khu phố Vạn Phước, Sông Cầu, Phú Yên.</p>
                        </div>
                    </div>

                    <div className='w-2/3 h-[350px] mt-20 flex flex-row-reverse '>
                        <div className='w-1/3 h-full bg-primary'>

                        </div>
                        <div className='w-2/3 h-full pr-12 tracking-widest'>
                            <h1 className='text-4xl py-8 font-bold text-primary'>2009</h1>
                            <h2 className='text-3xl font-bold text-primary'>NÂNG CAO CHẤT LƯỢNG VÀ HIỆN ĐẠI HÓA</h2>
                            <p className='text-2xl font-semibold text-primary'>Năm 2009, để đáp ứng yêu cầu ngày càng cao về chất lượng và tính pháp lý, Nguyễn Hưng đầu tư xây dựng nhà máy chế biến thủy sản hiện đại tại thị xã Sông Cầu. Với công suất 960 tấn/năm, nhà máy này chủ yếu sản xuất Loin cá ngừ chất lượng cao, đồng thời thúc đẩy sự phát triển của ngành công nghiệp chế biến thủy hải sản tại Phú Yên.</p>
                        </div>
                    </div>
                    <div className='w-2/3 h-[350px] mt-20 flex flex-row '>
                        <div className='w-1/3 h-full bg-primary'>

                        </div>
                        <div className='w-2/3 h-full pl-12 pr-12 tracking-widest'>
                            <h1 className='text-4xl py-8 font-bold text-primary'>2019</h1>
                            <h2 className='text-3xl font-bold text-primary'>MỞ RỘNG QUY MÔ</h2>
                            <p className='text-2xl font-semibold text-primary'>Năm 2019, công ty quyết định đầu tư mạnh mẽ vào dự án mới – nhà máy thủy sản đóng hộp tại Khu công nghiệp Đông Bắc Sông Cầu. Với diện tích 35.000 m2, công suất 15.000 tấn/năm và vốn đầu tư 150 tỷ VNĐ, dự án này không chỉ mở rộng quy mô sản xuất mà còn tạo ra nhiều cơ hội việc làm và đóng góp tích cực cho cộng đồng địa phương.</p>
                        </div>
                    </div>
                    <div className='w-2/3 h-[350px] mt-20 flex flex-row-reverse '>
                        <div className='w-1/3 h-full bg-primary'>

                        </div>
                        <div className='w-2/3 h-full pr-12 tracking-widest'>
                            <h1 className='text-4xl py-8 font-bold text-primary'>2020</h1>
                            <h2 className='text-3xl font-bold text-primary'>HIỆN ĐẠI HÓA VÀ XUẤT KHẨU</h2>
                            <p className='text-2xl font-semibold text-primary'>Nhà máy mới đi vào hoạt động vào giữa năm 2020, sử dụng công nghệ và thiết bị tiên tiến từ Mỹ, Nhật Bản, Thái Lan, Đài Loan. Điều này giúp Công ty Nguyễn Hưng không chỉ đáp ứng được yêu cầu khắt khe của thị trường nội địa mà còn mở rộng quy mô xuất khẩu sang nhiều quốc gia như Ai Cập, Jordan, Đài Loan.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-fit bg-primary relative'>
                <div className='w-full h-[800px]'>
                </div>
                <div className='w-1/2 h-1/2  absolute top-1/2 left-1/2 pl-8 pr-36 tracking-widest pt-24'>
                    <h2 className='text-4xl font-bold text-white'>ĐỊNH HÌNH TƯƠNG LAI</h2>
                    <p className='text-3xl font-semibold text-white'>Với hành trình ấn tượng từ một điểm thu mua nhỏ đến một doanh nghiệp đa quốc gia, Nguyễn Hưng Seafood không chỉ là đơn vị chế biến thủy sản mà còn là biểu tượng của chất lượng và sự hiện đại. Điều này chứng tỏ cam kết không ngừng của công ty với sự đổi mới và phát triển bền vững trong ngành công nghiệp thủy sản.</p>
                </div>
            </div>
            <div className='w-full h-fit bg-white flex flex-col items-center px-5 pb-24'>
                <div className='flex items-center flex-row gap-10 mt-1 w-full justify-center h-fit pt-8 mb-16'>
                    <div className='w-[70px] h-[2px] bg-primary'></div>
                    <h1 className=' text-[70px] text-accent font-bold drop-shadow-[0_3px_1.2px_rgba(1,1,1,1)]'>CÔNG THỨC CHẾ BIẾN</h1>
                    <div className='w-[70px] h-[2px] bg-primary'></div>
                </div>
                <div className='h-fit flex w-2/3 flex-row justify-between'>
                    {
                        progresses.map((item, idx) => (
                            <div className='flex flex-col w-[360px] justify-between h-full '>
                                <img className="w-[360px] h-[360px]" src={item.image} alt="" />

                                <div className='bg-tertiary text-background h-24 py-4'>
                                    <h1 className='text-3xl text-center text-accent'>
                                        {item.description}
                                    </h1>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
            <div className='w-full h-screen relative flex'>
                <img className="w-full h-full" src={WallPaper} alt="" />
                <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center py-36'>
                    <div className='w-2/3 h-full flex flex-col items-center flex-wrap justify-center gap-6'>
                        <img className="w-[500px]" src={Image2} alt="" />
                        <img className="w-[500px]" src={Image3} alt="" />
                        <img className="w-[500px]" src={Image1} alt="" />
                        <img className="w-[500px]" src={Image5} alt="" />
                        <img className="w-[500px]" src={Image4} alt="" />
                    </div>
                </div>
            </div>

        </main>
    )
}
export default Introduction;