import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/ui/navbar";
import Home from "@/pages/home";
import About from "@/pages/about";
import Calculator from "@/pages/calculator";
import Start from "@/pages/start";

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/start" component={Start} />
        <Route path="/" component={Home} />
        <Route path="/about-us" component={About} />
        <Route path="/mortgage-calculator" component={Calculator} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;