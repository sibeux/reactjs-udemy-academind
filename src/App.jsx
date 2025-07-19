import { CORE_CONCEPT } from "./data";
import Header from "./components/Header/Header";
import { CoreConcept, CoreConceptAlternative } from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPT[0].title}
              description={CORE_CONCEPT[0].description}
              image={CORE_CONCEPT[0].image}
            />
            {/* Shortcut, spread operator */}
            <CoreConcept {...CORE_CONCEPT[1]} />
            <CoreConceptAlternative {...CORE_CONCEPT[2]} />
            <CoreConceptAlternative {...CORE_CONCEPT[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>State</TabButton>
            <TabButton>Props</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
