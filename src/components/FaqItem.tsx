import { component$ } from "@builder.io/qwik";

interface FaqItemProps {
    question: string;
    answer: string;
    state?: "collapsed" | "expanded";
    onClick?: () => void;
}
export const faqItem = component$<FaqItemProps>((props) => {
    return (
        <div class="">
        <div class="flex flex-row justify-between items-center bg-emerald-50 p-4 rounded-lg shadow-md cursor-pointer" onClick$={props.onClick}>
            <p>{props.question}</p>
            <span class="material-icons transition-all duration-500 ease-in-out">{props.state === "collapsed" ? "keyboard_arrow_right" : "keyboard_arrow_down"}</span>

        </div>
        
        <div class={`overflow-hidden transition-all duration-500 ease-in-out ${props.state === "collapsed"|| props.state === undefined ? "h-0" : "h-28"}`}>
            <div class="text-emerald-950 text-sm font-normal leading-6 p-4">
        {props.answer}    
        </div>
        </div>
        </div>
    );
});
export default faqItem;