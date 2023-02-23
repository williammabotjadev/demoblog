import ContactForm from "./components/ContactForm";
import Home from "./components/Home";
import SingleArticle from "./components/SingleArticle";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/contact',
    element: <ContactForm />
  },
  {
    path: '/article/:id',
    element: <SingleArticle />
  }
];

export default AppRoutes;
