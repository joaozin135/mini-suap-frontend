import type { LucideIcon } from "lucide-react";
import type { DetailedHTMLProps } from "react";


interface cardProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    icon: LucideIcon;
    text: string;
    value: string;
}

export function CardTop({ icon: Icon, text, value, className, ...props}: cardProps){
    return(

        

        
            <div id="card" className={`${className} bg-[#DCE9F5] flex flex-col rounded-2xl w-lg h-32`} {...props}>
                <div id="card-header" className="p-3 flex items-start gap-3">
                    <div id="card-icon" className="p-2 rounded-full bg-[#1C385B] text-white">
                        <Icon size={32} />  
                    </div>  
                    <div className="flex flex-col gap-2 ">
                        <h2 className="text-xl font-medium">{text}</h2>
                        <h1 className="text-4xl font-bold">{value}</h1>
                    </div>
                </div>
            </div>
    )
}
            {/* <div id="card" className="bg-white flex flex-col rounded-2xl w-lg h-32">
                <div id="card-header" className="p-3 flex items-start gap-3 ">
                    <div id="card-icon" className="p-2 rounded-full bg-[#D9D9D9]">
                        <LucideUserRound size={32} />  
                    </div>  
                    <div className="flex flex-col gap-2 ">
                        <h2 className="text-xl font-medium">{text}</h2>
                        <h1 className="text-4xl font-bold">17</h1>
                    </div>
                </div>
            </div> */}