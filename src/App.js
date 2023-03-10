import Header from "./components/Header";
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  const personalDetails = {
    name: "JIMMY NI",
    location: "Bordeaux, FR",
    tagline: "I'm a Full-stack Developer",
    email: "nijimmy@outlook.fr",
    availability: "Open for work",
    brand: "I am a full-stack developer who has been in career transition for a year. I am naturally curious and passionate about new things, which allows me to adapt easily to new situations. Thanks to my technical skills and desire to create innovative solutions, I have excelled as a developer, consistently delivering high-quality work across the entire technology stack. Whether working on web applications or back-end systems, I am always ready to take on new challenges and push the boundaries of what is possible.",
  };
  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
