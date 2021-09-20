import { Avatar, useChatContext } from 'stream-chat-react';
const TeamChannelPreview = ({ channel, type }) => {
  const { channel: activeChannel, client } = useChatContext();

  const ChannelPreview = () => (
    <p className="channel-review__item">
      # {channel?.data?.name || channel?.data?.id}
    </p>
  );

  const DirectPreview = () => {
    const members = Object.values(channel.state.members).filter(
      ({ user }) => user.id !== client.userID
    );
    return (
      <div className="channel-review__item single">
        <Avatar
          image={members[0]?.user?.image}
          name={members[0]?.user?.fullName}
        />
        <p>{members[0]?.user?.fullName}</p>
      </div>
    );
  };

  return (
    <div
      className={
        channel?.id === activeChannel?.id
          ? 'channel-review__wrapper__select'
          : 'channel-review__wrapper'
      }
      onClick={() => {
        console.log(channel);
      }}
    >
      {type === 'team' ? <ChannelPreview /> : <DirectPreview />}
    </div>
  );
};

export default TeamChannelPreview;
