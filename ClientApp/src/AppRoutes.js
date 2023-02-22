import { ContactForm } from "./components/ContactForm";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/contact',
    element: <ContactForm />
  }
];

export default AppRoutes;
