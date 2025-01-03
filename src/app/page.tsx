import React from "react";
import Navbar from "./components/Navbar";
import Mega from "./components/Mega";
import AuthorCard from "./components/AuthorCard";
import Featurre from "./components/Featurre";
import Footer from "./components/Footer";

export default function Home() {
  return (
<div>
  
  <Navbar />
  <Featurre />
  <Mega />
  <AuthorCard />
  <Footer />
  
</div>
);
}
