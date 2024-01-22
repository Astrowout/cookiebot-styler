import { TTheme } from "@/store";

export const replaceString = (snippet: string, values: TTheme): string => {
    let parsedSnippet = snippet;
    const keys = Object.keys(values);
    const regexes = keys.map((key) => {
        return new RegExp("var\\(" + key + "\\)", "g");
    });

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const regex = regexes[i];
        let value: string = String(values[keys[i] as keyof TTheme]);

        if (key.includes("radius")) {
            value = value + "px";
        }

        parsedSnippet = parsedSnippet.replace(regex, value);
    }

    return parsedSnippet;
};