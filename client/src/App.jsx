import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';

import { ChannelContainer, ChannelListContainer } from './components';

import './App.css';

const apiKey = 'knup2phvnzyz';
const client = StreamChat.getInstance(apiKey);

const App = () => {
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
