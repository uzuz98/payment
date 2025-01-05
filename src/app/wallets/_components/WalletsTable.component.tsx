import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";

type WalletInfo = {
  walletId: string;
  name: string;
  blockchain: string;
  currencies: string[];
  address: string;
  updated: string;
  manage: string;
};

const data: WalletInfo[] = [
  {
    walletId: '0xabcdef1234',
    name: 'Main Wallet',
    blockchain: 'Ethereum',
    currencies: ['ETH', 'USDT'],
    address: '0x1234567890abcdef',
    updated: '2021-10-10',
    manage: 'Manage'
  },
  {
    walletId: '0xabcdef1235',
    name: 'Savings Wallet',
    blockchain: 'Bitcoin',
    currencies: ['BTC'],
    address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    updated: '2021-10-11',
    manage: 'Manage'
  },
  {
    walletId: '0xabcdef1236',
    name: 'Trading Wallet',
    blockchain: 'Ethereum',
    currencies: ['ETH', 'DAI'],
    address: '0xabcdef1234567890',
    updated: '2021-10-12',
    manage: 'Manage'
  },
  {
    walletId: '0xabcdef1237',
    name: 'Investment Wallet',
    blockchain: 'Bitcoin',
    currencies: ['BTC', 'LTC'],
    address: '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy',
    updated: '2021-10-13',
    manage: 'Manage'
  },
  {
    walletId: '0xabcdef1238',
    name: 'Backup Wallet',
    blockchain: 'Ethereum',
    currencies: ['ETH'],
    address: '0xabcdefabcdefabcdef',
    updated: '2021-10-14',
    manage: 'Manage'
  },
  {
    walletId: '0xabcdef1239',
    name: 'Business Wallet',
    blockchain: 'Bitcoin',
    currencies: ['BTC', 'BCH'],
    address: 'bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kygt080',
    updated: '2021-10-15',
    manage: 'Manage'
  },
  {
    walletId: '0xabcdef1240',
    name: 'Personal Wallet',
    blockchain: 'Ethereum',
    currencies: ['ETH', 'USDC'],
    address: '0x1234567890abcdef1234',
    updated: '2021-10-16',
    manage: 'Manage'
  },
  {
    walletId: '0xabcdef1241',
    name: 'Family Wallet',
    blockchain: 'Bitcoin',
    currencies: ['BTC', 'DOGE'],
    address: '1BoatSLRHtKNngkdXEeobR76b53LETtpyT',
    updated: '2021-10-17',
    manage: 'Manage'
  },
  {
    walletId: '0xabcdef1242',
    name: 'Travel Wallet',
    blockchain: 'Ethereum',
    currencies: ['ETH', 'LINK'],
    address: '0xabcdefabcdefabcdef12',
    updated: '2021-10-18',
    manage: 'Manage'
  },
  {
    walletId: '0xabcdef1243',
    name: 'Emergency Wallet',
    blockchain: 'Bitcoin',
    currencies: ['BTC'],
    address: '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLz',
    updated: '2021-10-19',
    manage: 'Manage'
  }
];

export const WalletsTable = () => {
  const renderTBody = () => {
    if (!data.length) {
      return <TableRow>No data</TableRow>;
    }
    return data.map((item) => (
      <TableRow key={item.walletId}>
        <TableCell className="font-medium">{item.walletId}</TableCell>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.blockchain}</TableCell>
        <TableCell>{item.currencies.join(',')}</TableCell>
        <TableCell>{item.address}</TableCell>
        <TableCell>{item.updated}</TableCell>
        <TableCell className="text-right">{item.manage}</TableCell>
      </TableRow>
    ));
  };

  return (
    <div id="dashboard-recent-transactions" className="mt-8 flex-1">
      <Card className="flex-1">
        <Table className="w-full flex-1">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Wallet Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Blockchain</TableHead>
              <TableHead>Currencies</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Updated</TableHead>
              <TableHead className="text-right">Manage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {renderTBody()}
          </TableBody>
          <TableFooter>
            {/* <TableRow>
              <TableCell colSpan={7}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow> */}
          </TableFooter>
        </Table>
      </Card>
    </div>
  );
};