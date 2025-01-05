import { Button } from "@/components/ui/button";
import React, { FC } from "react";

interface IProps {
  onAddWallet: () => void
  onSearch: () => void
  onDownload: () => void
}

export const Header: FC<IProps> = ({
  onAddWallet,
  onSearch,
  // onDownload
}) => {
  return (
    <div id="wallets-header" className="flex gap-x-6 items-center mb-12">
      <p className="font-semibold text-5xl">Wallets</p>
      <Button onClick={onAddWallet}>
        Add Wallet
      </Button>
      <Button onClick={onSearch} variant="secondary">
        Search
      </Button>
      {/* <Button onClick={onDownload} variant="secondary">
        Download
      </Button> */}

    </div>
  )
}