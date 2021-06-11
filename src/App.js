import { Provider } from 'react-redux';
import { Grid } from './components/Grid';
import { GameNavigation } from './components/GameNavigation';
import { Message } from './components/Message';
import './App.scss';

import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <h1 className="main__title">
          Find Pinkie Pie Game
        </h1>
        <div className="main__row">
          <img 
            className="main__pinkie"
            alt="Pinkie"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e18d9c76-4779-4084-9428-b663e0d20c10/d8lbezf-7c324a36-3ac8-4fa8-985b-ca656aa73e8e.png/v1/fill/w_263,h_250,strp/mad_baker_pinkie_pie_by_magister39_d8lbezf-250t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTczIiwicGF0aCI6IlwvZlwvZTE4ZDljNzYtNDc3OS00MDg0LTk0MjgtYjY2M2UwZDIwYzEwXC9kOGxiZXpmLTdjMzI0YTM2LTNhYzgtNGZhOC05ODViLWNhNjU2YWE3M2U4ZS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.A_GsV_epGgXhlHnOqReHqfBG0QZBrRtSFtjBqzGo9_4" 
          />
          <div className="main__message">
            <Message />
            <GameNavigation />
          </div>
        </div>
        <Grid /> 
      </div>
    </Provider>
  );
}

export default App;
