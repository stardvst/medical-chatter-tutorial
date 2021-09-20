import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { Auth, ChannelContainer, ChannelListContainer } from './components';

import './App.css';

const apiKey = 'knup2phvnzyz';
const client = StreamChat.getInstance(apiKey);

const cookies = new Cookies();
const authToken = cookies.get('token');

if (authToken) {
  client.connectUser(
    {
      token: cookies.get('token'),
      name: cookies.get('username'),
      fullName: cookies.get('fullName'),
      id: cookies.get('userId'),
      phoneNumber: cookies.get('phoneNumber'),
      image: cookies.get('avatarURL'),
      hashedPassword: cookies.get('hashedPassword'),
    },
    authToken
  );
}

const App = () => {
  if (!authToken) return <Auth />;

  return (
    <div class="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
