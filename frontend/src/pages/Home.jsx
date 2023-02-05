import HomeHeading from "../components/HomeHeading";
import HomeSlider from "../components/HomeSlider";
import HomeCategories from "../components/HomeCategories";


function Home() {
  return (
    <main className="home-content">
      <HomeHeading />
      <HomeSlider />
      <HomeCategories />
    </main>
  )
}

export default Home
