import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card";

const invoices = [
  {
    transactionId: '0x1234567890',
    blockchain: 'Ethereum',
    amount: '0.1',
    type: 'Deposit',
    status: 'Completed',
    description: 'Deposit to wallet',
    date: '2021-10-10',
    manage: 'Manage'
  },
  {
    transactionId: '0x1234567891',
    blockchain: 'Ethereum',
    amount: '0.2',
    type: 'Withdrawal',
    status: 'Pending',
    description: 'Withdrawal from wallet',
    date: '2021-10-11',
    manage: 'Manage'
  },
  {
    transactionId: '0x1234567892',
    blockchain: 'Bitcoin',
    amount: '0.3',
    type: 'Deposit',
    status: 'Completed',
    description: 'Deposit to wallet',
    date: '2021-10-12',
    manage: 'Manage'
  },
  {
    transactionId: '0x1234567893',
    blockchain: 'Bitcoin',
    amount: '0.4',
    type: 'Withdrawal',
    status: 'Failed',
    description: 'Withdrawal from wallet',
    date: '2021-10-13',
    manage: 'Manage'
  },
  {
    transactionId: '0x1234567894',
    blockchain: 'Ethereum',
    amount: '0.5',
    type: 'Deposit',
    status: 'Completed',
    description: 'Deposit to wallet',
    date: '2021-10-14',
    manage: 'Manage'
  },
  {
    transactionId: '0x1234567895',
    blockchain: 'Ethereum',
    amount: '0.6',
    type: 'Withdrawal',
    status: 'Pending',
    description: 'Withdrawal from wallet',
    date: '2021-10-15',
    manage: 'Manage'
  },
  {
    transactionId: '0x1234567896',
    blockchain: 'Bitcoin',
    amount: '0.7',
    type: 'Deposit',
    status: 'Completed',
    description: 'Deposit to wallet',
    date: '2021-10-16',
    manage: 'Manage'
  },
  {
    transactionId: '0x1234567897',
    blockchain: 'Bitcoin',
    amount: '0.8',
    type: 'Withdrawal',
    status: 'Failed',
    description: 'Withdrawal from wallet',
    date: '2021-10-17',
    manage: 'Manage'
  },
  {
    transactionId: '0x1234567898',
    blockchain: 'Ethereum',
    amount: '0.9',
    type: 'Deposit',
    status: 'Completed',
    description: 'Deposit to wallet',
    date: '2021-10-18',
    manage: 'Manage'
  },
  {
    transactionId: '0x1234567899',
    blockchain: 'Ethereum',
    amount: '1.0',
    type: 'Withdrawal',
    status: 'Pending',
    description: 'Withdrawal from wallet',
    date: '2021-10-19',
    manage: 'Manage'
  }
];

export type Invoice = {
  transactionId: string;
  blockchain: string;
  amount: string;
  type: string;
  status: string;
  description: string;
  date: string;
  manage: string;
};

export const RecentTransactions = () => {
  const renderTBody = () => {
    if (!invoices.length) {
      return <p>No data</p>;
    }
    return invoices.map((invoice) => (
      <TableRow key={invoice.transactionId}>
        <TableCell className="font-medium">{invoice.transactionId}</TableCell>
        <TableCell>{invoice.blockchain}</TableCell>
        <TableCell>{invoice.amount}</TableCell>
        <TableCell>{invoice.type}</TableCell>
        <TableCell>{invoice.status}</TableCell>
        <TableCell>{invoice.description}</TableCell>
        <TableCell>{invoice.date}</TableCell>
        <TableCell className="text-right">{invoice.manage}</TableCell>
      </TableRow>
    ));
  };

  return (
    <div id="dashboard-recent-transactions" className="mt-8">
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Transaction Id</TableHead>
              <TableHead>Blockchain</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Date</TableHead>
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