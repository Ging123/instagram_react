import MainHeader from './components/MainHeader';
import UserInfoContainer from './components/UserInfoContainer';
import ContainerOfPublicity from './components/ContainerOfPublicity';
import FollowBarForCellPhone from './components/FollowBarForCellPhone';
import './style.scss';

const Home = ({user}) => {
  document.title = `${user.user.name} • Instagram photos and videos`;

  return (
    <>
      <MainHeader user={user}/>
      <section id="home-page-screen-container">
        <div className="sub-home-page-container">
          <UserInfoContainer user={user}/>
          <FollowBarForCellPhone/>
          <ContainerOfPublicity/>
        </div>
      </section>
    </>
  )
}

export default Home;
