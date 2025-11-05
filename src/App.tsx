import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import Locations from "@/pages/Locations";
import Story from "@/pages/Story";
import Catering from "@/pages/Catering";
import Karriere from "./pages/Karriere";
import Contact from "@/pages/Contact";
import Impressum from "@/pages/Impressum";
import Datenschutz from "@/pages/Datenschutz";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route path="/locations" component={Locations} />
      <Route path="/story" component={Story} />
      <Route path="/catering" component={Catering} />
<Route path="/karriere" component={Karriere} />
      <Route path="/contact" component={Contact} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/datenschutz" component={Datenschutz} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <LanguageProvider>
          <TooltipProvider>
            <SEO />
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">
                <Router />
              </main>
              <Footer />
            </div>
            <Toaster />
          </TooltipProvider>
        </LanguageProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
