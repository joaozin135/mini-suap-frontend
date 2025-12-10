import type { LucideIcon } from "lucide-react";
import type { DetailedHTMLProps } from "react";


interface cardProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    icon: LucideIcon;
    text: string;
    description: string;
    value: string;
}

export function CardTop({ icon: Icon, text, value, description, className, ...props}: cardProps){
    return(
            <div id="card" className={`${className} bg-[#DCE9F5] flex flex-col rounded-2xl w-sm h-32 border-1 border-border`} {...props}>
                <div id="card-header" className="p-3 flex items-start gap-3">
                    <div id="card-icon" className="p-2 rounded-full bg-background text-white">
                        <Icon size={32} />  
                    </div>  
                    <div className="flex flex-col gap-2 ">
                        <h2 className="text-xl font-regular">{text}</h2>
                        <h1 className="text-4xl font-semibold">{value}</h1>
                        <h3 className="font-light text-border">{description}</h3>
                    </div>
                </div>
            </div>
    )
}