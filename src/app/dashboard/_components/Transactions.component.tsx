'use client'
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export const Transactions = () => {
  return (
    <div id="dashboard-transactions" className="mt-8">
      <div className="flex justify-between items-center gap-x-8">
        <div className="flex-1">
          <Card>
            <CardHeader>
              <div className="flex gap-x-8 items-end">
                <p className="font-semibold text-4xl">Transactions</p>
                <p className="text-2xl">by Currency</p>
              </div>
            </CardHeader>
            <CardContent className="px-2 sm:p-6">
              <ChartContainer
                config={{
                  views: {
                    label: "Page Views",
                  },
                  desktop: {
                    label: "Desktop",
                    color: "hsl(var(--chart-1))",
                  },
                  mobile: {
                    label: "Mobile",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="aspect-auto h-[250px] w-full"
              >
                <BarChart
                  accessibilityLayer
                  data={[
                    { date: "2024-04-01", desktop: 222, mobile: 150 },
                    { date: "2024-04-02", desktop: 97, mobile: 180 },
                    { date: "2024-04-03", desktop: 167, mobile: 120 },
                  ]}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    minTickGap={32}
                    tickFormatter={(value) => {
                      const date = new Date(value)
                      return date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })
                    }}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        className="w-[150px]"
                        nameKey="views"
                        labelFormatter={(value) => {
                          return new Date(value).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                        }}
                      />
                    }
                  />
                  <Bar dataKey={'desktop'} fill={`var(--color-desktop)`} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
        <div className="flex-1">
          <Card>
            <CardHeader>
              <div className="flex gap-x-8 items-end">
                <p className="font-semibold text-4xl">Transactions</p>
                <p className="text-2xl">by Blockchain</p>
              </div>
            </CardHeader>
            <CardContent className="px-2 sm:p-6">
              <ChartContainer
                config={{
                  views: {
                    label: "Page Views",
                  },
                  desktop: {
                    label: "Desktop",
                    color: "hsl(var(--chart-1))",
                  },
                  mobile: {
                    label: "Mobile",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="aspect-auto h-[250px] w-full"
              >
                <BarChart
                  accessibilityLayer
                  data={[
                    { date: "2024-04-01", desktop: 222, mobile: 150 },
                    { date: "2024-04-02", desktop: 97, mobile: 180 },
                    { date: "2024-04-03", desktop: 167, mobile: 120 },
                  ]}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    minTickGap={32}
                    tickFormatter={(value) => {
                      const date = new Date(value)
                      return date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })
                    }}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        className="w-[150px]"
                        nameKey="views"
                        labelFormatter={(value) => {
                          return new Date(value).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                        }}
                      />
                    }
                  />
                  <Bar dataKey={'desktop'} fill={`var(--color-desktop)`} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}