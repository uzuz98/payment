import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

export const SelectAccount = () => {
  return (
    <div className="flex-1">
      <p className="text-3xl font-semibold mb-8">Select Account</p>
      <label htmlFor="select-account-input" className="font-semibold">Search for an Account</label>
      <Input
        placeholder="Search accounts by typing text contained in account fields or paste an accountId "
        id="select-account-input"
        className="my-4"
      />
      <p className="font-semibold">Account *</p>
      <p className="mb-4">No Accounts Found</p>
      <p>Click <Link className="text-yellow-600" href="/accounts/add">here</Link> to create new account</p>
      <div className="flex flex-1 mt-4 w-full justify-between items-center gap-x-4">
        <div className="flex-[2]">
          <Button className="w-full" size="lg">
            Next
          </Button>
        </div>
        <div className="flex-1">
          <Button className="w-full" size="lg" variant="secondary">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
}