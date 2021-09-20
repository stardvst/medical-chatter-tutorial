import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';

import { Auth, ChannelContainer, ChannelListContainer } from './components';

import './App.css';

const apiKey = 'knup2phvnzyz';
const client = StreamChat.getInstance(apiKey);

const authToken = false;

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
