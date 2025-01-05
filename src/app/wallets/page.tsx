'use client'
import React from "react";
import { Header } from "./_components/Header.component";
import { WalletsTable } from "./_components/WalletsTable.component";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import styles from './styles.module.css'
import { useRouter } from "next/navigation";
import { WalletsSearch } from "./_components/WalletsSearch.component";
import { SearchFilter } from "./_types/filter.types";

const Page = () => {
  const router = useRouter()
  const [collapse, setCollapse] = React.useState<'search' | 'download' | ''>('')
  const [filter, setFilter] = React.useState<SearchFilter>({})

  const toggleOpenSearch = () => {
    if(collapse === 'download') {
      setCollapse('')
      setTimeout(() => {
        setCollapse('search')
      }, 300)
      return
    }
    setCollapse(prev => prev === 'search' ? '' : 'search')
  }

  const onChangeFilter = <T extends keyof SearchFilter> (key: T, value: SearchFilter[T]) => {
    setFilter(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const onToggleFilter = (key: keyof SearchFilter) => {
    setFilter(prev => {
      if(typeof prev[key] === 'undefined') {
        return {
          ...prev,
          [key]: null
        }
      }
      const newObject = {
        ...prev
      }
      delete newObject[key]

      return newObject
    })
  }

  const onCloseSearch = () => {
    setCollapse('')
  }

  const toggleOpenDownload = () => {
    if(collapse === 'search') {
      setCollapse('')
      setTimeout(() => {
        setCollapse('download')
      }, 300)
      return
    }
    setCollapse(prev => prev === 'download' ? '' : 'download')
  }

  const onNavigate = (url: string) => () => {
    router.push(`/wallets/${url}`)
  }
    
  return (
    <div className="w-full">
      <Header
        onAddWallet={onNavigate('add')}
        onSearch={toggleOpenSearch}
        onDownload={toggleOpenDownload}
      />
      <Collapsible
        open={collapse === 'search'}
        className="w-full space-y-2"
        id="wallets"
      >
        <CollapsibleContent className={styles.collapsibleContent}>
          <WalletsSearch
            onToggleFilter={onToggleFilter}
            onCloseSearch={onCloseSearch}
            filter={filter}
            onChangeFilter={onChangeFilter}
          />
        </CollapsibleContent>
      </Collapsible>

      {/* <Collapsible
        open={collapse === 'download'}
        className="w-full"
      >
        <CollapsibleContent className={styles.collapsibleContent}>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            Downloading...
          </div>
        </CollapsibleContent>
      </Collapsible> */}
      <WalletsTable />
    </div>
  )
}

export default Page