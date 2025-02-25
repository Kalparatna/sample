import Calculator from "@/components/ui/calculator";

export default function CalculatorPage() {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Mortgage Calculator</h1>
        <p className="text-gray-600 mb-8">
          Estimate your monthly mortgage payments by entering your home price, down payment, and loan details below.
        </p>
        
        <Calculator />
      </div>
    </div>
  );
}
