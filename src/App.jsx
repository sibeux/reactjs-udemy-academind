import { useState } from "react";

import { CORE_CONCEPT } from "./data";
import Header from "./components/Header/Header";
import { CoreConcept, CoreConceptAlternative } from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  // Harus di dalam function component dan paling atas/top level.
  const [selectedTopic, setSelectedTopic] = useState('Please click a button');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
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
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
