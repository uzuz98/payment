import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import React, { FC } from "react";
import { SearchFilter } from "../_types/filter.types";
import { Separator } from "@/components/ui/separator";
import { SEARCH_DATA } from "../_constants/search";
import { WalletsSearchType } from "./WalletsSearchType.component";

interface IProps {
  onCloseSearch: () => void
  onToggleFilter: (key: keyof SearchFilter) => void
  filter: SearchFilter
  onChangeFilter: <T extends keyof SearchFilter> (key: T, value: SearchFilter[T]) => void
}

export const WalletsSearch: FC<IProps> = ({
  onCloseSearch,
  onToggleFilter,
  filter = {},
  onChangeFilter
}) => {
  const handleToggleFilter = (key: keyof SearchFilter) => () => {
    onToggleFilter(key)
  }

  const renderSearchType = () => {
    return SEARCH_DATA.map((verticalItems, index) => {
      return (
        <div
          key={'wallet-search-col-' + index}
          className="flex flex-col gap-y-6"
        >
          {verticalItems.map((item) => {
            return (
              <WalletsSearchType
                key={'wallets-search-type-' + item.key}
                onToggleFilter={handleToggleFilter(item.key)}
                enable={Object.hasOwn(filter, item.key)}
                item={item}
                onChange={onChangeFilter}
                value={filter[item.key]}
              />
            )
          })}
        </div>
      )
    })
  }

  return (
    <div id="wallets-search" className="mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-x-4">
            Search Wallets
            <Button onClick={onCloseSearch}>
              Close Search
            </Button>
          </CardTitle>
          <Separator />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-x-4">
            {renderSearchType()}
          </div>

        </CardContent>
        <CardFooter/>
      </Card>
    </div>
  )
}