import { privacyPolicyList } from '../utils/constants';


const Info: React.FC = () => {

  return (
    <div className="pt-10 px-5">
      <h1 className="text-2xl font-bold mb-3 text-slate-700">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-8">Last updated: 28 October 2024</p>
      
      {privacyPolicyList?.map((item, index)=>(
         <div className="collapse collapse-arrow bg-base-200 mb-3" key={index}>
         <input type="radio" name="my-accordion-2" />
         <div className="collapse-title text-xl font-medium">{item?.title}</div>
         <div className="collapse-content">
           <p>{item?.content}</p>
         </div>
       </div>
      ))}
    </div>
  );
};

export default Info;