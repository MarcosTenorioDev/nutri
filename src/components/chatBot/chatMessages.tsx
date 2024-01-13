import logo from '../../assets/images/logo.svg';

const ChatMessages = ({ messageBaloon, role, foodChat }: any) => {
  const renderMessage = (message: string) => {
    
    const lines = message.split('\n');
    return lines.map((line, index) => (
      <p key={index} className='p-2'>
        {line}
      </p>
    ));
  };

  return (
    <div className={role === 'user' ? 'flex justify-center flex-row-reverse items-start gap-4' : 'flex items-start gap-4'}>
      <img src={logo} alt='logo' className='h-8 rounded-full border-primary border-[0.1px] lg:h-12' />
      <div className='border-primary border-[1px] bg-white rounded-lg overflow-hidden font-primary text-xs lg:text-base'>
        {foodChat ? <img src={foodChat} alt='' className='rounded-b-lg w-full' /> : ''}
        {renderMessage(messageBaloon)}
      </div>
    </div>
  );
};

export default ChatMessages;
