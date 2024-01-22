import clsx from "clsx";
import {
    TComponent, TCta,
} from "@/types";

type TBannerProps = TComponent & {
	text?: string;
	cta?: TCta;
};

export default function Banner ({
    className,
    text = "You can implement a custom banner using the Cookiebot platform.",
    cta = {
        label: "Check out the docs",
        url: "https://support.cookiebot.com/hc/en-us/articles/360003921454-Can-I-build-my-own-fully-customized-cookie-consent-banner",
    },
}: TBannerProps) {
    return (
        <aside className={clsx("sticky top-0 z-20 bg-black py-3 text-white shadow-xl shadow-dark/10", className)}>
            <div className="flex justify-center 2xl:container">
                <div className="flex items-start justify-center">
                    <svg
                        className="mr-2 mt-0.5 h-5 w-5 shrink-0"
                        fill="none"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clipRule="evenodd"
                            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                            fill="currentColor"
                            fillRule="evenodd"
                        />
                    </svg>

                    <p className="max-w-prose text-white">
                        {text}
                    </p>

                    {cta && (
                        <a
                            className="ml-2 inline-flex items-center gap-x-1.5 whitespace-nowrap text-primary underline brightness-200"
                            href={cta.url}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {cta.label}

                            <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 15 15"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </aside>
    );
}