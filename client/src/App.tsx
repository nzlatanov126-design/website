import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import Testimonials from "@/pages/Testimonials";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Quote from "@/pages/Quote";
import Painting from "@/pages/services/Painting";
import PlasterPutty from "@/pages/services/PlasterPutty";
import Tiles from "@/pages/services/Tiles";
import Electrical from "@/pages/services/Electrical";
import Plumbing from "@/pages/services/Plumbing";
import Drywall from "@/pages/services/Drywall";
import Flooring from "@/pages/services/Flooring";
import BathroomRenovation from "@/pages/projects/BathroomRenovation";
import KitchenRenovation from "@/pages/projects/KitchenRenovation";
import BedroomRenovation from "@/pages/projects/BedroomRenovation";
import OfficeRenovation from "@/pages/projects/OfficeRenovation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/quote" component={Quote} />
      <Route path="/services/painting" component={Painting} />
      <Route path="/services/plaster-putty" component={PlasterPutty} />
      <Route path="/services/tiles" component={Tiles} />
      <Route path="/services/electrical" component={Electrical} />
      <Route path="/services/plumbing" component={Plumbing} />
      <Route path="/services/drywall" component={Drywall} />
      <Route path="/services/flooring" component={Flooring} />
      <Route path="/projects/bathroom-renovation" component={BathroomRenovation} />
      <Route path="/projects/kitchen-renovation" component={KitchenRenovation} />
      <Route path="/projects/bedroom-renovation" component={BedroomRenovation} />
      <Route path="/projects/office-renovation" component={OfficeRenovation} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
