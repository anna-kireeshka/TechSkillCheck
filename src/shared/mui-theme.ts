export const getDesignTokens = (mode: string) => ({
  palette: {
    type: mode,
    ...(mode === "light"
      ? {
          primary: { main: "#2C6CB0", dark: "#334366", light: "#e3efff" },
        }
      : {
          primary: { main: "#afd7ff", dark: "#becce9", light: "#151c2a" },
        }),
  },
});

export const getInputFieldStyle = (mode: string) => {
  return mode === "light"
    ? {
        "& .MuiOutlinedInput-root.Mui-error": {
          borderColor: "#ff479b"
        },
        "& label.Mui-focused": {
          color: "#2C6CB0",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#2C6CB0",
          },
          "&:hover fieldset": {
            borderColor: "#2C6CB0",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#2C6CB0",
          },
        },
      }
    : {
        label: {
          color: "#e3efff",
          "&.Mui-error": {
            color: "#ff479b"
          }
        },
        "& label.Mui-focused": {
          color: "#e3efff",
        },
        "& .MuiOutlinedInput-root": {
          color: "#e3efff",
          "& fieldset": {
            backgroundColor: "#a2caff26",
          },
          "&:hover fieldset": {
            borderColor: "#e3efff",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#e3efff",
          },
          "&.Mui-error fieldset": {
            borderColor: "#ff479b"
          }
        },
        "& .MuiFormHelperText-root.Mui-error": {
          color: "#ff479b"
        }
      };
};

export const getDialogStyle = (mode: string) => {
  return mode === "light" ? {
    "& .MuiPaper-root": {
      background: "#fff"
    }
  } : {
    "& .MuiPaper-root": {
      background: "#1e334e"
    }
  }
}