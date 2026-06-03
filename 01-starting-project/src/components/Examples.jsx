import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleOnSelect(selectedButtonText) {
        setSelectedTopic(selectedButtonText);
    }

    return (
        <Section title="Examples" id="examples">
            <menu>
                <TabButton
                    isSelected={selectedTopic === 'components'}
                    onClick={() => handleOnSelect("components")}>Components</TabButton>
                <TabButton
                    isSelected={selectedTopic === 'jsx'}
                    onClick={() => handleOnSelect("jsx")}>JSX</TabButton>
                <TabButton
                    isSelected={selectedTopic === 'props'}
                    onClick={() => handleOnSelect("props")}>Props</TabButton>
                <TabButton
                    isSelected={selectedTopic === 'state'}
                    onClick={() => handleOnSelect("state")}>State</TabButton>
            </menu>
            {!selectedTopic && <p>Please select a topic.</p>}
            {selectedTopic && <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>}
        </Section>
    );
}