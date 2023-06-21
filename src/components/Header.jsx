import HeaderLogo from '../assets/Header.png'
import { connectWallet } from '../Blockchain.Services'
import { useGlobalState, truncate } from '../store'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img
          className="w-32 cursor-pointer"
          src={HeaderLogo}
          alt="HeaderLogo"
        />
      </div>

      <ul
        className="md:flex-[0.5] text-white md:flex
        hidden list-none flex-row justify-between 
        items-center flex-initial"
      >
        <li className="mx-4 cursor-pointer">Buy</li>
        <li className="mx-4 cursor-pointer">Sell</li>
        <li className="mx-4 cursor-pointer">Mint NFT</li>
      </ul>

      {connectedAccount ? (
        <button
          className="shadow-xl shadow-black text-black
        bg-[#FFD700] hover:bg-[#FFD700] md:text-xs p-2
          rounded-full cursor-pointer"
        >
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          className="shadow-xl shadow-black text-black
        bg-[#FFD700] hover:bg-[#FFD700] md:text-xs p-2
          rounded-full cursor-pointer"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </nav>
  )
}

export default Header
