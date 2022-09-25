import { useState, useContext } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../images/hasttar-logo.png';
import { TransactionContext } from "../context/TransactionContext";

const NavbarItem = ({title, classProps}) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}


const Navbar = () =>{
    const { connectWallet } = useContext(TransactionContext);
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src={logo} alt='logo' className='w-32 cursor-pointer'/>
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                <li className="mx-4 cursor-pointer undefined"><a target="_blank" href="https://peaceful-frangipane-db9b4b.netlify.app/">Market</a></li>
                <li className="mx-4 cursor-pointer undefined"><a target="_blank" href="https://coinmarketcap.com/rankings/exchanges/">Exchange</a></li>
                <li className="mx-4 cursor-pointer undefined"><a target="_blank" href="https://academy.binance.com/en">Tutorials</a></li>
                <li className="mx-4 cursor-pointer undefined"><a target="_blank" href="https://changelly.com/">Wallets</a></li>                

            <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                {!(connectWallet) ? <button type="button" onClick={connectWallet}>Login</button> : "Already Logged In"}
                
            </li>
            </ul>
            <div className='flex relative'>
                {toggleMenu
                  ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)}/>
                  : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/>
                  }
                  {toggleMenu && (
                    <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                    flex flex-col justify-start items0end rounded-md blue-glassmorphism text-white animate-slide-in
                    ">
                        <li className='text-xl w-full my-2'>
                            <AiOutlineClose onClick={() => setToggleMenu(false)}/>
                        </li>
                        <li className="mx-4 cursor-pointer my-2 text-lg"><a target="_blank" href="https://peaceful-frangipane-db9b4b.netlify.app/">Market</a></li>
                        <li className="mx-4 cursor-pointer my-2 text-lg"><a target="_blank" href="https://coinmarketcap.com/rankings/exchanges/">Exchange</a></li>
                        <li className="mx-4 cursor-pointer my-2 text-lg"><a target="_blank" href="https://academy.binance.com/en">Tutorials</a></li>
                        <li className="mx-4 cursor-pointer my-2 text-lg"><a target="_blank" href="https://changelly.com/">Wallets</a></li>
                    </ul>
                  )}
            </div>

        </nav>
    );
}

export default Navbar;

