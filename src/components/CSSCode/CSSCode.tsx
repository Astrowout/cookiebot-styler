import {
    SnippetStore, ThemeStore,
} from "@/store";
import { TComponent } from "@/types";
import {
    replaceString, replaceStyles,
} from "@/utils";
import { CodeSnippet } from "..";
import { useEffect } from "react";

type TCSSCodeProps = TComponent & {
    filename?: string;
}

export default function CSSCode ({
    filename,
}: TCSSCodeProps) {
    const { snippet } = SnippetStore();
    const { theme } = ThemeStore();

    const snippetForProduction = replaceString(snippet, theme);

    useEffect(() => {
        replaceStyles(snippetForProduction);
    }, [snippetForProduction]);

    return (
        <CodeSnippet
            filename={filename}
            snippet={snippetForProduction}
        />
    );
}