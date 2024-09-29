import React from 'react';
import { FaUser, FaWallet } from 'react-icons/fa';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';

interface ProfileComponentProps {
  name: string;
  username: string;
  balance: number;
  profitLoss: number;
}

const ProfileComponent: React.FC<ProfileComponentProps> = ({ name, username, balance, profitLoss }) => {
  const isProfitable = profitLoss >= 0;

  return (
    <section className=" text-slate-700 p-10 flex flex-col items-center justify-center pb-24">
      <div className="flex flex-col justify-center text-center items-center mb-4">
        <div className="bg-primary p-3 rounded-full ">
          <FaUser className="w-10 h-10 text-slate-50" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-400">@{username}</p>
        </div>
      </div>
      <div className='flex max-md:flex-col gap-2 justify-between w-3/4'>
      <div className='mt-5 w-1/2 max-md:w-full'>
      <h3 className='text-xl font-semibold mb-2'>About</h3>
      <p className='text-lg text-slate-400 max-w-96'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, dolore cupiditate enim eum, id architecto, provident saepe exercitationem soluta aut blanditiis? Voluptatum, vero dolores porro sit, autem magnam doloribus rem molestiae repudiandae aliquid repellat velit amet excepturi fugiat veritatis placeat veniam. Aliquam nihil corrupti quidem nulla! Eveniet illo possimus consectetur?</p>
      </div>
      
      <div className="grid grid-cols-1 w-1/2 max-md:w-full gap-4 mt-6">
        <div className="bg-primary p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <FaWallet className="w-8 h-8 text-slate-50" />
            <span className="text-sm text-slate-200">Total Balance</span>
          </div>
          <p className="text-4xl font-bold mt-2 text-slate-50">${balance.toLocaleString()}</p>
        </div>
        
        <div className="bg-slate-50 shadow-lg p-6 rounded-lg">
          <div className="flex items-center justify-between">
            {isProfitable ? (
              <IoMdArrowDropup className="w-6 h-6 text-green-400" />
            ) : (
              <IoMdArrowDropdown className="w-6 h-6 text-red-400" />
            )}
            <span className="text-sm text-gray-400">Profit/Loss</span>
          </div>
          <p className={`text-2xl font-bold mt-2 ${isProfitable ? 'text-green-400' : 'text-red-400'}`}>
            {isProfitable ? '+' : '-'}${Math.abs(profitLoss).toLocaleString()}
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileComponent;