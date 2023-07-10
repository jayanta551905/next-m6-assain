import { useRef } from "react";


const Content = () => {
    const formSubmit = (event) => {
        event.preventDefault();
    }

    const textRef = useRef();
    const displayText = () => {
        let text = textRef.current.value;
        if(text===""){
            alert("Please enter your text");
        }else{
            alert(text);
            textRef.current.value = "";
        }
    }
    return (
        <div className="h-32 w-full items-center justify-center bg-gray-100 rounded-md shadow-md">
            <div className="w-96 items-center just mx-auto py-8">
            <form action="" className="flex mx-auto" onSubmit={formSubmit}>
                <input type="text" ref = {textRef} placeholder="Enter your text here" className=" rounded-lg  appearance-none py-2 px-4 border border-gray-300 text-gray-700 w-full placeholder-gray-400 text-base shadow-sm outline-none"/>


                <button onClick={displayText} className="mx-4 py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold w-24 text-center rounded-md transition ease-in duration-200 text-base shadow-lg">Submit</button>
            </form>
            </div>
        </div>
    );
};

export default Content;