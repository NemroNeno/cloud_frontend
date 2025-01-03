import MainNavigation from "../components/MainNavigation/MainNavigation";
import { useIsAuthenticated } from "react-auth-kit";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Videos from './../components/Videos/Videos';
import Footer from "../components/Footer/Footer";

const VideosPage = () => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  return (
    <>
      {isAuthenticated() ? (
        <>
          <MainNavigation />
          <Videos />
          <Footer />
        </>
      ) : ""}
    </>
  );
};

export default VideosPage;
