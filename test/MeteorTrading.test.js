const MeteorTrading = artifacts.require('MeteorTrading')

require('chai').use(require('chai-as-promised')).should()

function toWei(num) {
    return web3.utils.toWei(num.toString())
}
const fromWei = (num) => web3.utils.fromWei(num.toString())

const EVM_REVERT = 'VM Exception while processing transaction: revert'

contract('MeteorTrading', ([deployer, buyer1]) => {
  const COST = toWei(0.01)
    const _NAME = 'MeteorTrading'
  const _SYMBOL = 'ETH'
  const _BASE_URI =
    'https://bafybeidfpvjszubegtoomoknmc7zcqnay7noteadbwxktw46guhdeqohrm.ipfs.infura-ipfs.io/'

  const TITLE = 'Soul McCullough'
  const DESCRIPTION =
    'engineer efficient solutions with this NFT, created for Public-key'

    let MeteorTrading, result

  beforeEach(async () => {
      MeteorTrading = await MeteorTrading.new(_NAME, _SYMBOL, _BASE_URI)
  })

  describe('deployment', () => {
    it('confirms NFT name', async () => {
        result = await MeteorTrading.name()
      result.should.equal(_NAME)
    })

    it('confirms NFT symbol', async () => {
        result = await MeteorTrading.symbol()
      result.should.equal(_SYMBOL)
    })

    it('confirms NFT baseURI', async () => {
        result = await MeteorTrading.baseURI()
      result.should.equal(_BASE_URI)
    })

    it('confirms NFT owner', async () => {
        result = await MeteorTrading.owner()
      result.should.equal(deployer)
    })

    it('confirms NFT mint cost', async () => {
        result = await MeteorTrading.cost()
      result.toString().should.equal(COST)
    })
  })

  describe('Minting', () => {
    describe('Success', () => {
      beforeEach(async () => {
        result = await MeteorTrading.payToMint(TITLE, DESCRIPTION, {
          from: buyer1,
          value: COST,
        })
      })

      it('Confirms buyer owns minted token', async () => {
          result = await MeteorTrading.ownerOf(1)
        result.should.equal(buyer1)
      })

      it('Confirms supply increase by 1', async () => {
          result = await MeteorTrading.supply()
        result.toString().should.equal('1')
      })

      it('Returns NFT array', async () => {
          result = await MeteorTrading.getAllNFTs()
        result.length.toString().should.equal('1')
      })

      it('Returns an NFT object', async () => {
          result = await MeteorTrading.getAnNFTs(1)
        result.length.toString().should.equal('7')
      })
    })

    describe('Failure', () => {
      it('Prevents mint with 0 value', async () => {
          await MeteorTrading
          .payToMint(TITLE, DESCRIPTION, { from: buyer1, value: 0 })
          .should.be.rejectedWith(EVM_REVERT)
      })

      it('Prevents minting by deployer', async () => {
          await MeteorTrading
          .payToMint(TITLE, DESCRIPTION, { from: deployer, value: COST })
          .should.be.rejectedWith(EVM_REVERT)
      })
    })
  })
})
