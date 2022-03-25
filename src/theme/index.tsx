import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme(
  withDefaultColorScheme({
    colorScheme: "teal",
  }),

  {
    colors: {
      teal: {
        500: "#009f7f",
        600: "#019376",
      },
    },
    components: {
      Input: {
        baseStyle: {
          field: {
            paddingTop: "1.3rem",
            paddingBottom: "1.3rem",
          },
        },
        variants: {
          outline: {
            field: {
              borderColor: "gray.300",
              _hover: {
                borderColor: "gray.400",
              },
              _focus: {
                boxShadow: "none",
              },
            },
          },
        },
        defaultProps: {
          focusBorderColor: "teal.500",
        },
      },
      Textarea: {
        defaultProps: {
          focusBorderColor: "teal.500",
          border: "3px",
        },
      },
      AccordionItem: {
        defaultProps: {
          focusBorderColor: "teal.500",
        },
      },

      // Button: {
      //     baseStyle: {
      //         _focus: {
      //             // boxShadow: "0 0 0 3px var(--chakra-colors-teal-300)",
      //         },
      //     },
      // },
    },
  }
);
export default theme;
