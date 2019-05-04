export interface StyleParams {
    [proName: string]: string;
}

export default class StyleUtils {

    public static objectToString(style: StyleParams): string {

        let strStyle = '';

        for (var key in style) {            

            if (strStyle === '')
                strStyle += key + ':' + style[key];
            else
                strStyle += ';' + key + ':' + style[key];
        }

        return strStyle;
    }
}