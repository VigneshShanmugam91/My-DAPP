import { useEffect, useState } from 'react'
import { BiTransfer } from 'react-icons/bi'
import { MdOpenInNew } from 'react-icons/md'
import { useGlobalState, truncate } from '../store'

const Transactions = () => {
  const [transactions] = useGlobalState('transactions')
  const [end, setEnd] = useState(3)
  const [count] = useState(3)
  const [collection, setCollection] = useState([])

  const getCollection = () => {
    return transactions.slice(0, end)
  }

  useEffect(() => {
    setCollection(getCollection())
  }, [transactions, end])

  return (
      <div className="bg-[#FFD700] gradient-bg-artworks">
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-blue-300 text-3xl font-bold uppercase text-blue-300">
          {collection.length > 0 ? 'Latest Transactions' : 'My Transactions'}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-2 py-2.5">
          {collection.map((tx) => (
            <div
              key={tx.id}
                  className="flex justify-between items-center border border-FFD700 text-white w-full shadow-xl shadow-white rounded-md overflow-hidden bg-white my-2 p-3"
            >
                  <div className="rounded-md shadow-sm shadow-FFD700 p-2">
                <BiTransfer />
              </div>

              <div>
                <h4 className="text-sm">{tx.title} Transfered</h4>
                <small className="flex flex-row justify-start items-center">
                  <span className="mr-1">Received by</span>
                          <a href="#" className="text-FFD700 mr-2">
                    {truncate(tx.owner, 4, 4, 11)}
                  </a>
                  <a href="#">
                    <MdOpenInNew />
                  </a>
                </small>
              </div>

              <p className="text-sm font-medium">{tx.cost}ETH</p>
            </div>
          ))}
        </div>

        {collection.length > 0 && transactions.length > collection.length ? (
          <div className="text-center my-5">
            <button
              className="shadow-xl shadow-black text-black
            bg-[#FFD700] hover:bg-[#FFD700]
            rounded-full cursor-pointer p-2"
              onClick={() => setEnd(end + count)}
            >
              Load More
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Transactions
