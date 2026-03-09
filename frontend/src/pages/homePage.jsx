import Header from "../components/header";
import Info from "../components/info";
import ResumeUpload from "../components/ResumeUpload";
import JobDescription from "../components/JobDescription";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#21202e]">
        <Info />
        <ResumeUpload />
        <JobDescription />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
