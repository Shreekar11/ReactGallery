import { programmingInfo } from "./Data";
import { useState } from 'react';

const Content = () => {

    const [index, setIndex] = useState(0);

    function handleClickDec(){
        if(index === 0){
            setIndex(programmingInfo.length - 1);
        }else{
            setIndex(index - 1);
        }
    }

    function handleClickInc(){
        if(index === programmingInfo.length - 1){
            setIndex(0);
        }else{
            setIndex(index + 1);
        }
    }

    let programming = programmingInfo[index];

    return ( 
        <div className="main-content">  
            <div className="content flex mt-32">
                <div className="info h-4/5 w-3/4 m-auto flex">
                        <div className="img-side w-2/5 m-5">
                            <img src={programming.url} alt="" />
                        </div>
                        <div className="info-side w-2/3 m-5">
                            <h1 className="flex justify-center m-5 text-5xl font-bold text-sky-400">
                                {programming.name}
                            </h1>
                            <p className=" m-5 text-xl font-normal text-slate-50">
                                {programming.description}
                            </p>
                        </div>
                </div>
            </div>

        <h2 className=" m-5 flex justify-center text-xl text-slate-50 font-semibold">
            ({index + 1} / {programmingInfo.length})
        </h2>

        <div className="buttons flex justify-center text-xl text-slate-50 font-semibold">
            <button className="prev" onClick={handleClickDec}>Previous</button>
            <button className="next" onClick={handleClickInc}>Next</button>
        </div>

        </div>
     );
}
 
export default Content;