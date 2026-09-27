import './App.css'
import Card from './componets/card'

const characters = [
  {
    imageAlt: 'Hermione Granger',
    name: 'Hermione Granger',
    actor: 'Emma Watson',
    gender: 'female',
    house: 'Gryffindor',
    wandeCore: 'dragon heartstring',
    alive: 'yes',
  },
  {
    imageAlt: 'Draco Malfoy',
    name: 'Draco Malfoy',
    actor: 'Tom Felton',
    gender: 'male',
    house: 'Slytherin',
    wandeCore: 'unicorn tail-hair',
    alive: 'yes',
  },
]

function App() {

  return (
    <>
      <header>
        <div className="container">
          <div className="title">
            <h1>Harry Potter</h1>
            <p>View all characters from the Harry Potter universe</p>
          </div>
          <div className="input_box">
              <div className="box">
                <p>Name</p>
                <input
                type="text"
                placeholder = 'Herione'
                />
              </div>
              <div className="box">
                <p>School</p>
                <div className="select_wrap">
                  <select defaultValue="">
                    <option value="" disabled hidden>Choose one</option>
                    <option value="gryffindor">Gryffindor</option>
                    <option value="slytherin">Slytherin</option>
                    <option value="hufflepuff">Hufflepuff</option>
                    <option value="ravenclaw">Ravenclaw</option>
                  </select>
                  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
          </div>
        </div>
      </header>
      <main>
        <div className="cards">
          {characters.map((character) => (
            <Card key={character.name} {...character} />
          ))}
        </div>
      </main>
    </>
  )

}

export default App
