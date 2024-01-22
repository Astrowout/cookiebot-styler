import {
    Banner, CodeSnippet, Hero, Card, Theme, CSSCode,
} from "./components";
import {
    HTML_SNIPPET, JS_SNIPPET,
} from "./snippets";

export default function App () {
    const cardClassNames = "lg:col-start-5 lg:col-span-full";

    return (
        <div className="flex min-h-screen flex-col">
            <Banner />

            <Hero />

            <main className="grid grow grid-cols-1 items-start gap-y-6 pb-8 2xl:container lg:grid-cols-12">
                <Card
                    className={cardClassNames}
                    number={1}
                    title="Theme configuration"
                >
                    <Theme />
                </Card>

                <Card
                    className={cardClassNames}
                    description="Copy the HTML snippet and paste it in the Cookiebot HTML box."
                    number={2}
                    title="HTML snippet"
                >
                    <CodeSnippet snippet={HTML_SNIPPET} />
                </Card>

                <Card
                    className={cardClassNames}
                    description="Copy the CSS code and paste it in the Cookiebot CSS box of your custom banner. Don't forget to do the same for the HTML and JavaScript snippets!"
                    number={3}
                    title="Generated CSS"
                >
                    <CSSCode />
                </Card>

                <Card
                    className={cardClassNames}
                    description="Copy the JavaScript snippet and paste it in the Cookiebot JavaScript box."
                    number={4}
                    title="JavaScript snippet"
                >
                    <CodeSnippet snippet={JS_SNIPPET} />
                </Card>
            </main>
        </div>
    );
}
