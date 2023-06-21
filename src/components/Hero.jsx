import Identicon from 'react-identicons'
import { setGlobalState, useGlobalState, truncate } from '../store'

const Hero = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const onCreatedNFT = () => {
    setGlobalState('modal', 'scale-100')
  }

  return (
    <div
      className="flex flex-col md:flex-row w-4/5 justify-between 
      items-center mx-auto py-10"
    >
      <div className="md:w-3/6 w-full">
        <div>
          <h1 className="text-blue-300 text-5xl font-bold">
            Preserve History as<br />Digital NFTs<br />
                      <span className="text-blue-300">Meteors and Comets as Space History Collections</span>
          </h1>
                  <p className="text-blue-300 font-semibold text-sm mt-3">
            Click here to save space history.
          </p>
        </div>

        <div className="flex flex-row mt-5">
          <button
            className="shadow-xl shadow-black text-black
            bg-[#FFD700] hover:bg-[#FFD700]
            rounded-full cursor-pointer p-2"
            onClick={onCreatedNFT}
          >
            Create NFT
          </button>
        </div>

        <div className="w-3/4 flex justify-between items-center mt-5">
          <div>
            <p className="text-white font-bold">2</p>
            <small className="text-gray-300">History Creators</small>
          </div>
          <div>
            <p className="text-white font-bold">0</p>
            <small className="text-gray-300">Minted Space History</small>
          </div>
          <div>
            <p className="text-white font-bold">2</p>
            <small className="text-gray-300">Users</small>
          </div>
        </div>
      </div>

      <div
        className="shadow-xl shadow-black md:w-2/5 w-full 
      mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800"
      >
        <img
        src="https://static-ssl.businessinsider.com/image/56fb04a5dd0895b16f8b47d8-2400/earth-asteroid-meteorite-collision-collides-shutterstock.jpg"
          alt="NFT Art"
          className="h-60 w-full object-cover"
        />
        <div className="flex justify-start items-center p-3">
          <Identicon
            string={connectedAccount ? connectedAccount : 'Connect Your Wallet'}
            size={10}
            className="h-10 w-10 object-contain rounded-full mr-3"
          />
          <div>
            <p className="text-white font-semibold">
              {connectedAccount
                ? truncate(connectedAccount, 4, 4, 11)
                : 'Connect Your Wallet'}
            </p>
            <small className="text-blue-400 font-bold">@Your account</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
