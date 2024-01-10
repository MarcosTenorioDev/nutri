import logo from '../../assets/images/logo.svg'

const ChatMessages = ({ messageBaloon, role, foodChat } : any) => {

  return (
    <div className={role === "user"  ? "flex justify-center flex-row-reverse items-start gap-4"  : "flex items-start gap-4"}>
      <img src={logo} alt="logo" className="h-8 rounded-full border-primary border-[0.1px]"/>
      <div className='border-primary border-[1px] bg-white rounded-lg overflow-hidden font-primary text-xs'>
        {foodChat? <img src={foodChat} alt="" className='rounded-b-lg'/> : ''}
      <p className='p-2'>{messageBaloon}</p>
      </div>
      
    </div>
  );
};

export default ChatMessages;