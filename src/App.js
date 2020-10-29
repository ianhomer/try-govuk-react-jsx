import { Template } from 'govuk-react-jsx';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Home } from './Home';
import { Bar } from './pages/Bar';
import { Foo } from './pages/Foo';

const headerProps = {
  serviceName: 'try-govuk-react-jsx',
  navigation: [
    {
      children: 'Foo',
      to: '/foo',
    },
    {
      children: 'Bar',
      to: '/bar',
    },
  ],
};

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Template header={headerProps}>
        <Helmet>
          <title>try govuk-react-jsx</title>
        </Helmet>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/foo">
          <Foo />
        </Route>

        <Route path="/bar">
          <Bar />
        </Route>
      </Template>
    </Router>
  );
}

export default App;
