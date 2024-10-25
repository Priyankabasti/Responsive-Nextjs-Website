import Image from 'next/image'
import Logo from '../../public/assets/Logo.svg';
import Facebook from '../../public/assets/Facebook.svg';
import twitter from '../../public/assets/X.svg';
import Feed from '../../public/assets/Feed.svg';


const Footer = () => {
  return (
    <div className='pt-[80px] pb-[40px]'>
        <div className="flex items-center justify-center gap-x-[12px]">
            <Image src={Logo} alt="Logo" width={40} height={40} />
            <p className="font-bold text-[17px]">Priyanka basti</p>

        </div>

        <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
            <li>Features</li>
            <li>Pricing</li>
            <li>Enterprises</li>
            <li>Careers</li>
        </ul>

        <p className="pt-[54px] text-center text-[14px] font-medium sm:pt-5">
            @ copyright 2024. Your site. All rights reserved.
        </p>

        <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
            <Image src={Facebook} alt='facebook' />
            <Image src={twitter} alt='twitter' />
            <Image src={Feed} alt='feed' />
        </div>
    </div>
  )
}

export default Footer