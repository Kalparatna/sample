import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertUserSchema, type InsertUser } from "@shared/schema";
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
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Start() {
  const { toast } = useToast();

  const form = useForm<InsertUser>({
    resolver: zodResolver(insertUserSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(data: InsertUser) {
    try {
      await apiRequest("POST", "/api/users", data);
      toast({
        title: "Success!",
        description: "Your account has been created.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <h1 className="text-4xl font-bold mb-6">Start your home journey</h1>
            <p className="text-xl text-gray-600 mb-8">
              Create your account to unlock personalized rates and expert guidance.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 mt-1">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Instant online pre-approval</h3>
                  <p className="text-gray-600">Get pre-approved in minutes, not days</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-6 w-6 mt-1">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">$0 lender fees</h3>
                  <p className="text-gray-600">Save thousands on your mortgage</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-6 w-6 mt-1">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">24/7 support</h3>
                  <p className="text-gray-600">Get help whenever you need it</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Create your account</h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormDescription>
                            We'll send your pre-approval letter to this email
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Create password</FormLabel>
                          <FormControl>
                            <Input 
                              type="password" 
                              placeholder="Must be at least 8 characters"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full text-lg h-12">
                      Create Account
                    </Button>

                    <p className="text-center text-sm text-gray-500">
                      By creating an account, you agree to Better's Terms of Service and Privacy Policy
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}