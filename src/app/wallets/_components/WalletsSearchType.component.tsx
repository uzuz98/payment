import { Checkbox } from "@/components/ui/checkbox";
import React, { FC } from "react";
import { EnumSearchCpnType, SearchCpnMultiOptions, SearchCpnType, SearchFilter } from "../_types/filter.types";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { Switch } from "@/components/ui/switch";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { PopoverContent } from "@radix-ui/react-popover";

interface IProps  {
  onToggleFilter: () => void
  enable: boolean
  item: SearchCpnType
  onChange: <T extends keyof SearchFilter = keyof SearchFilter> (key: T, value: SearchFilter[T]) => void
  value: SearchFilter[keyof SearchFilter]
}

interface IPropsMulti extends IProps {
  item: SearchCpnMultiOptions
}

interface IPropsDateTime extends IProps {
  value: SearchFilter['createdAt']
}

const WalletSearchInput: FC<IProps> = ({
  enable,
  onToggleFilter,
  item,
  onChange
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(item.key, e.target.value)
  }

  return (
    <div>
      <div className="flex items-center gap-x-2 mb-2">
        <Checkbox
          checked={enable}
          onCheckedChange={onToggleFilter}
          id={item.key}
          />
        <label htmlFor={item.key}>{item.label}</label>
      </div>

      <Input
        onChange={handleChange}
        id={item.key}
        placeholder={item.label}
      />
    </div>
  )
}

const WalletSearchSwitch: FC<IProps> = ({
  enable,
  item,
  onToggleFilter,
  onChange,
  value
}) => {
  const onCheckedChange = (checked: boolean) => {
    onChange(item.key, checked)
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-2 mb-2">
        <Checkbox
          checked={enable}
          onCheckedChange={onToggleFilter}
          id={item.key}
          />
        <label htmlFor={item.key}>{item.label}</label>
      </div>
      <Switch
        id="airplane-mode"
        checked={!!value}
        onCheckedChange={onCheckedChange}
      />
    </div>
  )
}

const WalletSearchMultiOptions: FC<IPropsMulti> = ({
  item,
  enable,
  onToggleFilter,
  value,
  onChange
}) => {
  const renderOption = () => {
    return item.options
      .map(option => {
        const isActive = Array.isArray(value) && value.some(val => val === option.value)

        const onPressedChange = (pressed: boolean) => {
          if(pressed) {
            // @ts-expect-error ...
            onChange(item.key, [...(value || []), option.value])
          } else {
            // @ts-expect-error ...
            onChange(item.key, value?.filter(val => val !== option.value))
          }
        }

        return (
          <Toggle
            pressed={isActive}
            disabled={!enable}
            key={item.key + option.value}
            variant="outline"
            onPressedChange={onPressedChange}
          >
            {option.label}
          </Toggle>
        )
      })
  }

  return (
    <div>
      <div className="flex items-center gap-x-2 mb-2">
        <Checkbox
          checked={enable}
          onCheckedChange={onToggleFilter}
          id={item.key}
          />
        <label htmlFor={item.key}>{item.label}</label>
      </div>
      <div className="flex flex-wrap gap-2">
        {renderOption()}
      </div>
    </div>
  )
}

const WalletSearchDateTime: FC<IPropsDateTime> = ({
  enable,
  onToggleFilter,
  item,
  value
}) => {
  return (
    <div>
      <div className="flex items-center gap-x-2 mb-2">
        <Checkbox
          checked={enable}
          onCheckedChange={onToggleFilter}
          id={item.key}
          />
        <label htmlFor={item.key}>{item.label}</label>
      </div>
      <Card>
        <CardHeader/>
        <CardContent>
          <div className="flex flex-wrap gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] justify-start text-left font-normal",
                  !value?.from && "text-muted-foreground"
                )}
              >
                <CalendarIcon />
                {/* {value?.from ? format(value?.from, "PPP") : <span>Pick a date</span>} */}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              {/* <Calendar
                mode="single"
                selected={value?.from}
                onSelect={(date) => {
                  console.log("🩲 🩲 => date:", date)
                }}
                initialFocus
              /> */}
            </PopoverContent>
          </Popover>
          <Calendar
            onSelect={(dateTime) => {
              console.log(dateTime)
            }}
            mode='single'
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export const WalletsSearchType: FC<IProps> = (props) => {
  const {item} = props
  switch (item.type) {
    case EnumSearchCpnType.INPUT:
      return (
        <WalletSearchInput
          {...props}
        />
      )
    case EnumSearchCpnType.MULTI_OPTIONS:
      return (
        <WalletSearchMultiOptions
          {...props}
          item={item as SearchCpnMultiOptions}
        />
      )
    case EnumSearchCpnType.SWITCH:
      return (
        <WalletSearchSwitch
          {...props}
        />
      )
    case EnumSearchCpnType.DATE_TIME:
      return (
        <WalletSearchDateTime
          {...props}
          value={props.value as SearchFilter['createdAt']}
        />
      )
  }
}