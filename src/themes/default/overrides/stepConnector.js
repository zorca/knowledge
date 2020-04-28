import { createStyles } from "@material-ui/core/styles";

export default theme => {
    const palette = theme.palette;

    return createStyles({
        line: {
            borderColor: `${palette.primary.main}`,
            borderTopStyle: 'solid',
            borderTopWidth: '3px',
        },
        lineHorizontal: {
            borderColor: `${palette.primary.main}`,
            borderTopStyle: 'solid',
            borderTopWidth: '3px',
        }
    });
};
