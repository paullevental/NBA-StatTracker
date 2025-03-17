import Header from "../components/Header";
import SearchBar from "../components/searchBar";
import "../styles/general.css"
import "../styles/Fonts.css"
import "../styles/home.css"


export default function Home() {
    return(
        <div className="home_container">
        <Header />
        <SearchBar />
        <main className="home_main">
          <h1 className="home_title">NBA Stat Track</h1>
          <h2 className="home_description"> Explore data regarding NBA players</h2>
        </main>
      </div>
    )
}