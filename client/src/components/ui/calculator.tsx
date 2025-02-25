import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { mortgageCalculatorSchema, type InsertMortgageCalculation } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function Calculator() {
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [breakdown, setBreakdown] = useState<{
    principal: number;
    taxes: number;
    insurance: number;
  } | null>(null);

  const form = useForm<InsertMortgageCalculation>({
    resolver: zodResolver(mortgageCalculatorSchema),
    defaultValues: {
      homePrice: "300000",
      downPayment: "60000",
      loanTerm: "30",
      interestRate: "3.5",
      propertyTax: "2400",
      insurance: "1200",
      zipCode: "",
    },
  });

  function calculateMortgage(data: InsertMortgageCalculation) {
    const principal = Number(data.homePrice) - Number(data.downPayment);
    const monthlyRate = Number(data.interestRate) / 100 / 12;
    const numberOfPayments = Number(data.loanTerm) * 12;

    const monthlyPrincipalAndInterest =
      (principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const monthlyTaxes = Number(data.propertyTax || 0) / 12;
    const monthlyInsurance = Number(data.insurance || 0) / 12;

    const totalMonthlyPayment = monthlyPrincipalAndInterest + monthlyTaxes + monthlyInsurance;

    setMonthlyPayment(Math.round(totalMonthlyPayment));
    setBreakdown({
      principal: Math.round(monthlyPrincipalAndInterest),
      taxes: Math.round(monthlyTaxes),
      insurance: Math.round(monthlyInsurance),
    });
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(calculateMortgage)} className="space-y-6">
            <FormField
              control={form.control}
              name="homePrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Home Price</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5">$</span>
                      <Input type="text" className="pl-7" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="downPayment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Down Payment</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5">$</span>
                      <Input type="text" className="pl-7" {...field} />
                    </div>
                  </FormControl>
                  <FormDescription>
                    {form.watch("homePrice") &&
                      `${Math.round((Number(form.watch("downPayment")) / Number(form.watch("homePrice"))) * 100)}% of home price`
                    }
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="loanTerm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Loan Term</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input type="text" {...field} />
                        <span className="absolute right-3 top-2.5 text-gray-500">years</span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="interestRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Interest Rate</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input type="text" {...field} />
                        <span className="absolute right-3 top-2.5 text-gray-500">%</span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full">Calculate Payment</Button>
          </form>
        </Form>
      </div>

      {monthlyPayment && breakdown && (
        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Monthly Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary mb-6">
              ${monthlyPayment.toLocaleString()}
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Principal & Interest</span>
                <span className="font-semibold">${breakdown.principal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Property Taxes</span>
                <span className="font-semibold">${breakdown.taxes.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Home Insurance</span>
                <span className="font-semibold">${breakdown.insurance.toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}