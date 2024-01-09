import logo from '../../assets/images/logo.svg'

const ChatMessages = ({ messageBaloon, role } : any) => {

  return (
    <div className={role === "user"  ? "flex justify-center flex-row-reverse items-center gap-4"  : "flex items-center gap-4"}>
      <img src={logo} alt="logo" className="h-8 rounded-full border-primary border-[0.1px]"/>
      <p className='border-primary border-[1px] p-2 bg-white rounded-lg font-primary text-xs'>{messageBaloon}</p>
    </div>
  );
};

export default ChatMessages;