import bg from "../assets/2.webp"

const Home = () => {
  return (
    <>
    <div className="home">
      <main>
        <h1>TECHABHIK.COM</h1>
        <p>Solutions of your all Problems</p>
      </main>
    </div>

    <div className="home2">
      <img src={bg} alt="Desing " />
      <div>
        <h2>Our To Services</h2>
        <p>We are the best company for All of your solutuions</p>
      </div>
    </div>

    </>
  )
}

export default Home
