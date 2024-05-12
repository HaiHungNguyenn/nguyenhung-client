import LogoImage from "/Header/logo.png"
interface LogoProps{
    width: number;
    height: number; 
}
function Logo({width,height} : LogoProps){
    return (
        <img src={LogoImage} width={width} height={height} alt="logo" />
    )
}
export default Logo;