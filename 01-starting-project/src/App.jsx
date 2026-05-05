import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  let tabContent = 'Please click a button.';
  
  function handleOnSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    tabContent = selectedButton;
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleOnSelect("Components")}>Components</TabButton>
            <TabButton onSelect={() => handleOnSelect("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => handleOnSelect("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleOnSelect("State")}>State</TabButton>
          </menu>
          { tabContent }
        </section>
      </main>
    </div>
  );
}

export default App;
