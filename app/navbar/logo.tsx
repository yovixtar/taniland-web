import  Image  from "next/image";
const Logo = () => {
    return ( 
        <div className="flex flex-row gap-2" >
        <Image className="hidden sm:block" src="/images/logo-2x.png" width={200} height={200} alt="logo" />
        <Image className=" block sm:hidden" src="/images/logo-simpel.png" width={30} height={30} alt="logo" />
        {/* <h1 className="font-bold "> TaniLand</h1> */}
        
        </div>
     );
}
 
export default Logo;