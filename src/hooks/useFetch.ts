import { BAST_TOKEN } from '../constants'
import { TokenAmount } from '../constants/token'
import { useActiveWeb3React } from '../hooks'
import { useCallback, useEffect, useState } from 'react'

import { useBlockNumber } from '../state/application/hooks'




enum AuctionHistoryType {
  BID = 'Auctioneer',
  CREATE = 'Creator'
}
export interface PoolSearch {
  tokenId: string
  status: string
  level: string
  order: string
  grade?: string
}

export enum PoolBidsStatusProp {
  DEFAULT = '--',
  OUT = 'Out',
  WINNER = 'Winner'
}
interface PoolBidsProp {
  walletAddress: string
  hash: string
  price: TokenAmount
  time: string
  block_time: string
  state: PoolBidsStatusProp
}



export function useGetPools() {
  const sessionStoragePage = 'useGetPools_page'
  const sessionStorageSearch = 'useGetPools_search'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(Number(sessionStorage.getItem(sessionStoragePage)) || 1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [ids, setIds] = useState<string[]>([])
  const pageSize = 8
  const blockNumber = useBlockNumber()

  const [search, setSearch] = useState<PoolSearch>(
    Object.assign(
      {
        tokenId: '',
        status: 'open',
        level: '',
        order: 'bid_time'
      },
      JSON.parse(sessionStorage.getItem(sessionStorageSearch) || '{}')
    )
  )
  const setSearchParam = useCallback(
    (name: keyof PoolSearch, val: string) => {
      const _data = Object.assign(search, { [name]: val })
      if (name === 'status' && val !== 'open' && ['asc_over', 'desc_over'].includes(_data.order)) {
        _data.order = 'bid_time'
      }
      if (name === 'order' && ['asc_over', 'desc_over', 'bid_time'].includes(val)) {
        _data.status = 'open'
      }
      setCurrentPage(1)
      setSearch({ ..._data })
      sessionStorage.setItem(sessionStorageSearch, JSON.stringify(_data))
    },
    [search]
  )

  useEffect(() => {
    sessionStorage.setItem(sessionStoragePage, currentPage.toString())
  }, [currentPage])

  useEffect(() => {
   
  }, [currentPage, search])

  useEffect(() => {
  
    
  }, [blockNumber])

  return {
    loading: isLoading,
    page: {
      totalPages,
      currentPage,
      setCurrentPage
    },
    search: {
      search,
      setSearchParam
    },
    data: ids
  }
}

export function useGetPartsPools() {
  const sessionStoragePage = 'useGetPartsPools_page'
  const sessionStorageSearch = 'useGetPartsPools_search'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(Number(sessionStorage.getItem(sessionStoragePage)) || 1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [ids, setIds] = useState<string[]>([])
  const pageSize = 8
  const blockNumber = useBlockNumber()
  const [search, setSearch] = useState<PoolSearch>(
    Object.assign(
      {
        tokenId: '',
        status: '',
        level: '',
        order: 'bid_time'
      },
      JSON.parse(sessionStorage.getItem(sessionStorageSearch) || '{}')
    )
  )
  const setSearchParam = useCallback(
    (name: keyof PoolSearch, val: string) => {
      const _data = Object.assign(search, { [name]: val })
      if (name === 'status' && val !== 'open' && ['asc_over', 'desc_over'].includes(_data.order)) {
        _data.order = 'bid_time'
      }
      if (name === 'order' && ['asc_over', 'desc_over', 'bid_time'].includes(val)) {
        _data.status = 'open'
      }
      setCurrentPage(1)
      setSearch({ ..._data })
      sessionStorage.setItem(sessionStorageSearch, JSON.stringify(_data))
    },
    [search]
  )

  useEffect(() => {
    sessionStorage.setItem(sessionStoragePage, currentPage.toString())
  }, [currentPage])

  useEffect(() => {
   
  }, [currentPage, search])

  useEffect(() => {
    
  }, [blockNumber])

  return {
    loading: isLoading,
    page: {
      totalPages,
      currentPage,
      setCurrentPage
    },
    search: {
      search,
      setSearchParam
    },
    data: ids
  }
}

export function useGetWeaponPools() {
  const sessionStoragePage = 'useGetWeaponPools_page'
  const sessionStorageSearch = 'useGetWeaponPools_search'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(Number(sessionStorage.getItem(sessionStoragePage)) || 1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [ids, setIds] = useState<string[]>([])
  const pageSize = 8
  const blockNumber = useBlockNumber()

  const [search, setSearch] = useState<PoolSearch>(
    Object.assign(
      {
        tokenId: '',
        status: 'open',
        level: '',
        order: 'bid_time'
      },
      JSON.parse(sessionStorage.getItem(sessionStorageSearch) || '{}')
    )
  )
  const setSearchParam = useCallback(
    (name: keyof PoolSearch, val: string) => {
      const _data = Object.assign(search, { [name]: val })
      if (name === 'status' && val !== 'open' && ['asc_over', 'desc_over'].includes(_data.order)) {
        _data.order = 'bid_time'
      }
      if (name === 'order' && ['asc_over', 'desc_over', 'bid_time'].includes(val)) {
        _data.status = 'open'
      }
      setCurrentPage(1)
      setSearch({ ..._data })
      sessionStorage.setItem(sessionStorageSearch, JSON.stringify(_data))
    },
    [search]
  )

  useEffect(() => {
    sessionStorage.setItem(sessionStoragePage, currentPage.toString())
  }, [currentPage])

  useEffect(() => {
   
  }, [currentPage, search])

  useEffect(() => {
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockNumber])

  return {
    loading: isLoading,
    page: {
      totalPages,
      currentPage,
      setCurrentPage
    },
    search: {
      search,
      setSearchParam
    },
    data: ids
  }
}

export function useGetArtworksPools() {
  const sessionStoragePage = 'useGetArtWorksPools_page'
  const sessionStorageSearch = 'useGetArtWorksPools_search'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(Number(sessionStorage.getItem(sessionStoragePage)) || 1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [ids, setIds] = useState<string[]>([])
  const pageSize = 8
  const blockNumber = useBlockNumber()

  const [search, setSearch] = useState<PoolSearch>(
    Object.assign(
      {
        tokenId: '',
        status: 'open',
        level: '',
        order: 'bid_time'
      },
      JSON.parse(sessionStorage.getItem(sessionStorageSearch) || '{}')
    )
  )
  const setSearchParam = useCallback(
    (name: keyof PoolSearch, val: string) => {
      const _data = Object.assign(search, { [name]: val })
      if (name === 'status' && val !== 'open' && ['asc_over', 'desc_over'].includes(_data.order)) {
        _data.order = 'bid_time'
      }
      if (name === 'order' && ['asc_over', 'desc_over', 'bid_time'].includes(val)) {
        _data.status = 'open'
      }
      setCurrentPage(1)
      setSearch({ ..._data })
      sessionStorage.setItem(sessionStorageSearch, JSON.stringify(_data))
    },
    [search]
  )

  useEffect(() => {
    sessionStorage.setItem(sessionStoragePage, currentPage.toString())
  }, [currentPage])

  useEffect(() => {
   
  }, [currentPage, search])

  useEffect(() => {
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockNumber])

  return {
    loading: isLoading,
    page: {
      totalPages,
      currentPage,
      setCurrentPage
    },
    search: {
      search,
      setSearchParam
    },
    data: ids
  }
}

//transaction pool
export function useGetTransactionPools() {
  const sessionStoragePage = 'useGetTransactionPools_page'
  const sessionStorageSearch = 'useGetTransactionPools_search'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(Number(sessionStorage.getItem(sessionStoragePage)) || 1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [ids, setIds] = useState<string[]>([])
  const pageSize = 8
  const blockNumber = useBlockNumber()

  const [search, setSearch] = useState<PoolSearch>(
    Object.assign(
      {
        tokenId: '',
        status: 'open',
        level: '',
        order: ''
      },
      JSON.parse(sessionStorage.getItem(sessionStorageSearch) || '{}')
    )
  )
  const setSearchParam = useCallback(
    (name: keyof PoolSearch, val: string) => {
      const _data = Object.assign(search, { [name]: val })
      if (name === 'order' && ['asc_over', 'desc_over'].includes(val)) {
        _data.status = 'open'
      }
      setCurrentPage(1)
      setSearch({ ..._data })
      sessionStorage.setItem(sessionStorageSearch, JSON.stringify(_data))
    },
    [search]
  )

  useEffect(() => {
    sessionStorage.setItem(sessionStoragePage, currentPage.toString())
  }, [currentPage])



  return {
    loading: isLoading,
    page: {
      totalPages,
      currentPage,
      setCurrentPage
    },
    search: {
      search,
      setSearchParam
    },
    data: ids
  }
}

//transaction parts pool
export function useGetTransactionPartsPools() {
  const sessionStoragePage = 'useGetTransactionPartsPools_page'
  const sessionStorageSearch = 'useGetTransactionPartsPools_search'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(Number(sessionStorage.getItem(sessionStoragePage)) || 1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [ids, setIds] = useState<string[]>([])
  const pageSize = 8
  const blockNumber = useBlockNumber()
  const [search, setSearch] = useState<PoolSearch>(
    Object.assign(
      {
        tokenId: '',
        status: 'open',
        level: '',
        order: ''
      },
      JSON.parse(sessionStorage.getItem(sessionStorageSearch) || '{}')
    )
  )
  const setSearchParam = useCallback(
    (name: keyof PoolSearch, val: string) => {
      const _data = Object.assign(search, { [name]: val })
      if (name === 'order' && ['asc_over', 'desc_over'].includes(val)) {
        _data.status = 'open'
      }
      setCurrentPage(1)
      setSearch({ ..._data })
      sessionStorage.setItem(sessionStorageSearch, JSON.stringify(_data))
    },
    [search]
  )

  useEffect(() => {
    sessionStorage.setItem(sessionStoragePage, currentPage.toString())
  }, [currentPage])

 

 

  return {
    loading: isLoading,
    page: {
      totalPages,
      currentPage,
      setCurrentPage
    },
    search: {
      search,
      setSearchParam
    },
    data: ids
  }
}

export function useGetTransactionArtworksPools() {
  const sessionStoragePage = 'useGetTransactionArtworksPools_page'
  const sessionStorageSearch = 'useGetTransactionArtworksPools_search'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(Number(sessionStorage.getItem(sessionStoragePage)) || 1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [ids, setIds] = useState<string[]>([])
  const pageSize = 8
  const blockNumber = useBlockNumber()
  const [search, setSearch] = useState<PoolSearch>(
    Object.assign(
      {
        tokenId: '',
        status: 'open',
        level: '',
        order: ''
      },
      JSON.parse(sessionStorage.getItem(sessionStorageSearch) || '{}')
    )
  )
  const setSearchParam = useCallback(
    (name: keyof PoolSearch, val: string) => {
      const _data = Object.assign(search, { [name]: val })
      if (name === 'order' && ['asc_over', 'desc_over'].includes(val)) {
        _data.status = 'open'
      }
      setCurrentPage(1)
      setSearch({ ..._data })
      sessionStorage.setItem(sessionStorageSearch, JSON.stringify(_data))
    },
    [search]
  )

  useEffect(() => {
    sessionStorage.setItem(sessionStoragePage, currentPage.toString())
  }, [currentPage])



  

  return {
    loading: isLoading,
    page: {
      totalPages,
      currentPage,
      setCurrentPage
    },
    search: {
      search,
      setSearchParam
    },
    data: ids
  }
}

//transaction weapon pool
export function useGetTransactionWeaponPools() {
  const sessionStoragePage = 'useGetTransactionWeaponPools_page'
  const sessionStorageSearch = 'useGetTransactionWeaponPools_search'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(Number(sessionStorage.getItem(sessionStoragePage)) || 1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [ids, setIds] = useState<string[]>([])
  const pageSize = 8
  const blockNumber = useBlockNumber()

  const [search, setSearch] = useState<PoolSearch>(
    Object.assign(
      {
        tokenId: '',
        status: 'open',
        level: '',
        order: ''
      },
      JSON.parse(sessionStorage.getItem(sessionStorageSearch) || '{}')
    )
  )
  const setSearchParam = useCallback(
    (name: keyof PoolSearch, val: string) => {
      const _data = Object.assign(search, { [name]: val })
      if (name === 'order' && ['asc_over', 'desc_over'].includes(val)) {
        _data.status = 'open'
      }
      setCurrentPage(1)
      setSearch({ ..._data })
      sessionStorage.setItem(sessionStorageSearch, JSON.stringify(_data))
    },
    [search]
  )

  useEffect(() => {
    sessionStorage.setItem(sessionStoragePage, currentPage.toString())
  }, [currentPage])

  

 

  return {
    loading: isLoading,
    page: {
      totalPages,
      currentPage,
      setCurrentPage
    },
    search: {
      search,
      setSearchParam
    },
    data: ids
  }
}

export function usePooldBidsHistory(
  id: string,
  type: any
): {
  loading: boolean
  data: PoolBidsProp[]
} {
  const [isFirstLoading, setFirstIsLoading] = useState<boolean>(true)
  const [data, setData] = useState<PoolBidsProp[]>([])
  const { chainId } = useActiveWeb3React()
  const blockNumber = useBlockNumber()


  return {
    loading: isFirstLoading,
    data
  }
}











