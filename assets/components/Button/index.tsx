import { type LucideIcon } from "lucide-react"
import { Link, type LinkProps } from "react-router-dom";

interface ButtonMassaProps extends LinkProps {
    icon: LucideIcon;
    text: string;
    to: string;
}

export function ButtonMassa({ icon: Icon, text, to, className, ...props}: ButtonMassaProps){
   return(
        <Link
            to={to}
            id={`button-${text.toLowerCase().replace(/\s/g, '-')}`}
            className={`flex items-center w-full gap-2 p-2 rounded hover:bg-white/10 transition-colors ${className}`} 
            {...props}
        >     
            <div className="justify-start items-center flex p-4 gap-3">
                <Icon size={22} />
                <h3 className="font-light">{text}</h3>
            </div>
        </Link>
    )
}