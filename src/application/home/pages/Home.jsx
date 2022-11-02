import '../../../styles/application/home/pages/Home.css';
import { LayoutPage } from '../components/LayoutPage';

export const Home = () => {
  return (
    <div className="App">
      <LayoutPage>
        <header className="App-header">
          <img src={'./alkemy_logo.svg'} className="App-logo" alt="logo" />
          <p>Bienvenido a AlkyBank</p>
        </header>
      </LayoutPage>
    </div>
  );
};
