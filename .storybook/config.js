import { configure } from '@kadira/storybook';

function loadStories() {
  // components
  require('../src/components/stories/button');
  // containers
  require('../src/containers/stories/login');
}

configure(loadStories, module);
