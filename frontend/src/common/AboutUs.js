import React, { useEffect, useState } from "react";
import Loader from "./Loader/Loader";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? <Loader /> : <div>Hello About Us.</div>;
};

export default AboutUs;
